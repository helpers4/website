---
title: "WeekDays"
sidebar:
  label: "WeekDays"
---

Named day-of-week constants following the JavaScript `Date.getDay()`
convention. Use these instead of raw numbers for readability.

> Available since v2.0.0

## Import

```ts
import { WeekDays } from '@helpers4/date';
```

## Examples

### WeekDays



```ts
import { WeekDays } from '@helpers4/date';

isWeekend('2025-01-17', [WeekDays.Friday, WeekDays.Saturday])
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/date/weekday.ts)
