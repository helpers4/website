---
sidebar_label: "Version"
sidebar_position: 0
title: "Version Helpers"
---

# Version Helpers

Utility functions for working with version operations.

## Functions

| Function | Description |
|----------|-------------|
| [`compare`](compare) | Compares two semantic version strings according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.PATCH - Pre-release: -alpha, -beta.1, -rc.1, etc. - Build metadata: +build, +sha.abc123 (ignored in comparison per spec) - Optional 'v' prefix |
| [`increment`](increment) | Increments a semantic version |
| [`parse`](parse) | Parses a semantic version string into its components according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.PATCH - Pre-release: -alpha, -beta.1, -rc.1, -0.3.7, -x.7.z.92 - Build metadata: +build, +sha.abc123, +20130313144700 - Optional 'v' prefix (commonly used in git tags) |
| [`ParsedVersion`](ParsedVersion) | Represents a parsed semantic version according to SemVer 2.0.0 specification |
| [`satisfiesRange`](satisfiesRange) | Checks if a version satisfies a range (simple implementation) |
| [`stripV`](stripV) | Strip the leading "v" from a version string if it exists. |

