---
title: "stringify"
sidebar:
  label: "stringify"
description: "Reconstructs a version string from a AnyParsedVersion object — the scheme is read from the object's own `scheme` field,…"
version: "3.1.9"
---

Reconstructs a version string from a AnyParsedVersion object — the scheme is read from
the object's own `scheme` field, not passed separately (a `ParsedGentooVersion` can only ever
stringify as Gentoo, so there's nothing to disambiguate).

This is the inverse of parse:
`stringify(parse(v)) === stripV(v)` for any valid version string `v`, in any scheme — up to
canonicalization (a Debian `0:` epoch is dropped, a Gentoo `_beta0` becomes `_beta`, a PEP 440
`1.0-ALPHA` becomes `1.0a0`, a Maven `1.0.0` becomes `1`).

> Available since v2.0.0

## Import

```ts
import { stringify } from '@helpers4/version';
// or, from the all-in-one package (same code, one install):
import { stringify } from 'helpers4/version';
```

## Signature


```ts
stringify(parsed: AnyParsedVersion): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `parsed` | `AnyParsedVersion` | A parsed version object, as returned by parse\. |

## Returns

`string` — The reconstructed version string (without leading `v`).

## Examples

### Reconstruct a stable version

Converts a ParsedVersion object back to a version string.

```ts
stringify({ scheme: 'semver', major: 1, minor: 2, patch: 3, prerelease: [], build: [] })
// => '1.2.3'
```

### Round-trip with parse

stringify(parse(v)) returns the original version string (without leading v).

```ts
stringify(parse('2.0.0-alpha.1'))
// => '2.0.0-alpha.1'

stringify(parse('1.0.0-beta+exp.sha.5114f85'))
// => '1.0.0-beta+exp.sha.5114f85'
```

### Reconstruct a Gentoo/Portage version

The scheme is read from the parsed object itself, not passed separately.

```ts
stringify({ scheme: 'gentoo', components: [1, 2, 3], letter: 'b', suffixes: [{ type: 'rc', number: 1 }], revision: 2 })
// => '1.2.3b_rc1-r2'
```

## Related Types

### `AnyParsedVersion`

A version parsed by parse, in whichever scheme it was parsed as — narrow on the
`scheme` field to access scheme-specific properties (`major`/`minor`/`patch` for `'semver'`,
`components`/`letter`/`suffixes`/`revision` for `'gentoo'`, `epoch`/`upstream`/`revision` for
`'debian'`, `epoch`/`version`/`release` for `'rpm'` and `'pacman'`, `epoch`/`release`/`pre`/`post`/`dev`/`local`
for `'pep440'`, a normalized `items` list for `'maven'`).

Deliberately **not** named `ParsedVersion`: that name has been public API since 2.0.0 for
the flat SemVer-only shape (`.major`/`.minor`/`.patch` directly, no narrowing needed), and
turning it into a union would silently break any existing code typed as `ParsedVersion` that
reads those fields without narrowing first — a real compatibility break with no
`MIGRATION.md` entry, since this repo ties breaking changes to major-version bumps.

```ts
type AnyParsedVersion =
  | ParsedSemVerVersion
  | ParsedGentooVersion
  | ParsedDebianVersion
  | ParsedRpmVersion
  | ParsedPacmanVersion
  | ParsedPep440Version
  | ParsedMavenVersion
```

:::caution[Name conflict]
A helper named `stringify` also exists in [`@helpers4/json`](../json/stringify/). If you need both in the same file, rename at import with `as`:

```ts
import { stringify as stringify4version } from '@helpers4/version';
import { stringify as stringify4json } from '@helpers4/json';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/stringify.ts)
