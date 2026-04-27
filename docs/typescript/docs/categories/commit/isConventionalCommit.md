---
sidebar_label: "isConventionalCommit"
---

# isConventionalCommit

Checks whether a commit message's subject line follows the Conventional
Commits format constrained by the given options.

Only the first line is inspected — body and footer are ignored.

> Available since next

## Import

```ts
import { isConventionalCommit } from '@helpers4/commit';
```

## Signature


```ts
isConventionalCommit(message: string, options?: ConventionalCommitOptions): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | `string` | Full commit message or just its subject line. |
| `options` | `ConventionalCommitOptions` | Optional constraints (allowed types/scopes, scope requirement). *(optional)* |

## Returns

`boolean` — `true` when the subject line matches; `false` otherwise.

## Examples

### Validate a commit subject

Returns `true` when the first line follows the Conventional Commits format.

```ts
isConventionalCommit('feat(api): add endpoint') // => true
isConventionalCommit('hello world') // => false
```

### Restrict accepted types

Reject any commit whose type is not in the supplied allowlist.

```ts
isConventionalCommit('chore: x', { types: ['feat', 'fix'] }) // => false
isConventionalCommit('feat: x', { types: ['feat', 'fix'] }) // => true
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/commit/isConventionalCommit.ts)
