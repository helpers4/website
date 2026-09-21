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
helpers4 = { version = "0.0.2", default-features = false, features = ["time"] }
```

## Signature

```rust
pub fn unix_now_millis() -> Result<u64, ClockError>
```

## Returns

`Result<u64, ClockError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

[`ClockError`](../clockerror/) when the system clock is set before 1970 (see [`unix_now`](../unix_now/)).

## Examples

```rust
use helpers4::time::unix_now_millis;

assert!(unix_now_millis()? > 1_700_000_000_000);
```

## Source

[src/time/unix_now_millis.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/time/unix_now_millis.rs#L26)
