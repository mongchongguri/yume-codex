#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const PACKAGE_SPEC = "github:mongchongguri/yume-codex";
const MANIFEST_PATH = ".codex/yume-codex.manifest.json";
const PRESERVED_TEMPLATE_PATHS = new Set([
  ".codex/context/description.md"
]);
const LEGACY_MANAGED_PATHS = [
  ".codex/skills/context-summary/SKILL.md",
  ".codex/skills/context-summary/agents/openai.yaml",
  ".codex/skills/context-reader/SKILL.md",
  ".codex/skills/context-reader/agents/openai.yaml"
];
const REQUIRED_PATHS = [
  "AGENTS.md",
  ".codex/common/rules/frontend-decisions.md",
  ".codex/common/rules/frontend/state.md",
  ".codex/common/rules/frontend/styling-ui.md",
  ".codex/common/rules/frontend/icons.md",
  ".codex/common/rules/frontend/reporting.md",
  ".codex/common/rules/report.md",
  ".codex/common/rules/typescript.md",
  ".codex/common/rules/versioning.md",
  ".codex/context/description.md",
  ".codex/common/design/principles.md",
  ".codex/common/design/layout.md",
  ".codex/common/design/interaction.md",
  ".codex/skills/summary/SKILL.md",
  ".codex/skills/summary/agents/openai.yaml",
  ".codex/skills/worklog/SKILL.md",
  ".codex/skills/worklog/agents/openai.yaml",
  ".codex/skills/handoff/SKILL.md",
  ".codex/skills/handoff/agents/openai.yaml",
  ".codex/skills/git/SKILL.md",
  ".codex/skills/git/agents/openai.yaml",
  ".codex/skills/icon-image/SKILL.md",
  ".codex/skills/icon-image/agents/openai.yaml",
  ".codex/skills/icon-image/references/implementation.md",
  ".codex/skills/read-summary/SKILL.md",
  ".codex/skills/read-summary/agents/openai.yaml",
  ".codex/skills/read-worklog/SKILL.md",
  ".codex/skills/read-worklog/agents/openai.yaml",
  ".codex/skills/read-handoff/SKILL.md",
  ".codex/skills/read-handoff/agents/openai.yaml",
  ".codex/workflow/summary/.gitkeep",
  ".codex/workflow/worklog/.gitkeep",
  ".codex/workflow/handoff/.gitkeep",
  ".codex/stacks/react/react.md",
  ".codex/stacks/react/decisions.md",
  ".codex/stacks/react/design.md",
  ".codex/stacks/expo/expo.md",
  ".codex/stacks/expo/expo-app-icon.md",
  ".codex/stacks/expo/expo-app-icon-implementation.md",
  ".codex/stacks/expo/expo-keyboard-avoidance.md",
  ".codex/stacks/expo/expo-keyboard-avoidance-patterns.md",
  ".codex/stacks/expo/decisions.md",
  ".codex/stacks/expo/design.md",
  ".codex/stacks/react-native/react-native.md",
  ".codex/stacks/react-native/decisions.md",
  ".codex/stacks/react-native/design.md"
];

function printHelp() {
  console.log(`yume-codex

Usage:
  yume-codex init [target] [--force]
  yume-codex rebase [target]
  yume-codex doctor [target]
  yume-codex update [ref]
  yume-codex --version
  yume-codex --help

Commands:
  init      Copy AGENTS.md and .codex harness templates into the target directory.
  rebase    Overwrite existing harness files and add new harness files.
  doctor    Check whether the target directory has the required harness files.
  update    Reinstall this CLI globally from GitHub. Defaults to the main branch.

Options:
  --force   Overwrite existing template files during init.

Examples:
  yume-codex init
  yume-codex rebase
  yume-codex update
  yume-codex update v0.1.4
`);
}

function readPackageVersion() {
  const packageJson = JSON.parse(fs.readFileSync(path.join(PACKAGE_ROOT, "package.json"), "utf8"));
  return packageJson.version;
}

function parseArgs(argv) {
  const [command = "--help", ...rest] = argv;
  const options = {
    command,
    target: undefined,
    force: false
  };

  const positional = [];
  for (const arg of rest) {
    if (arg === "--force") {
      options.force = true;
      continue;
    }

    if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    }

    positional.push(arg);
  }

  if (positional.length > 1) {
    throw new Error("Only one target path can be provided.");
  }

  if (positional.length === 1) {
    options.target = positional[0];
  }

  return options;
}

