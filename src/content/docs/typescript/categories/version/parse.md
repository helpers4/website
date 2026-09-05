---
title: "parse"
sidebar:
  label: "parse"
description: "Parses a version string into its components, according to the given `scheme`."
version: "3.1.0"
---

Parses a version string into its components, according to the given `scheme`.

**`'semver'`** (default) — SemVer 2.0.0. Supports:
- Core version: MAJOR.MINOR.PATCH
- Pre-release: -alpha, -beta.1, -rc.1, -0.3.7, -x.7.z.92
- Build metadata: +build, +sha.abc123, +20130313144700
- Optional 'v' prefix (commonly used in git tags)

**`'gentoo'`** — Gentoo/Portage ebuild versions (see ParsedGentooVersion). Throws a
`SyntaxError` if `version` doesn't match the grammar (unlike `'semver'`, which never throws).

> Available since v2.0.0

## Import

```ts
import { parse } from '@helpers4/version';
```

## Signature


```ts
parse(version: string, scheme?: "semver"): ParsedSemVerVersion
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | Version string to parse |
| `scheme` | `"semver"` | Which version scheme to parse \`version\` as\. Defaults to \`'semver'\`\. *(optional)* |

## Returns

`ParsedSemVerVersion` — The parsed version, shaped per `scheme` — ParsedSemVerVersion for `'semver'`,
ParsedGentooVersion for `'gentoo'`.

## Examples

### Parse a semver string

Breaks a semantic version string into its components.

```ts
parse('1.2.3')
// => { scheme: 'semver', major: 1, minor: 2, patch: 3, prerelease: [], build: [] }
```

### Parse a prerelease version

Handles prerelease identifiers and optional v prefix.

```ts
parse('v2.0.0-alpha.1')
// => { scheme: 'semver', major: 2, minor: 0, patch: 0, prerelease: ['alpha', '1'], build: [] }
```

### Parse a Gentoo/Portage ebuild version

Pass 'gentoo' as the scheme to parse Gentoo's own version format instead of SemVer.

```ts
parse('1.2.3b_rc1-r2', 'gentoo')
// => { scheme: 'gentoo', components: [1, 2, 3], letter: 'b', suffixes: [{ type: 'rc', number: 1 }], revision: 2 }
```

## Related Types

### `ParsedGentooVersion`

A version parsed according to the Gentoo/Portage ebuild version specification (Package
Manager Specification §3.2–3.3): `<components>[<letter>](_<suffix><n>?)*[-r<revision>]`,
e.g. `1.2.3b_rc1-r2`.

This implementation covers the common case of **zero or one** suffix segment (`_alpha1`,
`_p2`, or none) — real-world ebuild versions essentially never chain multiple different
suffix types (`_alpha1_rc2`), so compare's Gentoo-scheme ordering only considers the
*last* suffix segment present when more than one appears.

```ts
interface ParsedGentooVersion {
  components: number[];
  letter: string;
  revision: number;
  scheme: "gentoo";
  suffixes: GentooSuffix[];
}
```

### `ParsedSemVerVersion`

A version parsed according to SemVer 2.0.0 (`MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]`).

This is what ParsedVersion has always meant since 2.0.0 — that name stays an alias
for exactly this shape (see ParsedVersion's own doc for why), so existing code
accessing `.major`/`.minor`/`.patch` on a `ParsedVersion` keeps compiling unchanged. Use
AnyParsedVersion for a value that could be parsed in any supported scheme.

```ts
interface ParsedSemVerVersion {
  build: string[];
  major: number;
  minor: number;
  patch: number;
  prerelease: string[];
  scheme: "semver";
}
```

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

### `GentooSuffix`

One suffix segment of a Gentoo/Portage version, e.g. `_alpha1` → `{ type: 'alpha', number: 1 }`.

```ts
interface GentooSuffix {
  number: number;
  type: GentooSuffixType;
}
```

### `GentooSuffixType`

One Gentoo/Portage suffix type, in ascending order of precedence: `alpha` and `beta` sort
below the plain release, `pre` and `rc` do too (closer to release), and `p` (patch level)
sorts *above* it — see ParsedGentooVersion.

```ts
type GentooSuffixType = 'alpha' | 'beta' | 'pre' | 'rc' | 'p'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/parse.ts)
