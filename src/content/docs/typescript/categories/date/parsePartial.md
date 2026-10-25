---
title: "parsePartial"
sidebar:
  label: "parsePartial"
description: "Parses an ISO date that may only be known to the year or the month: `YYYY`, `YYYY-MM` or `YYYY-MM-DD`."
version: "3.1.8"
---

Parses an ISO date that may only be known to the year or the month: `YYYY`, `YYYY-MM` or
`YYYY-MM-DD`. A partial date is anchored in the middle of its period, so it sorts and
charts sensibly next to full dates:

- `YYYY` → July 1st of that year
- `YYYY-MM` → the 15th of that month
- `YYYY-MM-DD` → that day

All dates are at 00:00:00.000 UTC. Returns `null` for anything else, including a month or day
that does not exist (`2025-13`, `2025-02-30`).

> Available since v3.1.5

## Import

```ts
import { parsePartial } from '@helpers4/date';
// or, from the all-in-one package (same code, one install):
import { parsePartial } from 'helpers4/date';
```

## Signature


```ts
parsePartial(input: string): PartialDate | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `string` | A \`YYYY\`, \`YYYY\-MM\` or \`YYYY\-MM\-DD\` string |

## Returns

`PartialDate | null` — The anchored date with its precision, or `null`

## Examples

### Year and month only

A partial date is anchored in the middle of its period so it sorts next to full dates.

```ts
parsePartial('2008')    // => { date: 2008-07-01, precision: 'year' }
parsePartial('2008-03') // => { date: 2008-03-15, precision: 'month' }
```

### Invalid input

A month or day that does not exist gives null.

```ts
parsePartial('2008-02-30') // => null
```

## Related Types

### `PartialDate`

A partial ISO date resolved to a concrete `Date`, with the precision it had.

```ts
interface PartialDate {
  date: Date;
  precision: PartialDatePrecision;
}
```

### `PartialDatePrecision`

Precision of a partial ISO date: which parts the input actually gave.

```ts
type PartialDatePrecision = 'year' | 'month' | 'day'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/parsePartial.ts)
