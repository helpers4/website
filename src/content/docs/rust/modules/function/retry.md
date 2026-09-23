---
title: "retry"
description: "Runs operation until it succeeds, at most attempts times, and returns the first success or the last error."
sidebar:
  label: "retry"
---

Runs `operation` until it succeeds, at most `attempts` times, and returns the first success or
the last error.

`operation` receives the number of the attempt, starting at `1`, so it can wait before a retry
(for instance with [`backoff`](/rust/modules/function/backoff/)) or log it: this helper never sleeps, so it
works the same in a test as in production. `attempts` of `0` is treated as `1`: an operation
is always tried once.

## Import

```rust
use helpers4::function::retry;
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
pub fn retry<T, E>(attempts: u32, mut operation: impl FnMut(u32) -> Result<T, E>) -> Result<T, E>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `attempts` | `u32` | The most times to run `operation`. |
| `operation` | `impl FnMut(u32) -> Result<T, E>` | The work to try, given the attempt number. |

## Returns

`Result<T, E>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

The error of the last attempt, when every attempt failed.

## Examples

```rust
use helpers4::function::retry;

let result = retry(3, |attempt| if attempt < 3 { Err("not yet") } else { Ok(attempt) });
assert_eq!(result, Ok(3));

let failed: Result<u32, &str> = retry(2, |_| Err("always"));
assert_eq!(failed, Err("always"));
```

## Source

[src/function/retry.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/function/retry.rs#L33)
