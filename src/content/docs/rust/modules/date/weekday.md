---
title: "Weekday"
description: "A day of the week, Monday first (ISO 8601)."
sidebar:
  label: "Weekday"
---

A day of the week, Monday first (ISO 8601).

## Import

```rust
use helpers4::date::Weekday;
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
pub enum Weekday {
    /// Monday, ISO day 1.
    Monday,
    /// Tuesday, ISO day 2.
    Tuesday,
    /// Wednesday, ISO day 3.
    Wednesday,
    /// Thursday, ISO day 4.
    Thursday,
    /// Friday, ISO day 5.
    Friday,
    /// Saturday, ISO day 6.
    Saturday,
    /// Sunday, ISO day 7.
    Sunday,
}
```

## Examples

```rust
use helpers4::date::{Date, Weekday};

let day = Date::new(2024, 1, 1)?.weekday();
assert_eq!(day, Weekday::Monday);
assert_eq!(day.name(), "Monday");
assert_eq!(day.iso_number(), 1);
assert!(!day.is_weekend());
```

## Methods

### `name`

```rust
pub fn name(self) -> &'static str
```

The English name, such as `"Monday"`.

**Returns**

`&'static str` — The capitalized name of the day.

### `iso_number`

```rust
pub fn iso_number(self) -> u8
```

The ISO 8601 number of the day: Monday is `1`, Sunday is `7`.

**Returns**

`u8` — A number from `1` to `7`.

### `is_weekend`

```rust
pub fn is_weekend(self) -> bool
```

Whether the day is a Saturday or a Sunday.

**Returns**

`bool` — `true` for the weekend.

## Source

[src/date/weekday.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/date/weekday.rs#L20)
