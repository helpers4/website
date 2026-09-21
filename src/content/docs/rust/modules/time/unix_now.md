---
title: "unix_now"
description: "The current time as whole seconds since the Unix epoch."
sidebar:
  label: "unix_now"
---

The current time as whole seconds since the Unix epoch.

## Import

```rust
use helpers4::time::unix_now;
```

Cargo feature `time` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features time
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.3", default-features = false, features = ["time"] }
```

## Signature

```rust
pub fn unix_now() -> Result<u64, ClockError>
```

## Returns

`Result<u64, ClockError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

[`ClockError`](/rust/modules/time/clockerror/) when the system clock is set before 1970. Do not turn that into `0`: a token
expiry checked against `0` would look valid forever.

## Examples

```rust
use helpers4::time::unix_now;

let now = unix_now()?;
assert!(now > 1_700_000_000); // after November 2023
```

## Source

[src/time/unix_now.rs](https://github.com/helpers4/rust/blob/v0.0.3/src/time/unix_now.rs#L26)
