---
title: "sortVersions"
sidebar:
  label: "sortVersions"
description: "Sorts version strings by version, not by text (`1.10.0` after `1.9.0`), in the given scheme: the same as `versions.sort…"
version: "3.1.10"
---

Sorts version strings by version, not by text (`1.10.0` after `1.9.0`), in the given scheme: the
same as `versions.sort((a, b) => compare(a, b, scheme))`, without mutating the input. Versions
that compare as equal keep their order. Strings are returned as they were written (a `v` prefix
stays).

Every version is compared with compare, so in the schemes that throw on invalid input
(`'gentoo'`, `'debian'`, …) a bad version throws a `SyntaxError`: filter with isValid first.

> Available since v3.1.9

## Import

```ts
import { sortVersions } from '@helpers4/version';
// or, from the all-in-one package (same code, one install):
import { sortVersions } from 'helpers4/version';
```

## Signature


```ts
sortVersions<T extends string>(versions: readonly T[], options: SortVersionsOptions): T[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `versions` | `readonly T[]` | The versions to sort |
| `options` | `SortVersionsOptions` | Order and scheme — see SortVersionsOptions |

## Returns

`T[]` — A new sorted array

## Examples

### Sort versions, not strings

1.10.0 comes after 1.9.0, which a plain sort() gets wrong.

```ts
sortVersions(['1.10.0', '1.2.0', '1.9.0'])
// => ['1.2.0', '1.9.0', '1.10.0']
```

### Find the latest tag

Newest first; the v prefix of git tags is kept.

```ts
sortVersions(['v1.0.0', 'v2.0.0-rc.1', 'v1.5.0'], { order: 'desc' })[0]
// => 'v2.0.0-rc.1'
```

## Related Types

### `SortVersionsOptions`

Options for sortVersions.

```ts
interface SortVersionsOptions {
  order?: "desc" | "asc";
  scheme?: VersionScheme;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/sortVersions.ts)
