---
title: "zigzagEncode"
sidebar:
  label: "zigzagEncode"
description: "Maps a signed 64-bit integer to an unsigned one so that values near zero stay small (`0, -1, 1, -2` become `0, 1, 2, 3`…"
version: "3.1.8"
---

Maps a signed 64-bit integer to an unsigned one so that values near zero stay small (`0, -1, 1,
-2` become `0, 1, 2, 3`): the "zigzag" mapping of Protocol Buffers, used before writing a signed
value as a varint.

> Available since v3.1.8

## Import

```ts
import { zigzagEncode } from '@helpers4/binary';
// or, from the all-in-one package (same code, one install):
import { zigzagEncode } from 'helpers4/binary';
```

## Signature


```ts
zigzagEncode(value: bigint): bigint
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `bigint` | A signed integer in the 64\-bit range |

## Returns

`bigint` — The unsigned zigzag value

## Examples

### Keep small negative numbers small

Zigzag interleaves negatives and positives, so a varint stays short for values near zero.

```ts
zigzagEncode(-1n) // => 1n
zigzagEncode(1n)  // => 2n
```

### Cover the whole signed 64-bit range

The most negative value maps to the largest unsigned one.

```ts
zigzagEncode(-(1n << 63n)) // => 18446744073709551615n
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/binary/zigzagEncode.ts)
