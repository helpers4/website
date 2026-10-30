---
title: "zigzagDecode"
sidebar:
  label: "zigzagDecode"
description: "The inverse of zigzagEncode: maps an unsigned 64-bit zigzag value back to the signed integer."
version: "3.1.10"
---

The inverse of zigzagEncode: maps an unsigned 64-bit zigzag value back to the signed
integer.

> Available since v3.1.8

## Import

```ts
import { zigzagDecode } from '@helpers4/binary';
// or, from the all-in-one package (same code, one install):
import { zigzagDecode } from 'helpers4/binary';
```

## Signature


```ts
zigzagDecode(value: bigint): bigint
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `bigint` | An unsigned integer in the 64\-bit range |

## Returns

`bigint` — The signed integer

## Examples

### Recover the signed value

The inverse of zigzagEncode.

```ts
zigzagDecode(1n) // => -1n
zigzagDecode(2n) // => 1n
```

### Decode a varint payload

Read the unsigned varint first, then undo the zigzag mapping.

```ts
zigzagDecode(300n) // => 150n
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/binary/zigzagDecode.ts)
