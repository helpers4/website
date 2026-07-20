---
title: "isLength"
sidebar:
  label: "isLength"
---

Checks whether a value is a valid array-like `length`: a non-negative safe integer
(`0 <= value <= Number.MAX_SAFE_INTEGER`).

> Available since v3.0.3

## Import

```ts
import { isLength } from '@helpers4/guard';
```

## Signature


```ts
isLength(value: unknown): value is number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is number` — `true` if value is a valid length

## Examples

### Validate an array-like length before indexing

Guards against negative, fractional, or unsafe length values.

```ts
isLength(3)   // => true
isLength(-1)  // => false
isLength(1.5) // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isLength.ts)
