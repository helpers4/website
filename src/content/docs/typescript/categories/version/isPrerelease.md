---
title: "isPrerelease"
sidebar:
  label: "isPrerelease"
description: "Returns `true` when the version string has a prerelease suffix, according to the given `scheme`."
version: "3.1.0"
---

Returns `true` when the version string has a prerelease suffix, according to the given
`scheme`.

**`'semver'`** (default) — `true` when there's a `-` after the core `MAJOR.MINOR.PATCH`.

**`'gentoo'`** — `true` when the last suffix segment is `alpha`/`beta`/`pre`/`rc` (these sort
below the plain release). A `p` suffix or a `-r` revision don't count — `p` sorts *above* the
release, and a revision isn't a prerelease of anything, it's a rebuild of the same version.

> Available since v2.0.0

## Import

```ts
import { isPrerelease } from '@helpers4/version';
```

## Signature


```ts
isPrerelease(version: string, scheme?: VersionScheme): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | A version string \(e\.g\. \`'2\.0\.0\-alpha\.1'\`, \`'1\.0\.0'\`, \`'1\.2\.3\_rc1'\`\)\. |
| `scheme` | `VersionScheme` | Which version scheme to interpret \`version\` as\. Defaults to \`'semver'\`\. *(optional)* |

## Returns

`boolean` — `true` if the version is a prerelease, `false` otherwise.

## Examples

### Detect a prerelease version

Returns true for any version string that contains a prerelease suffix.

```ts
isPrerelease('2.0.0-alpha.1') // true
isPrerelease('1.0.0-rc.0')   // true
```

### Stable versions return false

Returns false when the version has no prerelease suffix.

```ts
isPrerelease('1.0.0') // false
isPrerelease('2.1.3') // false
```

### Accept a ParsedVersion object

Works with the result of parse() — checks the prerelease array instead of string matching.

```ts
isPrerelease(parse('2.0.0-alpha.1')) // true
isPrerelease(parse('1.0.0'))         // false
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

### `VersionScheme`

Identifies which version scheme parse/compare should use to interpret a
version string. Defaults to `'semver'` everywhere it's accepted.

```ts
type VersionScheme = 'semver' | 'gentoo'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/isPrerelease.ts)
