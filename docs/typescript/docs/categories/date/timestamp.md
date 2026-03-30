---
sidebar_label: "timestamp"
---

# timestamp

Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style)

## Import

```ts
import { timestamp, normalizeTimestamp } from '@helpers4/date';
```

## `timestamp`

Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style)

```ts
function isTimestampInSeconds(timestamp: number): boolean
```

| Parameter | Description |
|-----------|-------------|
| `timestamp` | The timestamp to check |

**Returns:** True if timestamp appears to be in seconds

## `normalizeTimestamp`

Converts a timestamp to JavaScript milliseconds format

```ts
function normalizeTimestamp(timestamp: number): number
```

| Parameter | Description |
|-----------|-------------|
| `timestamp` | The timestamp (in seconds or milliseconds) |

**Returns:** Timestamp in milliseconds

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timestamp.ts)
