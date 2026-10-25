---
title: "createByteReader"
sidebar:
  label: "createByteReader"
description: "Creates a cursor over bytes, for decoding binary formats: fixed-size integers and floats, LEB128 varints (signed ones z…"
version: "3.1.8"
---

Creates a cursor over bytes, for decoding binary formats: fixed-size integers and floats,
LEB128 varints (signed ones zigzag-encoded), byte runs and NUL-terminated strings. Mirrors the
Rust `bytes::ByteReader` of helpers4.

A read never throws on bad data: it returns `undefined` and leaves the position untouched,
enough to build a precise error in the caller's own error type.

> Available since v3.1.8

## Import

```ts
import { createByteReader } from '@helpers4/binary';
// or, from the all-in-one package (same code, one install):
import { createByteReader } from 'helpers4/binary';
```

## Signature


```ts
createByteReader(data: Uint8Array): ByteReader
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | `Uint8Array` | The bytes to decode |

## Returns

`ByteReader` — A ByteReader at position `0`

## Examples

### Decode a small binary record

Each read returns the value and moves on; at the end of the data it returns undefined.

```ts
const reader = createByteReader(new Uint8Array([0x2a, 0xac, 0x02, 0x68, 0x69, 0]));
reader.readU8();      // => 42
reader.readVarU32();  // => 300
reader.readCString(); // => 'hi'
reader.readU8();      // => undefined
```

### A truncated read does not move the cursor

position tells where the failed read started, to report a precise error.

```ts
const reader = createByteReader(new Uint8Array([1, 2, 3]));
reader.readU32(); // => undefined
reader.position;  // => 0
```

## Related Types

### `ByteReader`

A reader created by createByteReader. Every `read*` method returns `undefined` when the
data is truncated or invalid, and then leaves the position where it was, so position is
the offset of the read that failed.

```ts
interface ByteReader {
  position: number;
  remaining: number;
  readBytes(length: number): Uint8Array<ArrayBufferLike> | undefined;
  readCString(): string | undefined;
  readF32(endian?: Endian): number | undefined;
  readF64(endian?: Endian): number | undefined;
  readI16(endian?: Endian): number | undefined;
  readI32(endian?: Endian): number | undefined;
  readI64(endian?: Endian): bigint | undefined;
  readU16(endian?: Endian): number | undefined;
  readU32(endian?: Endian): number | undefined;
  readU64(endian?: Endian): bigint | undefined;
  readU8(): number | undefined;
  readVarI32(): number | undefined;
  readVarI64(): bigint | undefined;
  readVarU32(): number | undefined;
  readVarU64(): bigint | undefined;
}
```

### `Endian`

Byte order of a multi-byte value.

```ts
type Endian = 'big' | 'little'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/binary/createByteReader.ts)
