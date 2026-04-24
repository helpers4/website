---
sidebar_label: "deepCompare"
---

# deepCompare

Deep comparison of two objects that returns detailed information about differences.

> Available since v2.0.0

## Import

```ts
import { deepCompare } from '@helpers4/object';
```

## Signature


```ts
deepCompare(objA: object | null | undefined, objB: object | null | undefined): boolean | DeepCompareResult
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `objA` | `object \| null \| undefined` | First object to compare (can be object, undefined, or null) |
| `objB` | `object \| null \| undefined` | Second object to compare (can be object, undefined, or null) |

## Returns

`boolean | DeepCompareResult` — `true` if objects are identical, `false` if incompatible types, or a `DeepCompareResult` object detailing differences

## Examples

### Compare nested objects

Deeply compares two objects, returning true when they are structurally equal.

```ts
deepCompare({ a: { b: 1 } }, { a: { b: 1 } })
// => true
```

### Detect deep differences

Returns a detailed diff object when nested values differ.

```ts
deepCompare({ a: { b: 1 } }, { a: { b: 2 } })
// => { a: { b: false } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/deepCompare.ts)
