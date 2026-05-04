---
title: "parseConventionalCommit"
sidebar:
  label: "parseConventionalCommit"
---

# parseConventionalCommit

Parses a Conventional Commits message into a structured object.

The first line is matched against the regex produced by
`buildConventionalCommitRegex(options)`. The remaining content is split into
a `body` and an optional trailing `footer` block (lines matching
`Token: value` / `Token #value`, including `BREAKING CHANGE: ...`).

> Available since next

## Import

```ts
import { parseConventionalCommit } from '@helpers4/commit';
```

## Signature


```ts
parseConventionalCommit(message: string, options?: ConventionalCommitOptions): ParsedConventionalCommit | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | `string` | Full commit message (subject + optional body/footer). |
| `options` | `ConventionalCommitOptions` | Optional constraints forwarded to the regex builder. *(optional)* |

## Returns

`ParsedConventionalCommit | null` — Parsed commit object, or `null` when the subject is not conventional.

## Examples

### Parse a Conventional Commits subject

Extracts type, scope, breaking flag, and description.

```ts
parseConventionalCommit('feat(api)!: add v2')
// => { type: 'feat', scope: 'api', breaking: true, description: 'add v2', body: '', footer: '' }
```

### Detect breaking changes from the footer

A `BREAKING CHANGE:` footer flags the commit as breaking even without the `!` marker.

```ts
parseConventionalCommit('feat: add option\n\nBREAKING CHANGE: drops old config').breaking
// => true
```

### Returns null on a non-conventional message

Non-matching subjects return `null` rather than throwing.

```ts
parseConventionalCommit('hello world') // => null
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

### `ParsedConventionalCommit`

Parsed representation of a Conventional Commit message.

```ts
interface ParsedConventionalCommit {
  body: string;
  breaking: boolean;
  description: string;
  footer: string;
  scope: string | null;
  type: string;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/commit/parseConventionalCommit.ts)
