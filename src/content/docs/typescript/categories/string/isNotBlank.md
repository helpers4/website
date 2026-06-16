---
title: "isNotBlank"
sidebar:
  label: "isNotBlank"
---

Checks if a string is not blank — non-empty and contains at least one
non-whitespace character.

Uses `String.prototype.trim()` internally. See `isBlank` for the full list
of characters considered whitespace (includes non-breaking space, en/em space,
ideographic space, etc.).

> Available since v2.0.3

## Import

```ts
import { isNotBlank } from '@helpers4/string';
```

## Signature


```ts
isNotBlank(value: string): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `string` | The string to check |

## Returns

`boolean` — `true` if the string has at least one non-whitespace character

## Examples

### Check that a string has real content

Returns true only when the string contains at least one non-whitespace character.

```ts
isNotBlank('foo')  // => true
isNotBlank(' x ')  // => true
isNotBlank('')     // => false
isNotBlank('   ')  // => false
isNotBlank('\t')   // => false
```

### Filter out blank strings from an array

Use as a predicate in .filter() to keep only strings with real content.

```ts
const tags = ['typescript', '  ', '', 'helpers'];
tags.filter(isNotBlank)
// => ['typescript', 'helpers']
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/isNotBlank.ts)
