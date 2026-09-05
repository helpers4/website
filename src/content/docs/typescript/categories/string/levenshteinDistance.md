---
title: "levenshteinDistance"
sidebar:
  label: "levenshteinDistance"
description: "Levenshtein edit distance between two strings — the minimum number of single-character insertions, deletions, or substi…"
version: "3.1.1"
---

Levenshtein edit distance between two strings — the minimum number of single-character
insertions, deletions, or substitutions needed to turn `a` into `b`.

> Available since v3.1.1

## Import

```ts
import { levenshteinDistance } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { levenshteinDistance } from 'helpers4/string';
```

## Signature


```ts
levenshteinDistance(a: string, b: string, caseSensitive: boolean): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `string` | The first string |
| `b` | `string` | The second string |
| `caseSensitive` | `boolean` | Whether the comparison is case\-sensitive\. Defaults to \`true\`\. |

## Returns

`number` — The edit distance; `0` when `a` and `b` are equal (after case-folding when
`caseSensitive` is `false`)

## Examples

### Classic edit-distance example

"kitten" becomes "sitting" with 3 single-character edits.

```ts
levenshteinDistance('kitten', 'sitting')
// => 3
```

### Case-insensitive comparison

Pass `false` to ignore letter case when comparing.

```ts
levenshteinDistance('Kitten', 'kitten', false)
// => 0
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/levenshteinDistance.ts)
