---
title: "buildConventionalCommitRegex"
sidebar:
  label: "buildConventionalCommitRegex"
---

Builds a regular expression matching the **subject line** of a Conventional
Commits message.

The returned regex exposes four capture groups:

1. type
2. scope (or `undefined` when absent)
3. breaking marker (`'!'` or `undefined`)
4. description

> Available since next

## Import

```ts
import { buildConventionalCommitRegex } from '@helpers4/commit';
```

## Signature


```ts
buildConventionalCommitRegex(options: ConventionalCommitOptions): RegExp
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | `ConventionalCommitOptions` | Constrain accepted types/scopes and toggle scope requirement. |

## Returns

`RegExp` — Regex anchored on `^...$` matching the subject line only.

## Examples

### Match the default Conventional Commits format

Returns a regex matching `type(scope)?!?: description` on the subject line.

```ts
const regex = buildConventionalCommitRegex();
regex.test('feat(api): add endpoint') // => true
regex.test('not a commit') // => false
```

### Restrict accepted types and require a scope

Constrain accepted types and force the scope segment to be present.

```ts
const regex = buildConventionalCommitRegex({
  types: ['feat', 'fix'],
  requireScope: true,
});
regex.test('feat(api): x') // => true
regex.test('feat: missing scope') // => false
regex.test('chore(api): wrong type') // => false
```

## Related Types

### `ConventionalCommitOptions`

Options shared by `buildConventionalCommitRegex`, `parseConventionalCommit`,
and `isConventionalCommit` to constrain the accepted commit format.

```ts
interface ConventionalCommitOptions {
  requireScope?: boolean;
  scopes?: readonly string[];
  types?: readonly string[];
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/commit/buildConventionalCommitRegex.ts)
