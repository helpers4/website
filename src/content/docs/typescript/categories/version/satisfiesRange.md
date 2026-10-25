---
title: "satisfiesRange"
sidebar:
  label: "satisfiesRange"
description: "Checks if a version satisfies a range, according to the given `scheme` (simple implementation — see each scheme's own d…"
version: "3.1.8"
---

Checks if a version satisfies a range, according to the given `scheme` (simple
implementation — see each scheme's own doc for exactly which operators are supported).

**`'semver'`** (default) — `>=`, `>`, `<=`, `<`, `^` (caret, patch+minor updates within the
same major), `~` (tilde, patch updates within the same major.minor), or an exact match.

**`'gentoo'`** — `>=`, `>`, `<=`, `<`, or an exact match, compared per Gentoo/Portage
ordering (see compare). `^`/`~` throw: Portage's own atom syntax gives those
characters different, unrelated meanings, so silently reusing SemVer's semantics for them
would be actively misleading rather than merely unsupported.

**`'debian'`** — dpkg relation operators, as written in `Depends:` fields: `<<` (strictly
earlier), `<=`, `=`, `>=`, `>>` (strictly later), or an exact match, compared per dpkg ordering
(see compare); whitespace after the operator is allowed (`>= 1.0`). The obsolete
single-character `<`/`>` throw — dpkg reads them as `<=`/`>=`, the opposite of what they look
like — and so do `^`/`~`.

**`'rpm'`**, **`'pacman'`** — dependency relations: `<`, `<=`, `=` (or `==`), `>=`, `>` followed by a
version, or a bare version for an exact match; whitespace after the operator is allowed. Compared
per RPM / pacman ordering (see compare).

**`'pep440'`** — a PEP 440 specifier set, as in `requirements.txt`: comma-separated clauses that
must all hold, each one of `==` / `!=` (also with a `.*` prefix, e.g. `==1.2.*`), `<`, `<=`, `>`,
`>=`, `~=` (compatible release: `~=1.4.5` is `>=1.4.5, ==1.4.*`) or `===` (exact string). Follows
`packaging`'s rules: `<2.0` does not admit `2.0rc1`, `>2.0` does not admit `2.0.post1`. Pre-releases
are not excluded otherwise.

**`'maven'`** — a Maven version range: `[1.0,2.0)` (`[`/`]` include a bound, `(`/`)` exclude it, a
missing bound is open), `[1.5]` for exactly 1.5, several joined by commas for a union
(`(,1.0],[1.2,)`). A bare version is an exact match (in a POM it would be a soft preference).
Throws a `SyntaxError` on a malformed range.

> Available since v1.9.0

## Import

```ts
import { satisfiesRange } from '@helpers4/version';
// or, from the all-in-one package (same code, one install):
import { satisfiesRange } from 'helpers4/version';
```

## Signature


```ts
satisfiesRange(version: string, range: string, scheme: VersionScheme): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | Version to check |
| `range` | `string` | Range pattern \(e\.g\., ">=1\.0\.0", "~1\.2\.0", "^1\.0\.0"\) |
| `scheme` | `VersionScheme` | Which version scheme to interpret \`version\`/\`range\` as\. Defaults to \`'semver'\`\. |

## Returns

`boolean` — True if version satisfies the range

## Examples

### Check caret range

Caret (^) allows patch and minor updates within the same major.

```ts
satisfiesRange('1.2.3', '^1.0.0')
// => true
```

### Check greater-than-or-equal range

The >= operator checks if the version is at least the specified value.

```ts
satisfiesRange('2.0.0', '>=1.5.0')
// => true
```

### Out of range

Returns false when the version does not satisfy the range.

```ts
satisfiesRange('0.9.0', '>=1.0.0')
// => false
```

### Check a Gentoo/Portage range

Supports >=, >, <=, <, and exact match — ^ and ~ throw, since Portage gives those characters different, unrelated meanings.

```ts
satisfiesRange('1.2.3', '>=1.2.0', 'gentoo')
// => true
```

### Debian relation operators

Uses dpkg's '<<', '<=', '=', '>=' and '>>', as written in a Depends: field.

```ts
satisfiesRange('1.0~rc1-1', '<< 1.0', 'debian')
// => true
```

## Related Types

### `VersionScheme`

Identifies which version scheme parse/compare should use to interpret a
version string. Defaults to `'semver'` everywhere it's accepted.

```ts
type VersionScheme = 'semver' | 'gentoo' | 'debian' | 'rpm' | 'pacman' | 'pep440' | 'maven'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/satisfiesRange.ts)
