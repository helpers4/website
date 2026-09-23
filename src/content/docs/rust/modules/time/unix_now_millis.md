---
title: "unix_now_millis"
description: "The current time as milliseconds since the Unix epoch."
sidebar:
  label: "unix_now_millis"
---

The current time as milliseconds since the Unix epoch.

The value saturates at `u64::MAX`, which is some 584 million years away.

## Import

```rust
use helpers4::time::unix_now_millis;
```

Cargo feature `time` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features time
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["time"] }
```

## Signature

```rust
pub fn unix_now_millis() -> Result<u64, ClockError>
```

## Returns

`Result<u64, ClockError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

[`ClockError`](#error-type-clockerror) when the system clock is set before 1970 (see [`unix_now`](/rust/modules/time/unix_now/)).

## Examples

```rust
use helpers4::time::unix_now_millis;

assert!(unix_now_millis()? > 1_700_000_000_000);
```

## Error type: ClockError

The system clock is set before the Unix epoch (1970-01-01T00:00:00Z).

Returned instead of a silent `0`: an expiry comparison against `0` would treat every token as
still valid.

```rust
use helpers4::time::ClockError;

pub struct ClockError { /* private fields */ }
```

### `ClockError::behind`

```rust
pub fn behind(&self) -> Duration
```

How far before the epoch the clock is.

**Returns**

`Duration` — How far in the past the system clock reported, relative to the Unix epoch.

## Source

[src/time/unix_now_millis.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/time/unix_now_millis.rs#L26)
