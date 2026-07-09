---
title: "leadingSentence"
sidebar:
  label: "leadingSentence"
---

Extracts the leading sentence from a string.
`null` and `undefined` are passed through unchanged.

A sentence boundary is detected at the first occurrence of `.`, `?`, `!`,
`…`, or `;` followed by whitespace or end of string. Newlines are collapsed
to spaces before matching.

If no boundary is found the entire (cleaned) string is returned.

To cap the result at a maximum length, combine with truncate:
```ts
truncate(leadingSentence(input), 120)
```

> Available since v2.0.0

## Import

```ts
import { leadingSentence } from '@helpers4/string';
```

## Signature


```ts
leadingSentence(input: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string` | The source string |

## Returns

`string` — The first sentence, including its terminal character; or `null`/`undefined` if input is nullish

## Examples

### Extract the leading sentence

Returns the first sentence, terminated by . ? or !.

```ts
leadingSentence('Returns the sum of an array. Works with any numbers.')
// => 'Returns the sum of an array.'
```

### Works with ? and !

Recognises question marks and exclamation marks as sentence terminators.

```ts
leadingSentence('Is it done? Yes it is!')
// => 'Is it done?'
```

### Cap length by combining with truncate

Use truncate to limit the result to a fixed number of characters.

```ts
truncate(leadingSentence(input), 120)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/string/leadingSentence.ts)
