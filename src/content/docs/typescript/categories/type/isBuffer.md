---
title: "isBuffer"
sidebar:
  label: "isBuffer"
---

# isBuffer

Checks if a value is a Node.js Buffer instance.

`Buffer` extends `Uint8Array` and is specific to Node.js, Bun, and Deno.
In browser-only environments where `Buffer` is not defined, this function
always returns `false`.

Useful for filtering or type-narrowing in a functional pipeline:
`values.filter(isBuffer)`

> Available since next

## Import

```ts
import { isBuffer } from '@helpers4/type';
```

## Signature


```ts
isBuffer(value: unknown): value is Buffer<ArrayBufferLike>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Buffer<ArrayBufferLike>` — True if value is a Buffer

## Examples

### Detect a Node.js Buffer

Returns true only for Buffer instances. Uint8Array is not a Buffer.

```ts
isBuffer(Buffer.from('hello')) // => true
isBuffer(new Uint8Array(8))    // => false
isBuffer('hello')              // => false
```

### Filter Buffers from a mixed array

Use as a predicate in .filter() to extract Buffer values.

```ts
const values = [Buffer.from('a'), 'text', Buffer.alloc(4), 42];
values.filter(isBuffer)
// => [Buffer, Buffer]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isBuffer.ts)
