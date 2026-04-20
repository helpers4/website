---
sidebar_label: "isPrimitive"
---

# isPrimitive

Checks if a value is a JavaScript primitive.

Primitive types: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`.

> Available since v2.0.0

## Import

```ts
import { isPrimitive } from '@helpers4/type';
```

## Signature

```ts
isPrimitive(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a primitive

## Examples

### isPrimitive



```ts
```ts
isPrimitive('hello')  // => true
isPrimitive(42)       // => true
isPrimitive(null)     // => true
isPrimitive({})       // => false
isPrimitive([])       // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isPrimitive.ts)
