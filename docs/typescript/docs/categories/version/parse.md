---
sidebar_label: "parse"
---

# parse

Parses a semantic version string into its components according to SemVer 2.0.0 specification

Supports:
- Core version: MAJOR.MINOR.PATCH
- Pre-release: -alpha, -beta.1, -rc.1, -0.3.7, -x.7.z.92
- Build metadata: +build, +sha.abc123, +20130313144700
- Optional 'v' prefix (commonly used in git tags)

## Import

```ts
import { parse, ParsedVersion } from '@helpers4/version';
```

## Signature

```ts
function parse(version: string): ParsedVersion
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `version` | Version string to parse |

## Returns

Parsed version object with major, minor, patch, prerelease, and build

## Example

```ts
parse('1.2.3') // { major: 1, minor: 2, patch: 3, prerelease: [], build: [] }
parse('v1.0.0-alpha.1') // { major: 1, minor: 0, patch: 0, prerelease: ['alpha', '1'], build: [] }
parse('2.0.0+build.123') // { major: 2, minor: 0, patch: 0, prerelease: [], build: ['build', '123'] }
parse('1.0.0-beta+exp.sha.5114f85') // { major: 1, minor: 0, patch: 0, prerelease: ['beta'], build: ['exp', 'sha', '5114f85'] }
```

## Types

### `ParsedVersion`

Represents a parsed semantic version according to SemVer 2.0.0 specification

```ts
interface ParsedVersion
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/parse.ts)
