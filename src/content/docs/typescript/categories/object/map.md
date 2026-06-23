---
title: "map"
sidebar:
  label: "map"
---

Transforms the values and/or keys of a plain object in a single pass.

Both callbacks are optional and default to identity (no transformation).
When `mapValue` is omitted the original values are preserved;
when `mapKey` is omitted the original keys are preserved.

Note: if two different keys map to the same output key the last one wins
(insertion order). Entries whose mapped key is a prototype-polluting string
(`__proto__`, `constructor`, `prototype`) are silently skipped.

> Available since v2.0.0

## Import

```ts
import { map } from '@helpers4/object';
```

## Signature


```ts
map<TObj extends Record<string, unknown>, TVal = indexedAccess, TKey extends PropertyKey = keyof TObj>(obj: TObj | null | undefined, mapValue?: function, mapKey?: function): Record<TKey, TVal>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `TObj \| null \| undefined` | The source object |
| `mapValue` | `function` | Callback called with `(value, key)` for each entry.   Defaults to identity. *(optional)* |
| `mapKey` | `function` | Callback called with `(key, value)` for each entry.   Defaults to identity. *(optional)* |

## Returns

`Record<TKey, TVal>` — A new object with transformed keys and/or values

## Examples

### Transform values

Maps each value of an object through a transform function.

```ts
map({ a: 1, b: 2 }, v => v * 10)
// => { a: 10, b: 20 }
```

### Transform keys

Maps each key of an object through a transform function.

```ts
map({ a: 1, b: 2 }, undefined, k => k.toUpperCase())
// => { A: 1, B: 2 }
```

### Transform both keys and values in a single pass

Provide both a value mapper and a key mapper to rewrite the whole object.

```ts
map(
  { price: 100, discount: 20 },
  v => v / 100,
  k => `${k}Ratio`
)
// => { priceRatio: 1, discountRatio: 0.2 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/map.ts)
