---
title: "buildStatusTable"
sidebar:
  label: "buildStatusTable"
---

Builds a Markdown table body from a map of job names to CI/CD statuses.
Each row follows the format `| icon | **Job Name** | badge |`.

Intended to be embedded in a PR comment template:
```
| | Job | Status |
|:---:|-----|:------:|
${buildStatusTable(jobs)}
```

> Available since v2.0.0

## Import

```ts
import { buildStatusTable } from '@helpers4/ci';
```

## Signature


```ts
buildStatusTable(jobs: Record<string, string>): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `jobs` | `Record<string, string>` | Record mapping job display names to their CI status |

## Returns

`string` — Newline-separated Markdown table rows (no header, no footer)

## Examples

### Build a PR comment status table

Generates the body rows of a Markdown table for a PR validation summary.

```ts
const rows = buildStatusTable({
  '🧾 Conventional Commits': 'success',
  '🐚 ShellCheck':           'failure',
  '🧪 Tests':                'skipped',
});

// Embed in a comment template:
// | | Job | Status |
// |:---:|-----|:------:|
// ${rows}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/ci/buildStatusTable.ts)
