---
title: "parse"
sidebar:
  label: "parse"
---

Parses a semantic version string into its components according to SemVer 2.0.0 specification

Supports:
- Core version: MAJOR.MINOR.PATCH
- Pre-release: -alpha, -beta.1, -rc.1, -0.3.7, -x.7.z.92
- Build metadata: +build, +sha.abc123, +20130313144700
- Optional 'v' prefix (commonly used in git tags)

> Available since v2.0.0

## Import

```ts
import { parse } from '@helpers4/version';
```

## Signature


```ts
parse(version: string): ParsedVersion
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | Version string to parse |

## Returns

`ParsedVersion` — Parsed version object with major, minor, patch, prerelease, and build

## Examples

### Parse a semver string

Breaks a semantic version string into its components.

```ts
parse('1.2.3')
// => { major: 1, minor: 2, patch: 3, prerelease: [], build: [] }
```

### Parse a prerelease version

Handles prerelease identifiers and optional v prefix.

```ts
parse('v2.0.0-alpha.1')
// => { major: 2, minor: 0, patch: 0, prerelease: ['alpha', '1'], build: [] }
```

## Related Types

### `ParsedVersion`

Represents a parsed semantic version according to SemVer 2.0.0 specification

```ts
interface ParsedVersion {
  build: string[];
  major: number;
  minor: number;
  patch: number;
  prerelease: string[];
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/parse.ts)
