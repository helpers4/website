---
title: "escapeRegExp"
sidebar:
  label: "escapeRegExp"
---

Escapes regular expression metacharacters (`. * + ? ^ $ { } ( ) | [ ] \`)
in a string so it can be safely embedded in a `RegExp` pattern.

Use this before building a `RegExp` from untrusted or dynamic input — without
it, characters like `.` or `(` change the pattern's meaning instead of being
matched literally.

> Available since v3.0.0

## Import

```ts
import { escapeRegExp } from '@helpers4/string';
```

## Signature


```ts
escapeRegExp(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to escape |

## Returns

`string` — The escaped string, safe to embed in a `RegExp` pattern

## Examples

### Escape metacharacters before building a RegExp

Without escaping, "." and "?" would change the pattern's meaning.

```ts
escapeRegExp('1 + 1 = 2?')
// => '1 \\+ 1 = 2\\?'
```

### Safely search for untrusted user input

Escaping lets user-provided text be matched literally instead of as a pattern.

```ts
const userInput = 'a.b';
new RegExp(escapeRegExp(userInput)).test('a.b')   // => true
new RegExp(escapeRegExp(userInput)).test('axb')   // => false (literal '.', not "any char")
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/escapeRegExp.ts)
