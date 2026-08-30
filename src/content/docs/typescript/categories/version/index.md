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
| [`compare`](./compare/) | Compares two version strings, according to the given \`scheme\`\. |
| [`increment`](./increment/) | Increments a version, according to the given \`scheme\`\. |
| [`incrementPrerelease`](./incrementprerelease/) | Increments the prerelease portion of a version, according to the given \`scheme\` — the semantics \`npm version prerelease… |
| [`isPrerelease`](./isprerelease/) | Returns \`true\` when the version string has a prerelease suffix, according to the given \`scheme\`\. |
| [`parse`](./parse/) | Parses a version string into its components, according to the given \`scheme\`\. |
| [`ParsedVersion`](./parsedversion/) | A version parsed according to SemVer 2\.0\.0 — alias of ParsedSemVerVersion, kept under this name for backward compatibil… |
| [`satisfiesRange`](./satisfiesrange/) | Checks if a version satisfies a range, according to the given \`scheme\` \(simple implementation — see each scheme's own d… |
| [`stringify`](./stringify/) | Reconstructs a version string from a AnyParsedVersion object — the scheme is read from the object's own \`scheme\` field,… |
| [`stripV`](./stripv/) | Strip the leading "v" from a version string if it exists\. |

