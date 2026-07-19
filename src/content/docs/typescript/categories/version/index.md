---
title: "Version Helpers"
sidebar:
  label: "Version"
  order: 0
---

Utility functions for working with version operations.

## Functions

| Function | Description |
|----------|-------------|
| [`compare`](./compare/) | Compares two semantic version strings according to SemVer 2\.0\.0 specification  Supports: \- Core version: MAJOR\.MINOR\.… |
| [`increment`](./increment/) | Increments a semantic version |
| [`incrementPrerelease`](./incrementprerelease/) | Increments the prerelease portion of a semantic version — the semantics \`npm version prerelease \-\-preid <id>\` uses, n… |
| [`isPrerelease`](./isprerelease/) | Returns \`true\` when the version string has a prerelease suffix \(i\.e\. |
| [`parse`](./parse/) | Parses a semantic version string into its components according to SemVer 2\.0\.0 specification  Supports: \- Core versio… |
| [`satisfiesRange`](./satisfiesrange/) | Checks if a version satisfies a range \(simple implementation\) |
| [`stringify`](./stringify/) | Reconstruct a semantic version string from a ParsedVersion object\. |
| [`stripV`](./stripv/) | Strip the leading "v" from a version string if it exists\. |

