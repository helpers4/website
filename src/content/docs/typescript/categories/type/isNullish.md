---
title: "isNullish"
sidebar:
  label: "isNullish"
---

Checks if a value is null or undefined (nullish).

> Available since v2.0.0

## Import

```ts
import { isNullish } from '@helpers4/type';
```

## Signature


```ts
isNullish(value: unknown): value is null | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is null | undefined` — True if value is null or undefined

## Examples

### Check for null or undefined

Returns true only for null and undefined, not other falsy values.

```ts
isNullish(null)      // => true
isNullish(undefined) // => true
isNullish(0)         // => false
isNullish('')        // => false
```

### Guard before accessing properties

Use as a type guard to safely narrow types.

```ts
function greet(name: string | null | undefined): string {
  if (isNullish(name)) return 'Hello, stranger!';
  return `Hello, ${name}!`;
}
greet(null) // => 'Hello, stranger!'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isNullish.ts)
