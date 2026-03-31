---
sidebar_label: "isTimestampInSeconds"
---

# isTimestampInSeconds

Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style)

## Import

```ts
import { isTimestampInSeconds } from '@helpers4/date';
```

## Signature

```ts
function isTimestampInSeconds(timestamp: number): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `timestamp` | The timestamp to check |

## Returns

True if timestamp appears to be in seconds

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timestamp.ts)
