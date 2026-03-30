---
sidebar_label: "oneInCommon"
---

# oneInCommon

Simple helper that check if two lists shared at least an item in common.

## Import

```ts
import { oneInCommon } from '@helpers4/array';
```

## Signature

```ts
function oneInCommon<T>(a: readonly T[], b: readonly T[]): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `a` | One list |
| `b` | Another list |

## Returns

`true` if one item is in common, `false` otherwise.

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/oneInCommon.ts)
