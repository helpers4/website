---
title: "isPrimitive"
sidebar:
  label: "isPrimitive"
---

Checks if a value is a JavaScript primitive.

Primitive types: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`.

> Available since v2.0.0

## Import

```ts
import { isPrimitive } from '@helpers4/type';
```

## Signature


```ts
isPrimitive(value: unknown): value is Primitive
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Primitive` — True if value is a primitive

## Examples

### isPrimitive



```ts
isPrimitive('hello')  // => true
isPrimitive(42)       // => true
isPrimitive(null)     // => true
isPrimitive({})       // => false
isPrimitive([])       // => false
```

## Related Types

### `Primitive`

Union of all JavaScript primitive types.

```ts
type Primitive = string | number | boolean | bigint | symbol | null | undefined;

/**
 * Checks if a value is a JavaScript primitive.
 *
 * Primitive types: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`.
 *
 * @param value - The value to check
 * @returns True if value is a primitive
 * @example
 * isPrimitive('hello')  // => true
 * isPrimitive(42)       // => true
 * isPrimitive(null)     // => true
 * isPrimitive({})       // => false
 * isPrimitive([])       // => false
 * @since 2.0.0
 */
export function isPrimitive(value: unknown): value is Primitive {
  return value === null || (typeof value !== 'object' && typeof value !== 'function');
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isPrimitive.ts)
