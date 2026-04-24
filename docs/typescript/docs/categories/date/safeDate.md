---
sidebar_label: "safeDate"
---

# safeDate

Safely creates a Date object from various input types.

> Available since v1.9.0

## Import

```ts
import { safeDate } from '@helpers4/date';
```

## Signature


```ts
safeDate(input: DateLike | null | undefined): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `DateLike \| null \| undefined` | String, number, or Date input |

## Returns

`Date | null` — Valid Date object or null if invalid

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/safeDate.ts)
