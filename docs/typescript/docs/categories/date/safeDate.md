---
sidebar_label: "safeDate"
---

# safeDate

Safely creates a Date object from various input types

> Available since v1.9.0

## Import

```ts
import { safeDate } from '@helpers4/date';
```

## Signature

```ts
safeDate(input: string | number | Date | null | undefined): Date | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string \| number \| Date \| null \| undefined` | String, number, or Date input |

## Returns

`Date | null` — Valid Date object or null if invalid

## Examples

### Parse a valid date string

Returns a Date object from a valid ISO string.

```ts
safeDate('2025-01-19T12:00:00Z')
// => Date(2025-01-19T12:00:00.000Z)
```

### Return null for invalid input

Returns null when the input cannot produce a valid Date.

```ts
safeDate(null)
// => null
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/safeDate.ts)
