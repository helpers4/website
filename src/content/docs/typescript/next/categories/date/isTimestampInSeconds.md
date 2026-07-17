---
title: "isTimestampInSeconds"
sidebar:
  label: "isTimestampInSeconds"
---

Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style)

> Available since v1.9.0

## Import

```ts
import { isTimestampInSeconds } from '@helpers4/date';
```

## Signature


```ts
isTimestampInSeconds(timestamp: number): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `timestamp` | `number` | The timestamp to check |

## Returns

`boolean` — True if timestamp appears to be in seconds

## Examples

### Detect a Unix timestamp in seconds

Returns true for timestamps that are likely in seconds (Java/Unix style).

```ts
isTimestampInSeconds(1737290400)
// => true
```

### Normalize a Unix timestamp to milliseconds

Converts a timestamp in seconds to JavaScript milliseconds.

```ts
normalizeTimestamp(1737290400)
// => 1737290400000
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/timestamp.ts)
