---
title: "isTimestamp"
sidebar:
  label: "isTimestamp"
---

Checks if a value is a valid timestamp (milliseconds or Unix seconds).

Supports:
- JavaScript / Java timestamps (milliseconds since epoch)
- Unix timestamps (seconds since epoch)

The function uses a heuristic to distinguish between the two:
numbers ≤ ~7.26 billion are treated as seconds, larger as milliseconds.

> Available since v2.0.0

## Import

```ts
import { isTimestamp } from '@helpers4/guard';
```

## Signature


```ts
isTimestamp(value: unknown): value is number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is number` — True if value is a number that represents a valid timestamp

## Examples

### isTimestamp



```ts
isTimestamp(1609459200000) // => true (JS ms — 2021-01-01)
isTimestamp(1609459200)    // => true (Unix seconds — 2021-01-01)
isTimestamp(Date.now())    // => true
isTimestamp(NaN)           // => false
isTimestamp('1609459200')  // => false (not a number)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isTimestamp.ts)
