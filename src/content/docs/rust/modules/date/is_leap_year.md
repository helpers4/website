---
title: "is_leap_year"
description: "Whether year is a leap year in the Gregorian calendar."
sidebar:
  label: "is_leap_year"
---

Whether `year` is a leap year in the Gregorian calendar.

A year is leap when it is divisible by 4, except centuries, which must be divisible by 400:
2000 and 2024 are leap, 1900 and 2023 are not.

## Import

```rust
use helpers4::date::is_leap_year;
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

## Signature

```rust
pub fn is_leap_year(year: i32) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `year` | `i32` | The year to check. |

## Returns

`bool` — `true` for a leap year.

## Examples

```rust
use helpers4::date::is_leap_year;

assert!(is_leap_year(2024));
assert!(is_leap_year(2000));
assert!(!is_leap_year(1900));
assert!(!is_leap_year(2023));
```

## Source

[src/date/is_leap_year.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/date/is_leap_year.rs#L29)
