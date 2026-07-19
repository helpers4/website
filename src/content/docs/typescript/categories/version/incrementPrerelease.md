---
title: "incrementPrerelease"
sidebar:
  label: "incrementPrerelease"
---

Increments the prerelease portion of a semantic version — the semantics `npm version
prerelease --preid <id>` uses, not covered by increment (which only handles
`'major' | 'minor' | 'patch'`).

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

> Available since v3.0.1

## Import

```ts
import { incrementPrerelease } from '@helpers4/version';
```

## Signature


```ts
incrementPrerelease(version: string, prereleaseId: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | The version to increment |
| `prereleaseId` | `string` | The prerelease type/identifier \(e\.g\. \`'alpha'\`, \`'beta'\`, \`'rc'\`\) |

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

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/incrementPrerelease.ts)
