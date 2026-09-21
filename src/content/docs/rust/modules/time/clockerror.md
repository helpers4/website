---
title: "ClockError"
description: "The system clock is set before the Unix epoch (1970-01-01T00:00:00Z)."
sidebar:
  label: "ClockError"
---

The system clock is set before the Unix epoch (1970-01-01T00:00:00Z).

Returned instead of a silent `0`: an expiry comparison against `0` would treat every token as
still valid.

## Import

```rust
use helpers4::time::ClockError;
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

## Definition

```rust
pub struct ClockError { /* private fields */ }
```

## Methods

### `behind`

```rust
pub fn behind(&self) -> Duration
```

How far before the epoch the clock is.

**Returns**

`Duration`

## Source

[src/time/error.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/time/error.rs#L13)
