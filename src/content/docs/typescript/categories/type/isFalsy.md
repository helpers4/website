---
title: "isFalsy"
sidebar:
  label: "isFalsy"
---

Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`).

> Available since v2.0.0

## Import

```ts
import { isFalsy } from '@helpers4/type';
```

## Signature


```ts
isFalsy(value: unknown): value is Falsy
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Falsy` — True if the value is falsy

## Examples

### Check falsy values

Returns true for all falsy values: false, null, undefined, 0, "", NaN.

```ts
isFalsy(0)         // => true
isFalsy('')        // => true
isFalsy(null)      // => true
isFalsy('hello')   // => false
```

## Related Types

### `Falsy`

Union of all falsy types in JavaScript.
Note: `NaN` cannot be represented as a type in TypeScript.

```ts
type Falsy = false | null | undefined | 0 | '';

/**
 * Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`).
 * @param value - The value to check
 * @returns True if the value is falsy
 * @example
 * isFalsy(0)         // => true
 * isFalsy('')        // => true
 * isFalsy(null)      // => true
 * isFalsy('hello')   // => false
 *
 * @see {@link isTruthy} for the inverse check (type-safe `filter(Boolean)` alternative)
 * @see {@link isNullish} to check specifically for `null` or `undefined`
 * @since 2.0.0
 */
export function isFalsy(value: unknown): value is Falsy {
  return !value;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isFalsy.ts)
