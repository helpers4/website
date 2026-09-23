---
title: "days_in_month"
description: "The number of days in month of year."
sidebar:
  label: "days_in_month"
---

The number of days in `month` of `year`.

## Import

```rust
use helpers4::date::days_in_month;
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
pub fn days_in_month(year: i32, month: u8) -> Option<u8>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `year` | `i32` | The year, which decides whether February has 28 or 29 days. |
| `month` | `u8` | The month, `1` (January) to `12` (December). |

## Returns

`Option<u8>` — The number of days, or `None` when `month` is not in `1..=12`.

## Examples

```rust
use helpers4::date::days_in_month;

assert_eq!(days_in_month(2024, 2), Some(29));
assert_eq!(days_in_month(2023, 2), Some(28));
assert_eq!(days_in_month(2023, 4), Some(30));
assert_eq!(days_in_month(2023, 13), None);
```

## Source

[src/date/days_in_month.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/date/days_in_month.rs#L29)
