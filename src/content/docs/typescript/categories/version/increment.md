---
title: "increment"
sidebar:
  label: "increment"
description: "Increments a version, according to the given `scheme`."
version: "3.1.0"
---

Increments a version, according to the given `scheme`.

**`'semver'`** (default) — bumps `major`/`minor`/`patch` per SemVer, resetting the
finer-grained components (bumping `major` resets `minor` and `patch` to `0`, etc.) and
dropping any prerelease/build metadata.

**`'gentoo'`** — bumps the component at `type`'s position (`major` → 1st, `minor` → 2nd,
`patch` → 3rd — Gentoo's `components` array can be any length, but the first three follow
the same positional convention as SemVer), zeroing everything after it and dropping the
letter/suffixes/revision.

> Available since v1.9.0

## Import

```ts
import { increment } from '@helpers4/version';
```

## Signature


```ts
increment(version: string, type: IncrementType, scheme?: VersionScheme): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | The version to increment |
| `type` | `IncrementType` | The increment type \('major', 'minor', 'patch'\) |
| `scheme` | `VersionScheme` | Which version scheme to interpret \`version\` as\. Defaults to \`'semver'\`\. *(optional)* |

## Returns

`string` — Incremented version string

## Examples

### Increment the patch version

Bumps the patch number while keeping major and minor.

```ts
increment('1.2.3', 'patch')
// => '1.2.4'
```

### Increment the minor version

Bumps the minor number and resets patch to 0.

```ts
increment('1.2.3', 'minor')
// => '1.3.0'
```

### Preserve the v prefix

The v prefix is preserved if present in the input.

```ts
increment('v1.0.0', 'major')
// => 'v2.0.0'
```

### Increment a Gentoo/Portage version

Drops any letter/suffix/revision and resets components after the bumped one, same as the SemVer scheme.

```ts
increment('1.2.3_rc1', 'patch', 'gentoo')
// => '1.2.4'
```

## Related Types

### `IncrementType`

The unit to bump — see increment.

```ts
type IncrementType = 'major' | 'minor' | 'patch'
```

### `VersionScheme`

Identifies which version scheme parse/compare should use to interpret a
version string. Defaults to `'semver'` everywhere it's accepted.

```ts
type VersionScheme = 'semver' | 'gentoo'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/increment.ts)
