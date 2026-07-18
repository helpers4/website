---
title: "isLeapYear"
sidebar:
  label: "isLeapYear"
---

Returns `true` if the given year is a leap year.

A year is a leap year when it is divisible by 4, **except** century
years which must also be divisible by 400.

> Available since v2.0.0

## Import

```ts
import { isLeapYear } from '@helpers4/date';
```

## Signature


```ts
isLeapYear(year: number): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `year` | `number` | A full year number (e.g. 2024) |

## Returns

`boolean` — `true` if the year is a leap year

## Examples

### isLeapYear



```ts
isLeapYear(2024) // => true
isLeapYear(2025) // => false
isLeapYear(2000) // => true  (divisible by 400)
isLeapYear(1900) // => false (century, not divisible by 400)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/date/calendar.ts)