function resolveTarget(target) {
  const resolved = path.resolve(process.cwd(), target);

  if (!fs.existsSync(resolved)) {
    throw new Error(`Target directory does not exist: ${resolved}`);
  }

  if (!fs.statSync(resolved).isDirectory()) {
    throw new Error(`Target is not a directory: ${resolved}`);
  }

  return resolved;
}

function ensureInsideTarget(targetRoot, candidatePath) {
  const relative = path.relative(targetRoot, candidatePath);

  if (relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative))) {
    return;
  }

  throw new Error(`Refusing to write outside target directory: ${candidatePath}`);
}

function copyFile(sourceFile, destinationFile, force, templatePath) {
  const targetRoot = findTargetRoot(destinationFile);
  ensureInsideTarget(targetRoot, destinationFile);

  const existsBeforeCopy = fs.existsSync(destinationFile);
  if (existsBeforeCopy && isPreservedTemplatePath(templatePath)) {
    return { status: "preserved", file: destinationFile };
  }

  if (existsBeforeCopy && !force) {
    return { status: "skipped", file: destinationFile };
  }

  fs.mkdirSync(path.dirname(destinationFile), { recursive: true });
  fs.copyFileSync(sourceFile, destinationFile);
  return { status: existsBeforeCopy ? "written" : "created", file: destinationFile };
}

function isPreservedTemplatePath(templatePath) {
  return PRESERVED_TEMPLATE_PATHS.has(toPosixPath(templatePath || ""));
}

function findTargetRoot(destinationFile) {
  const normalized = path.normalize(destinationFile);
  const codexSegment = `${path.sep}.codex${path.sep}`;
  const codexIndex = normalized.indexOf(codexSegment);

  if (codexIndex !== -1) {
    return normalized.slice(0, codexIndex);
  }

  return path.dirname(destinationFile);
}

function collectFiles(sourceRoot) {
  const files = [];

  for (const entry of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
    const absolutePath = path.join(sourceRoot, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectFiles(absolutePath));
      continue;
    }

    if (entry.isFile() && shouldIncludeTemplateFile(absolutePath)) {
      files.push(absolutePath);
    }
  }

  return files;
}

function shouldIncludeTemplateFile(sourceFile) {
  const relativeToPackage = toPosixPath(path.relative(PACKAGE_ROOT, sourceFile));

  if (relativeToPackage === MANIFEST_PATH) {
    return false;
  }

  if (/^\.codex\/workflow\/.+\.md$/.test(relativeToPackage)) {
    return false;
  }

  return true;
}

function toPosixPath(filePath) {
  return filePath.split(path.sep).join("/");
}

function loadManifest(targetRoot) {
  const manifestFile = path.join(targetRoot, MANIFEST_PATH);

  if (!fs.existsSync(manifestFile)) {
    return [];
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
    return Array.isArray(parsed.files) ? parsed.files : [];
  } catch {
    return [];
  }
}

