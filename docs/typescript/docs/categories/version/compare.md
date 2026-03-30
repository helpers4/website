---
sidebar_label: "compare"
---

# compare

Compares two semantic version strings according to SemVer 2.0.0 specification

Supports:
- Core version: MAJOR.MINOR.PATCH
- Pre-release: -alpha, -beta.1, -rc.1, etc.
- Build metadata: +build, +sha.abc123 (ignored in comparison per spec)
- Optional 'v' prefix

## Import

```ts
import { compare } from '@helpers4/version';
```

## Signature

```ts
function compare(version1: string, version2: string): number
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `version1` | First version string |
| `version2` | Second version string |

## Returns

-1 if version1 < version2, 0 if equal, 1 if version1 > version2

## Example

```ts
compare('1.0.0', '2.0.0') // -1
compare('1.0.0-alpha', '1.0.0') // -1 (prerelease < release)
compare('1.0.0-alpha', '1.0.0-beta') // -1
compare('1.0.0-alpha.1', '1.0.0-alpha.2') // -1
compare('1.0.0+build1', '1.0.0+build2') // 0 (build metadata ignored)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/compare.ts)
