---
sidebar_label: "safeDate"
---

# safeDate

Safely creates a Date object from various input types

## Import

```ts
import { safeDate, dateToISOString } from '@helpers4/date';
```

## `safeDate`

Safely creates a Date object from various input types

```ts
function safeDate(input: string | number | Date | null | undefined): Date | null
```

| Parameter | Description |
|-----------|-------------|
| `input` | String, number, or Date input |

**Returns:** Valid Date object or null if invalid

## `dateToISOString`

Formats a date to ISO string or returns null

```ts
function dateToISOString(input: string | number | Date | null | undefined): string | null
```

| Parameter | Description |
|-----------|-------------|
| `input` | Date input |

**Returns:** ISO string or null

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/safeDate.ts)
