---
title: "Date"
description: "A calendar date (year, month, day) in the proleptic Gregorian calendar, with no time of day and no time zone."
sidebar:
  label: "Date"
---

A calendar date (year, month, day) in the proleptic Gregorian calendar, with no time of day
and no time zone.

The year is limited to `0..=9999`, so the ISO 8601 form `YYYY-MM-DD` always has four year
digits. Dates compare chronologically. Being a plain calendar date, it cannot express "now":
to get today's date, convert a unix time with [`Date::from_unix_days`](/rust/modules/date/date/) (the current time is
an input, never read behind your back).

## Import

```rust
use helpers4::date::Date;
```

Cargo feature `date` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features date
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["date"] }
```

## Definition

```rust
pub struct Date { /* private fields */ }
```

## Examples

```rust
use helpers4::date::Date;

let date = Date::new(2026, 9, 23)?;
assert_eq!(date.to_string(), "2026-09-23");
assert_eq!(date.add_days(10), Some(Date::new(2026, 10, 3)?));
assert_eq!("2024-02-29".parse::<Date>(), Date::new(2024, 2, 29));
```

## Methods

### `new`

```rust
pub fn new(year: i32, month: u8, day: u8) -> Result<Self, DateError>
```

Builds a date, checking that it exists.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `year` | `i32` | The year, `0..=9999`. |
| `month` | `u8` | The month, `1..=12`. |
| `day` | `u8` | The day of the month, `1` to the length of that month. |

**Returns**

`Result<Self, DateError>`

**Errors**

[`DateError::InvalidYear`](#error-type-dateerror), [`DateError::InvalidMonth`](#error-type-dateerror) or [`DateError::InvalidDay`](#error-type-dateerror) when
the date does not exist (such as February 30th).

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, DateError>
```

Parses the ISO 8601 form `YYYY-MM-DD`.

Exactly four year digits, two month digits and two day digits, separated by hyphens: no
spaces, signs or time of day.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to parse. |

**Returns**

`Result<Self, DateError>`

**Errors**

[`DateError::InvalidFormat`](#error-type-dateerror) when the text does not have that shape, or the errors of
[`Date::new`](/rust/modules/date/date/) when it has the shape but names a date that does not exist.

### `year`

```rust
pub fn year(self) -> i32
```

The year, `0..=9999`.

**Returns**

`i32` — The year.

### `month`

```rust
pub fn month(self) -> u8
```

The month, `1..=12`.

**Returns**

`u8` — The month, `1` for January.

### `day`

```rust
pub fn day(self) -> u8
```

The day of the month, starting at `1`.

**Returns**

`u8` — The day of the month.

### `is_leap_year`

```rust
pub fn is_leap_year(self) -> bool
```

Whether the year of this date is a leap year.

**Returns**

`bool` — `true` for a date in a leap year.

### `weekday`

```rust
pub fn weekday(self) -> Weekday
```

The day of the week.

**Returns**

`Weekday` — The [`Weekday`](/rust/modules/date/weekday/) this date falls on.

### `ordinal`

```rust
pub fn ordinal(self) -> u16
```

The day of the year: `1` for January 1st, `365` (or `366`) for December 31st.

**Returns**

`u16` — The ordinal day, `1..=366`.

### `unix_days`

```rust
pub fn unix_days(self) -> i64
```

The number of days since 1970-01-01 (negative before it).

**Returns**

`i64` — The day count, the same one [`Date::from_unix_days`](/rust/modules/date/date/) reads back.

### `from_unix_days`

```rust
pub fn from_unix_days(days: i64) -> Option<Self>
```

The date `days` days after 1970-01-01 (before it when negative).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `days` | `i64` | The day count since 1970-01-01, for instance `unix_seconds / 86_400` (rounded down) for a UTC date. |

**Returns**

`Option<Self>` — The date, or `None` when it falls outside the years `0..=9999`.

### `add_days`

```rust
pub fn add_days(self, days: i64) -> Option<Self>
```

The date `days` days after this one (before it when negative).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `days` | `i64` | How many days to move. |

**Returns**

`Option<Self>` — The new date, or `None` when it falls outside the years `0..=9999`.

### `days_until`

```rust
pub fn days_until(self, other: Self) -> i64
```

The number of days from this date to `other`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `other` | `Self` | The date to count to. |

**Returns**

`i64` — Positive when `other` is later, negative when it is earlier, `0` for the same date.

## Error type: DateError

Why a date could not be built or parsed.

```rust
use helpers4::date::DateError;

#[non_exhaustive]
pub enum DateError {
    /// The year is outside the supported range `0..=9999`.
    InvalidYear {
        /// The rejected year.
        year: i32,
    },
    /// The month is not in `1..=12`.
    InvalidMonth {
        /// The rejected month.
        month: u8,
    },
    /// The day is not in `1..=max` for that month.
    InvalidDay {
        /// The rejected day.
        day: u8,
        /// The number of days in that month.
        max: u8,
    },
    /// The text is not exactly `YYYY-MM-DD` with ASCII digits.
    InvalidFormat,
}
```

## Source

[src/date/calendar_date.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/date/calendar_date.rs#L35)
