---
title: "formatSize"
sidebar:
  label: "formatSize"
---

Format a byte count into a human-readable string with the appropriate unit.

Each unit is 1024 of the previous (binary prefix). The result is formatted
with one decimal place.

> Available since v2.0.0

## Import

```ts
import { formatSize } from '@helpers4/number';
```

## Signature


```ts
formatSize(bytes: number): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `bytes` | `number` | A non-negative integer representing a byte count. |

## Returns

`string` — A human-readable string such as `'0.0B'`, `'1.5KB'`, `'3.2MB'`.

## Examples

### Format bytes to human-readable size

Converts a raw byte count to a human-readable string using binary prefixes.

```ts
formatSize(0)             // '0.0B'
formatSize(512)           // '512.0B'
formatSize(1024)          // '1.0KB'
formatSize(1_048_576)     // '1.0MB'
formatSize(1_073_741_824) // '1.0GB'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/number/formatSize.ts)
