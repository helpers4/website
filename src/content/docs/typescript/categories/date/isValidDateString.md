---
title: "isValidDateString"
sidebar:
  label: "isValidDateString"
---

Checks whether a string can be parsed into a valid `Date`.

Uses the native `Date` constructor. Returns `false` for empty strings
and any string that produces an Invalid Date.

> **Caveat:** The native parser is lenient and implementation-dependent
> for non-ISO formats. For strict format validation, prefer a dedicated
> library or manual regex checks.

> Available since v2.0.0

## Import

```ts
import { isValidDateString } from '@helpers4/date';
```

## Signature


```ts
isValidDateString(input: string): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string` | The string to validate |

## Returns

`boolean` — `true` if `new Date(input)` produces a valid date

## Examples

### isValidDateString



```ts
isValidDateString('2025-01-19')            // => true
isValidDateString('2025-01-19T12:00:00Z')  // => true
isValidDateString('Jan 19, 2025')          // => true
isValidDateString('not a date')            // => false
isValidDateString('')                      // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/validate.ts)
