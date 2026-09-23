---
title: "date"
description: "Calendar dates without time zones: validation, ISO 8601 text, weekdays and day arithmetic."
sidebar:
  label: "≡ Overview"
  order: 0
---

Calendar dates without time zones: validation, ISO 8601 text, weekdays and day arithmetic.

A [`Date`](/rust/modules/date/date/) is a plain year-month-day in the proleptic Gregorian calendar, limited to the years
`0..=9999`. Nothing here reads the clock or knows about time zones: convert a unix time to a day
count and pass it in.

## Install

Cargo feature `date` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features date
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["date"] }
```

Import path: `helpers4::date`.

## Items

| Item | What it does |
| --- | --- |
| [`Date`](/rust/modules/date/date/) | A calendar date (year, month, day) in the proleptic Gregorian calendar, with no time of day and no time zone. |
| [`days_in_month`](/rust/modules/date/days_in_month/) | The number of days in `month` of `year`. |
| [`is_leap_year`](/rust/modules/date/is_leap_year/) | Whether `year` is a leap year in the Gregorian calendar. |
| [`Weekday`](/rust/modules/date/weekday/) | A day of the week, Monday first (ISO 8601). |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`DateError`](/rust/modules/date/date/#error-type-dateerror) | [`Date`](/rust/modules/date/date/) |
