---
title: "words"
sidebar:
  label: "words"
---

Splits a string into an array of words.
`null` and `undefined` return `[]`.

Handles camelCase, PascalCase, SCREAMING_SNAKE_CASE, kebab-case,
snake_case, and regular whitespace-separated text. Numbers are
treated as word tokens.

> Available since v2.0.0

## Import

```ts
import { words } from '@helpers4/string';
```

## Signature


```ts
words(str: string | null | undefined): string[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string \| null \| undefined` | The string to split into words. |

## Returns

`string[]` — An array of word tokens.

## Examples

### Split common string formats

Splits camelCase, PascalCase, snake_case, kebab-case and space-separated words.

```ts
words('camelCaseString') // => ['camel', 'Case', 'String']
words('snake_case')       // => ['snake', 'case']
words('kebab-case')       // => ['kebab', 'case']
words('hello world')      // => ['hello', 'world']
```

### Build camelCase from any input

Combine with a map to convert from any naming convention.

```ts
const toCamel = (str: string) =>
  words(str)
    .map((w, i) => i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join('');
toCamel('hello-world'); // => 'helloWorld'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/string/words.ts)
