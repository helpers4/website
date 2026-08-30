---
title: "incrementPrerelease"
sidebar:
  label: "incrementPrerelease"
description: "Increments the prerelease portion of a version, according to the given `scheme` — the semantics `npm version prerelease…"
version: "3.0.9"
---

Increments the prerelease portion of a version, according to the given `scheme` — the
semantics `npm version prerelease --preid <id>` uses, not covered by increment (which
only handles `'major' | 'minor' | 'patch'`).

**`'semver'`** (default):
- No current prerelease (a release version) → bumps `patch` and starts a new prerelease line
  at `<prereleaseId>.0` (a prerelease of the version itself, e.g. `1.2.3`, would already be
  released).
- Same prerelease type as the current version → increments its counter.
- Different prerelease type (e.g. `alpha` → `beta`) → resets the counter to `0`.

Input prerelease can be any shape, but only the first two parts are considered;
output is always normalized to `<prereleaseId>.<number>`. Build metadata, if any, is
dropped — it's tied to the specific build that produced the input version, not the new one.
A leading `v` is preserved if present, matching increment's behavior (`parse`/
`stringify` alone would strip it — see their docs).

**`'gentoo'`** — the same rules, but `prereleaseId` must be one of the five real Gentoo
suffix types (`alpha`/`beta`/`pre`/`rc`/`p`), not a free-form string — Portage's suffix
vocabulary is fixed by spec, unlike SemVer's arbitrary prerelease identifiers. No current
prerelease suffix bumps the last numeric component instead of specifically `patch`, since
Gentoo's `components` array can be any length.

> Available since v3.0.1

## Import

```ts
import { incrementPrerelease } from '@helpers4/version';
```

## Signature


```ts
incrementPrerelease(version: string, prereleaseId: string, scheme?: VersionScheme): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | The version to increment |
| `prereleaseId` | `string` | The prerelease type/identifier \(e\.g\. \`'alpha'\`, \`'beta'\`, \`'rc'\`\) |
| `scheme` | `VersionScheme` | Which version scheme to interpret \`version\` as\. Defaults to \`'semver'\`\. *(optional)* |

## Returns

`string` — The version with an incremented or newly-started prerelease

## Examples

### Start a new alpha line

Bumping a release version starts a fresh prerelease at .0, one patch ahead.

```ts
incrementPrerelease('1.2.3', 'alpha')
// => '1.2.4-alpha.0'
```

### Increment the same prerelease type

Bumping with the same prereleaseId increments its counter.

```ts
incrementPrerelease('1.2.4-alpha.0', 'alpha')
// => '1.2.4-alpha.1'
```

### Switch prerelease type

Switching to a different prereleaseId resets the counter to 0, e.g. graduating from alpha to beta.

```ts
incrementPrerelease('1.2.4-alpha.3', 'beta')
// => '1.2.4-beta.0'
```

### Increment a Gentoo/Portage prerelease

prereleaseId must be one of Gentoo's fixed suffix types (alpha/beta/pre/rc/p), not a free-form string.

```ts
incrementPrerelease('1.2.3', 'alpha', 'gentoo')
// => '1.2.4_alpha'
```

## Related Types

### `VersionScheme`

Identifies which version scheme parse/compare should use to interpret a
version string. Defaults to `'semver'` everywhere it's accepted.

```ts
type VersionScheme = 'semver' | 'gentoo'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/incrementPrerelease.ts)
