---
title: "createByteWriter"
sidebar:
  label: "createByteWriter"
description: "Creates a growable buffer to encode binary formats: the counterpart of createByteReader, with the same types, byte orde…"
version: "3.1.9"
---

Creates a growable buffer to encode binary formats: the counterpart of
createByteReader, with the same types, byte orders and varints.

> Available since v3.1.8

## Import

```ts
import { createByteWriter } from '@helpers4/binary';
// or, from the all-in-one package (same code, one install):
import { createByteWriter } from 'helpers4/binary';
```

## Signature


```ts
createByteWriter(): ByteWriter
```

## Returns

`ByteWriter` — An empty ByteWriter

## Examples

### Encode a small binary record

Writes chain, and toBytes returns the result.

```ts
createByteWriter().writeU8(42).writeVarU32(300).writeCString('hi').toBytes()
// => Uint8Array [0x2a, 0xac, 0x02, 0x68, 0x69, 0]
```

### Choose the byte order

Multi-byte values are big-endian unless you say little.

```ts
createByteWriter().writeU16(1).writeU16(1, 'little').toBytes()
// => Uint8Array [0, 1, 1, 0]
```

## Related Types

### `ByteWriter`

A writer created by createByteWriter. Every `write*` method returns the writer, to
chain, and throws a `RangeError` for a value outside the range of its type.

```ts
interface ByteWriter {
  length: number;
  toBytes(): Uint8Array;
  writeBytes(bytes: Uint8Array): ByteWriter;
  writeCString(text: string): ByteWriter;
  writeF32(value: number, endian?: Endian): ByteWriter;
  writeF64(value: number, endian?: Endian): ByteWriter;
  writeI16(value: number, endian?: Endian): ByteWriter;
  writeI32(value: number, endian?: Endian): ByteWriter;
  writeI64(value: bigint, endian?: Endian): ByteWriter;
  writeU16(value: number, endian?: Endian): ByteWriter;
  writeU32(value: number, endian?: Endian): ByteWriter;
  writeU64(value: bigint, endian?: Endian): ByteWriter;
  writeU8(value: number): ByteWriter;
  writeVarI32(value: number): ByteWriter;
  writeVarI64(value: bigint): ByteWriter;
  writeVarU32(value: number): ByteWriter;
  writeVarU64(value: bigint): ByteWriter;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/binary/createByteWriter.ts)
