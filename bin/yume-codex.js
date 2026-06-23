#!/usr/bin/env node

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const PACKAGE_SPEC = "github:mongchongguri/yume-codex";
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
  ".codex/skills/context-summary/SKILL.md",
  ".codex/skills/context-summary/agents/openai.yaml",
  ".codex/skills/context-reader/SKILL.md",
  ".codex/skills/context-reader/agents/openai.yaml",
  ".codex/workflow/summary/.gitkeep",
  ".codex/workflow/worklog/.gitkeep",
  ".codex/workflow/handoff/.gitkeep",
  ".codex/stacks/react/decisions.md",
  ".codex/stacks/react/design.md",
  ".codex/stacks/expo/decisions.md",
  ".codex/stacks/expo/design.md",
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
  yume-codex update v0.1.0
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

function copyFile(sourceFile, destinationFile, force) {
  ensureInsideTarget(path.dirname(destinationFile), destinationFile);

  const existsBeforeCopy = fs.existsSync(destinationFile);
  if (existsBeforeCopy && !force) {
    return { status: "skipped", file: destinationFile };
  }

  fs.mkdirSync(path.dirname(destinationFile), { recursive: true });
  fs.copyFileSync(sourceFile, destinationFile);
  return { status: existsBeforeCopy ? "written" : "created", file: destinationFile };
}

function collectFiles(sourceRoot) {
  const files = [];

  for (const entry of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
    const absolutePath = path.join(sourceRoot, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectFiles(absolutePath));
      continue;
    }

    if (entry.isFile()) {
      files.push(absolutePath);
    }
  }

  return files;
}

/**
 * Copies the Codex harness templates while preserving existing files unless force is set.
 */
function initHarness(target, force) {
  const targetRoot = resolveTarget(target);
  const copyResults = [];

  const agentsSource = path.join(PACKAGE_ROOT, "AGENTS.md");
  copyResults.push(copyFile(agentsSource, path.join(targetRoot, "AGENTS.md"), force));

  const codexSourceRoot = path.join(PACKAGE_ROOT, ".codex");
  for (const sourceFile of collectFiles(codexSourceRoot)) {
    const relativePath = path.relative(codexSourceRoot, sourceFile);
    const destinationFile = path.join(targetRoot, ".codex", relativePath);
    ensureInsideTarget(targetRoot, destinationFile);
    copyResults.push(copyFile(sourceFile, destinationFile, force));
  }

  return copyResults;
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
  const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
  const packageSpec = `${PACKAGE_SPEC}#${normalizedRef}`;
  const result = spawnSync(npmCommand, ["install", "-g", packageSpec], {
    stdio: "inherit"
  });

  if (result.error) {
    throw result.error;
  }

  return result.status || 0;
}

function printInitResult(results) {
  const created = results.filter((result) => result.status === "created").length;
  const written = results.filter((result) => result.status === "written").length;
  const skipped = results.filter((result) => result.status === "skipped").length;

  console.log(`Harness files processed: ${results.length}`);
  console.log(`Created: ${created}`);
  console.log(`Written: ${written}`);
  console.log(`Skipped: ${skipped}`);

  if (skipped > 0) {
    console.log("Use --force to overwrite existing files.");
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
