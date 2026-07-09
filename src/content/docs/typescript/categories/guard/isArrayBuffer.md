---
title: "isArrayBuffer"
sidebar:
  label: "isArrayBuffer"
---

Checks if a value is an ArrayBuffer instance.

Useful for filtering or type-narrowing in a functional pipeline:
`values.filter(isArrayBuffer)`

> Available since v2.0.0

## Import

```ts
import { isArrayBuffer } from '@helpers4/guard';
```

## Signature


```ts
isArrayBuffer(value: unknown): value is ArrayBuffer
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is ArrayBuffer` — True if value is an ArrayBuffer

## Examples

### Detect an ArrayBuffer

Returns true only for ArrayBuffer instances, not TypedArray views.

```ts
isArrayBuffer(new ArrayBuffer(8)) // => true
isArrayBuffer(new Uint8Array(8))  // => false
isArrayBuffer('hello')            // => false
```

### Filter ArrayBuffers from a mixed array

Use as a predicate in .filter() to extract ArrayBuffer values.

```ts
const values = [new ArrayBuffer(4), 'text', new ArrayBuffer(8), 42];
values.filter(isArrayBuffer)
// => [ArrayBuffer(4), ArrayBuffer(8)]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isArrayBuffer.ts)
