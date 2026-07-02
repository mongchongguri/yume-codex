---
name: build-progress
description: Use when the user explicitly invokes "/build-progress" or "$build-progress", or when the user asks to run an app build, release APK/AAB build, Expo/React Native build, Gradle build, or other long-running build while receiving progress reports instead of only seeing that a command is running.
---

# Build Progress

Run long build commands with active progress reporting.

## Goal

Keep the user informed during app builds, especially release APK or AAB builds that can appear stuck while Gradle, Expo, or native tooling is still working.

## Workflow

1. Identify the build command and expected artifact.
2. Report the command before starting it.
3. Run the command normally.
4. While it runs, inspect the latest terminal output when available.
5. Report progress about every 30 seconds.
6. Infer the current phase from build output.
7. On completion, report success or failure, artifact path, warnings, and next steps.

## Progress Report Content

Each progress update should include:

- Current build phase
- Last meaningful output line or task name
- Whether the command is still progressing
- Any prompt, warning, or error that needs user attention

For Korean-speaking users, write these updates in Korean.

## Expo And React Native Build Phases

Use these phase names when they match the output:

- Resolving dependencies
- Reading Expo config
- Running prebuild or config plugins
- Configuring Gradle
- Bundling JavaScript
- Processing Android resources
- Compiling Kotlin or Java
- Running `assembleRelease` or `bundleRelease`
- Signing
- Writing APK or AAB artifact

## Stalled-Looking Builds

If output does not change:

- Do not claim the build is frozen unless there is evidence.
- Report the last known phase.
- Say that the process is still running if it has not exited.
- Continue waiting unless there is a clear prompt, failure, timeout, or deadlock.

## Safety

- Do not kill a build unless the user asks or the command is clearly blocked.
- Do not restart a build without explaining why.
- Do not hide warnings that may affect the release artifact.
- Do not run destructive cleanup commands as a default recovery step.

## Completion

After the build exits, report:

- Command result
- Artifact path when available
- Important warnings or errors
- Validation that was run
- Recommended next step, such as installing the APK or testing the release build
