---
title: "analyzeCommits"
sidebar:
  label: "analyzeCommits"
---

# analyzeCommits

Analyses a list of commits to suggest a semantic version bump.

Each commit is parsed via `parseConventionalCommit`. The body is also
scanned for `BREAKING CHANGE:` / `BREAKING-CHANGE:` markers. The bump rule
is:

- any breaking change → `'major'`
- otherwise any `feat` → `'minor'`
- otherwise any `fix` → `'patch'`
- otherwise (non-empty list of non-conventional commits) → `'patch'`
- empty list → `'patch'` with reason "No commits to analyse"

> Available since next

## Import

```ts
import { analyzeCommits } from '@helpers4/commit';
```

## Signature


```ts
analyzeCommits(commits: readonly AnalyzableCommit[]): CommitAnalysis
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `commits` | `readonly AnalyzableCommit[]` | Iterable of commits to analyse. Only `subject` is required. |

## Returns

`CommitAnalysis` — Aggregated analysis with the suggested bump and reason.

## Examples

### Suggest a semver bump from a list of commits

Walks through commits and suggests `major`, `minor`, or `patch` based on Conventional Commits.

```ts
analyzeCommits([
  { subject: 'feat: add login' },
  { subject: 'fix: handle null' },
])
// => { suggestedBump: 'minor', hasFeatures: true, hasFixes: true, ... }
```

### Promote to major on breaking change

A `!` marker or a `BREAKING CHANGE:` footer always promotes the suggestion to `major`.

```ts
analyzeCommits([{ subject: 'feat!: drop v1 API' }]).suggestedBump
// => 'major'
```

## Related Types

### `AnalyzableCommit`

Minimal commit shape consumed by `analyzeCommits`. Only the subject line is
mandatory; the body is scanned for a `BREAKING CHANGE` footer.

```ts
interface AnalyzableCommit {
  body?: string;
  subject: string;
}
```

### `CommitAnalysis`

Aggregated result of `analyzeCommits`.

```ts
interface CommitAnalysis {
  hasBreakingChanges: boolean;
  hasFeatures: boolean;
  hasFixes: boolean;
  reason: string;
  suggestedBump: CommitVersionBump;
}
```

### `CommitVersionBump`

Bumping suggestion produced by `analyzeCommits`.

```ts
type CommitVersionBump = "major" | "minor" | "patch"
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/commit/analyzeCommits.ts)
