---
sidebar_label: "safeDate"
---

# safeDate

Safely creates a Date object from various input types

## Import

```ts
import { safeDate } from '@helpers4/date';
```

## Signature

```ts
function safeDate(input: string | number | Date | null | undefined): Date | null
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `input` | String, number, or Date input |

## Returns

Valid Date object or null if invalid

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/safeDate.ts)
