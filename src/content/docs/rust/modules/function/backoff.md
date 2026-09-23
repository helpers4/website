---
title: "backoff"
description: "The delay before retry number attempt, doubling each time up to max: exponential backoff."
sidebar:
  label: "backoff"
---

The delay before retry number `attempt`, doubling each time up to `max`: exponential backoff.

Attempt `1` waits `base`, attempt `2` waits `2 × base`, attempt `3` `4 × base`, and so on,
never more than `max`. Attempt `0` is treated like attempt `1`. The arithmetic saturates, so
a huge attempt number gives `max` instead of overflowing. Nothing sleeps: the caller decides
what to do with the duration (see [`retry`](/rust/modules/function/retry/)).

## Import

```rust
use helpers4::function::backoff;
```

Cargo feature `function` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features function
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["function"] }
```

## Signature

```rust
pub fn backoff(attempt: u32, base: Duration, max: Duration) -> Duration
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `attempt` | `u32` | The number of the attempt that just failed, starting at `1`. |
| `base` | `Duration` | The delay after the first failure. |
| `max` | `Duration` | The longest delay to ever return. |

## Returns

`Duration` — The duration to wait, between `base` and `max` (or `max` alone if `base` is larger).

## Examples

```rust
use helpers4::function::backoff;
use std::time::Duration;

let base = Duration::from_millis(100);
let max = Duration::from_secs(1);
assert_eq!(backoff(1, base, max), Duration::from_millis(100));
assert_eq!(backoff(3, base, max), Duration::from_millis(400));
assert_eq!(backoff(10, base, max), max);
```

## Source

[src/function/backoff.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/function/backoff.rs#L37)
