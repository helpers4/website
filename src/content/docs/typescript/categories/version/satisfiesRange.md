---
title: "satisfiesRange"
sidebar:
  label: "satisfiesRange"
description: "Checks if a version satisfies a range, according to the given `scheme` (simple implementation — see each scheme's own d…"
version: "3.0.9"
---

Checks if a version satisfies a range, according to the given `scheme` (simple
implementation — see each scheme's own doc for exactly which operators are supported).

**`'semver'`** (default) — `>=`, `>`, `<=`, `<`, `^` (caret, patch+minor updates within the
same major), `~` (tilde, patch updates within the same major.minor), or an exact match.

**`'gentoo'`** — `>=`, `>`, `<=`, `<`, or an exact match, compared per Gentoo/Portage
ordering (see compare). `^`/`~` throw: Portage's own atom syntax gives those
characters different, unrelated meanings, so silently reusing SemVer's semantics for them
would be actively misleading rather than merely unsupported.

> Available since v1.9.0

## Import

```ts
import { satisfiesRange } from '@helpers4/version';
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

## Related Types

### `VersionScheme`

Identifies which version scheme parse/compare should use to interpret a
version string. Defaults to `'semver'` everywhere it's accepted.

```ts
type VersionScheme = 'semver' | 'gentoo'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/satisfiesRange.ts)