function writeManifest(targetRoot, files) {
  const manifestFile = path.join(targetRoot, MANIFEST_PATH);
  const manifest = {
    generatedBy: "yume-codex",
    version: readPackageVersion(),
    files: [...files].sort()
  };

  fs.mkdirSync(path.dirname(manifestFile), { recursive: true });
  fs.writeFileSync(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

function pruneManagedFiles(targetRoot, nextFiles) {
  const nextFileSet = new Set(nextFiles);
  const previousFiles = loadManifest(targetRoot);
  const pruneCandidates = new Set([...previousFiles, ...LEGACY_MANAGED_PATHS]);
  const pruned = [];
  const failed = [];

  for (const relativePath of pruneCandidates) {
    if (nextFileSet.has(relativePath) || relativePath === MANIFEST_PATH || isPreservedTemplatePath(relativePath)) {
      continue;
    }

    const absolutePath = path.join(targetRoot, relativePath);
    ensureInsideTarget(targetRoot, absolutePath);

    if (!fs.existsSync(absolutePath) || !fs.statSync(absolutePath).isFile()) {
      continue;
    }

    try {
      fs.chmodSync(absolutePath, 0o666);
      fs.rmSync(absolutePath, { force: true });
      pruned.push(absolutePath);
    } catch {
      failed.push(relativePath);
    }
  }

  return {
    pruned,
    failed
  };
}

/**
 * Copies the Codex harness templates while preserving existing files unless force is set.
 */
function initHarness(target, force) {
  const targetRoot = resolveTarget(target);
  const copyResults = [];
  const manifestFiles = ["AGENTS.md"];

  const agentsSource = path.join(PACKAGE_ROOT, "AGENTS.md");
  copyResults.push(copyFile(agentsSource, path.join(targetRoot, "AGENTS.md"), force, "AGENTS.md"));

  const codexSourceRoot = path.join(PACKAGE_ROOT, ".codex");
  for (const sourceFile of collectFiles(codexSourceRoot)) {
    const relativePath = path.relative(codexSourceRoot, sourceFile);
    const destinationFile = path.join(targetRoot, ".codex", relativePath);
    const manifestPath = toPosixPath(path.join(".codex", relativePath));
    ensureInsideTarget(targetRoot, destinationFile);
    copyResults.push(copyFile(sourceFile, destinationFile, force, manifestPath));
    manifestFiles.push(manifestPath);
  }

  const pruneResult = force ? pruneManagedFiles(targetRoot, manifestFiles) : { pruned: [], failed: [] };
  writeManifest(targetRoot, [...manifestFiles, ...pruneResult.failed]);

  return {
    copyResults,
    pruned: pruneResult.pruned,
    pruneFailed: pruneResult.failed
  };
}

/**
 * Verifies that a project has the minimum files needed by the Codex harness.
 */
function doctor(target) {
  const targetRoot = resolveTarget(target);
  const missing = REQUIRED_PATHS.filter((requiredPath) => {
    return !fs.existsSync(path.join(targetRoot, requiredPath));
  });

  return {
    targetRoot,
    missing
  };
}

function normalizeUpdateRef(ref) {
  const normalized = ref || "main";

  if (normalized.startsWith("-")) {
    throw new Error(`Invalid update ref: ${normalized}`);
  }

  if (normalized.includes("..") || normalized.includes("\\") || !/^[A-Za-z0-9._/-]+$/.test(normalized)) {
    throw new Error(`Invalid update ref: ${normalized}`);
  }

  return normalized;
}

/**
 * Reinstalls the global CLI from the configured GitHub repository and ref.
 */
function updateCli(ref) {
  const normalizedRef = normalizeUpdateRef(ref);
  const useShell = process.platform === "win32";
  const packageSpec = `${PACKAGE_SPEC}#${normalizedRef}`;
  const result = spawnSync("npm", ["install", "-g", packageSpec], {
    stdio: "inherit",
    shell: useShell
  });

  if (result.error) {
    throw result.error;
  }

  return result.status || 0;
}

function printInitResult(results) {
  const created = results.copyResults.filter((result) => result.status === "created").length;
  const written = results.copyResults.filter((result) => result.status === "written").length;
  const skipped = results.copyResults.filter((result) => result.status === "skipped").length;
  const preserved = results.copyResults.filter((result) => result.status === "preserved").length;

  console.log(`Harness files processed: ${results.copyResults.length}`);
  console.log(`Created: ${created}`);
  console.log(`Written: ${written}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Preserved: ${preserved}`);
  console.log(`Pruned: ${results.pruned.length}`);
  console.log(`Prune failed: ${results.pruneFailed.length}`);

  if (skipped > 0) {
    console.log("Use --force to overwrite existing files.");
  }

  if (results.pruneFailed.length > 0) {
    console.log("Some removed managed files could not be deleted and will be retried on the next rebase.");
  }
}

function main(argv) {
  const options = parseArgs(argv);

  switch (options.command) {
    case "--help":
    case "-h":
    case "help":
      printHelp();
      return 0;
    case "--version":
    case "-v":
    case "version":
      console.log(readPackageVersion());
      return 0;
    case "init":
      printInitResult(initHarness(options.target || ".", options.force));
      return 0;
    case "rebase":
      printInitResult(initHarness(options.target || ".", true));
      return 0;
    case "doctor": {
      const result = doctor(options.target || ".");
      if (result.missing.length === 0) {
        console.log(`OK: ${result.targetRoot}`);
        return 0;
      }

      console.error(`Missing harness files in ${result.targetRoot}:`);
      for (const missingPath of result.missing) {
        console.error(`- ${missingPath}`);
      }
      return 1;
    }
    case "update":
      return updateCli(options.target);
    default:
      throw new Error(`Unknown command: ${options.command}`);
  }
}

try {
  process.exitCode = main(process.argv.slice(2));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
