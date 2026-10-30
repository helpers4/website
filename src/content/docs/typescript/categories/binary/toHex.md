---
title: "toHex"
sidebar:
  label: "toHex"
description: "Writes bytes as lowercase hexadecimal, two digits per byte."
version: "3.1.10"
---

Writes bytes as lowercase hexadecimal, two digits per byte. For content keys, hashes and
debugging output.

> Available since v3.1.10

## Import

```ts
import { toHex } from '@helpers4/binary';
// or, from the all-in-one package (same code, one install):
import { toHex } from 'helpers4/binary';
```

## Signature


```ts
toHex(bytes: Uint8Array): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `bytes` | `Uint8Array` | The bytes |

## Returns

`string` — The hex string, twice as long as `bytes`

## Examples

### Hex string of bytes

Two lowercase digits per byte.

```ts
toHex(new Uint8Array([0, 15, 255])) // => '000fff'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/binary/toHex.ts)
