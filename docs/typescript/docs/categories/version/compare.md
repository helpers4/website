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

> Available since v1.9.0

## Import

```ts
import { compare } from '@helpers4/version';
```

## Signature


```ts
compare(version1: string, version2: string): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version1` | `string` | First version string |
| `version2` | `string` | Second version string |

## Returns

`number` — -1 if version1 < version2, 0 if equal, 1 if version1 > version2

## Examples

### Compare two semver versions

Returns -1, 0, or 1 based on SemVer ordering.

```ts
compare('1.0.0', '2.0.0') // => -1
compare('1.0.0', '1.0.0') // => 0
compare('2.0.0', '1.0.0') // => 1
```

### Prerelease is lower than release

A prerelease version is always less than the release.

```ts
compare('1.0.0-alpha', '1.0.0')
// => -1
```

:::caution[Name conflict]
A helper named `compare` also exists in [`@helpers4/date`](../date/compare). If you need both in the same file, rename at import with `as`:

```ts
import { compare as compare4version } from '@helpers4/version';
import { compare as compare4date } from '@helpers4/date';
```

See [Name Conflicts](../../reference/naming-conflicts) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/compare.ts)
