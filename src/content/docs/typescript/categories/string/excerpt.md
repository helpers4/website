---
title: "excerpt"
sidebar:
  label: "excerpt"
description: "Derives a short, readable excerpt from a longer text — for a card/header/preview where a full paragraph doesn't fit."
version: "3.1.2"
---

Derives a short, readable excerpt from a longer text — for a card/header/preview where a full
paragraph doesn't fit. Unlike truncate (a mechanical cut at exactly `maxLength`), this
prefers to cut at the end of a whole sentence (`.`, `!`, or `?`) when one fits within
`maxLength`, even if that leaves the result shorter than the limit. Only when no sentence fits
does it fall back to the last whole word before the limit — it never returns partial-word text.

Known limitation: the sentence-boundary check is a simple heuristic (punctuation followed by
whitespace or the end of the text) — it doesn't special-case abbreviations ("Mr.") or decimal
numbers ("3.14"), which can be misread as a sentence end.

> Available since v3.1.2

## Import

```ts
import { excerpt } from '@helpers4/string';
// or, from the all-in-one package (same code, one install):
import { excerpt } from 'helpers4/string';
```

## Signature


```ts
excerpt(text: string, maxLength: number, ellipsis: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | The text to excerpt\. Internal whitespace \(line breaks, repeated spaces\) is collapsed to single spaces before measuring length\. |
| `maxLength` | `number` | Maximum length of the result, including \`ellipsis\` when one is appended\. |
| `ellipsis` | `string` | Appended only when falling back to a word\-boundary cut \(a sentence\-boundary cut never needs one\)\. Defaults to \`'…'\`\. |

## Returns

`string` — The original text unchanged if already within `maxLength`, otherwise a shortened version

## Examples

### Cut at the end of a whole sentence

Prefers a clean sentence break over a hard character cutoff, even if the result ends up shorter than maxLength.

```ts
excerpt(
  'Build the biggest, best theme park rides ever seen. Can you make money in this business?',
  60,
)
// => 'Build the biggest, best theme park rides ever seen.'
```

### Fall back to the last whole word

No sentence boundary fits, so it cuts at the last complete word and appends an ellipsis — never a partial word.

```ts
excerpt('This description has no punctuation at all so it must cut on a word', 30)
// => 'This description has no…'
```

### Already short enough — returned unchanged

Only whitespace is normalized; nothing is cut when the text already fits.

```ts
excerpt('A short game about ducks.', 200)
// => 'A short game about ducks.'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/excerpt.ts)
