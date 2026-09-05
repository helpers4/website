---
title: "compare"
sidebar:
  label: "compare"
description: "Compares two version strings, according to the given `scheme`."
version: "3.1.0"
---

Compares two version strings, according to the given `scheme`.

**`'semver'`** (default) — SemVer 2.0.0 precedence rules:
- Core version: MAJOR.MINOR.PATCH
- Pre-release: -alpha, -beta.1, -rc.1, etc. (sorts below the plain release)
- Build metadata: +build, +sha.abc123 (ignored in comparison per spec)
- Optional 'v' prefix

**`'gentoo'`** — Gentoo/Portage ebuild version ordering (see ParsedGentooVersion):
numeric components, then letter suffix, then suffix segment (`alpha`/`beta`/`pre`/`rc` sort
below the plain release, `p` sorts above it), then `-r` revision. Note the key difference
from SemVer: a `-r` revision is *not* a prerelease and sorts *above* the base version.

> Available since v1.9.0

## Import

```ts
import { compare } from '@helpers4/version';
// or, from the all-in-one package (same code, one install):
import { compare } from 'helpers4/version';
```

## Signature


```ts
compare(version1: string, version2: string, scheme: VersionScheme): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version1` | `string` | First version string |
| `version2` | `string` | Second version string |
| `scheme` | `VersionScheme` | Which version scheme to compare \`version1\`/\`version2\` as\. Defaults to \`'semver'\`\. |

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

### Gentoo: a revision sorts above its base version

Unlike SemVer's '-' (prerelease, sorts below release), Gentoo's '-r' revision sorts above it.

```ts
compare('1.2.3', '1.2.3-r1', 'gentoo')
// => -1
```

## Related Types

### `VersionScheme`

Identifies which version scheme parse/compare should use to interpret a
version string. Defaults to `'semver'` everywhere it's accepted.

```ts
type VersionScheme = 'semver' | 'gentoo'
```

:::caution[Name conflict]
A helper named `compare` also exists in [`@helpers4/date`](../date/compare/). If you need both in the same file, rename at import with `as`:

```ts
import { compare as compare4version } from '@helpers4/version';
import { compare as compare4date } from '@helpers4/date';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/compare.ts)
