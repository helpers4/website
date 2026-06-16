---
title: "isBlank"
sidebar:
  label: "isBlank"
---

Checks if a string is blank — empty or contains only whitespace characters.

Uses `String.prototype.trim()` internally, which covers all ECMAScript
whitespace: standard ASCII whitespace (`\t`, `\n`, `\r`, `\f`, `\v`),
non-breaking space (U+00A0), BOM (U+FEFF), and all Unicode "Space_Separator"
category characters (en space, em space, thin space, ideographic space, etc.).

**Zero-width characters** (U+200B zero-width space, U+200C, U+200D, U+2060)
are **not** treated as whitespace — they are Unicode "Format" (Cf) characters,
not spaces. Strip them explicitly if needed:
`isBlank(value.replace(/[​-‍⁠]/g, ''))`

> Available since v2.0.3

## Import

```ts
import { isBlank } from '@helpers4/string';
```

## Signature


```ts
isBlank(value: string): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `string` | The string to check |

## Returns

`boolean` — `true` if the string is empty or contains only whitespace

## Examples

### Detect empty or whitespace-only strings

Returns true for "" and for any string made entirely of whitespace — including non-breaking space (U+00A0), en/em spaces, ideographic space, and BOM.

```ts
isBlank('')      // => true
isBlank('   ')   // => true
isBlank('\t\n')  // => true
isBlank(' ')     // => true   (non-breaking space U+00A0)
isBlank('foo')   // => false
isBlank(' x ')   // => false
```

### Form validation — reject blank input

Use isBlank to reject fields that contain only whitespace.

```ts
function validateName(name: string): string | null {
  if (isBlank(name)) return 'Name is required';
  return null;
}
validateName('')    // => 'Name is required'
validateName('   ') // => 'Name is required'
validateName('Ada') // => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/isBlank.ts)
