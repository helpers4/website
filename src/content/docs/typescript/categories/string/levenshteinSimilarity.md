---
title: "levenshteinSimilarity"
sidebar:
  label: "levenshteinSimilarity"
description: "Normalized Levenshtein similarity between two strings, in `[0, 1]` — `1` means identical, `0` means completely dissimil…"
version: "3.1.1"
---

Normalized Levenshtein similarity between two strings, in `[0, 1]` — `1` means identical,
`0` means completely dissimilar relative to the longer string's length. A convenience wrapper
around levenshteinDistance for scoring/ranking use cases.

> Available since v3.1.1

## Import

```ts
import { levenshteinSimilarity } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { levenshteinSimilarity } from 'helpers4/string';
```

## Signature


```ts
levenshteinSimilarity(a: string, b: string, caseSensitive: boolean): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | `string` | The first string |
| `b` | `string` | The second string |
| `caseSensitive` | `boolean` | Whether the comparison is case\-sensitive\. Defaults to \`true\`\. |

## Returns

`number` — A similarity score between `0` and `1`; `1` when both strings are empty

## Examples

### Score how close two strings are

A normalized [0, 1] score, handy for fuzzy-matching/ranking.

```ts
levenshteinSimilarity('kitten', 'sitting')
// => 0.5714285714285714
```

### Identical strings score 1

Useful as a fuzzy-matching threshold cutoff.

```ts
levenshteinSimilarity('same', 'same')
// => 1
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/levenshteinSimilarity.ts)
