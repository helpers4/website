---
title: "stringify"
sidebar:
  label: "stringify"
description: "Reconstructs a version string from a AnyParsedVersion object — the scheme is read from the object's own `scheme` field,…"
version: "3.1.0"
---

Reconstructs a version string from a AnyParsedVersion object — the scheme is read from
the object's own `scheme` field, not passed separately (a `ParsedGentooVersion` can only ever
stringify as Gentoo, so there's nothing to disambiguate).

This is the inverse of parse:
`stringify(parse(v)) === stripV(v)` for any valid version string `v`, in either scheme.

> Available since v2.0.0

## Import

```ts
import { stringify } from '@helpers4/version';
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
`components`/`letter`/`suffixes`/`revision` for `'gentoo'`).

Deliberately **not** named `ParsedVersion`: that name has been public API since 2.0.0 for
the flat SemVer-only shape (`.major`/`.minor`/`.patch` directly, no narrowing needed), and
turning it into a union would silently break any existing code typed as `ParsedVersion` that
reads those fields without narrowing first — a real compatibility break with no
`MIGRATION.md` entry, since this repo ties breaking changes to major-version bumps.

```ts
type AnyParsedVersion = ParsedSemVerVersion | ParsedGentooVersion
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/stringify.ts)
