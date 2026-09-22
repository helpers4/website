---
title: "parse"
description: "Parses a human-written duration such as \"1h30m\", \"2d\" or \"500ms\"."
sidebar:
  label: "parse"
---

Parses a human-written duration such as `"1h30m"`, `"2d"` or `"500ms"`.

The input is one or more `<integer><unit>` pairs, optionally separated by whitespace, and their
sum is returned. Units are `ms`, `s`, `m`, `h`, `d` (24 hours) and `w` (7 days), and may
repeat or come in any order. A bare number, a fraction, a sign or an unknown unit is an error
with the byte offset where it was found. It is the inverse of [`format`](/rust/modules/duration/format/).

## Import

```rust
use helpers4::duration::parse;
```

Cargo feature `duration` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features duration
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["duration"] }
```

## Signature

```rust
pub fn parse(input: &str) -> Result<Duration, ParseDurationError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `input` | `&str` | The human-written duration, such as `"1h30m"`. |

## Returns

`Result<Duration, ParseDurationError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

Returns a [`ParseDurationError`](#error-type-parsedurationerror) when the input is empty, has something other than a number
where one is expected, a number without a unit, an unknown unit, or a total that does not fit
in a `Duration`.

## Examples

```rust
use helpers4::duration::parse;
use std::time::Duration;

assert_eq!(parse("1h30m"), Ok(Duration::from_secs(5400)));
assert_eq!(parse("2d 12h"), Ok(Duration::from_secs(216_000)));
assert_eq!(parse("1500ms"), Ok(Duration::from_millis(1500)));
assert!(parse("90").is_err());
```

## Error type: ParseDurationError

Why a string could not be parsed as a duration.

```rust
use helpers4::duration::ParseDurationError;

#[non_exhaustive]
pub enum ParseDurationError {
    /// The string is empty or only whitespace.
    Empty,
    /// A number was expected but something else was found.
    ExpectedNumber {
        /// Byte offset of the offending character in the input.
        index: usize,
    },
    /// A number is not followed by a unit.
    MissingUnit {
        /// Byte offset where the unit was expected.
        index: usize,
    },
    /// The unit is not one of `ms`, `s`, `m`, `h`, `d`, `w`.
    UnknownUnit {
        /// Byte offset of the unit in the input.
        index: usize,
    },
    /// The total does not fit in a [`Duration`](std::time::Duration).
    Overflow,
}
```

## Source

[src/duration/parse.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/duration/parse.rs#L36)
