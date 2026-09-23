---
title: "TokenBucket"
description: "A token-bucket rate limiter with the clock passed in."
sidebar:
  label: "TokenBucket"
---

A token-bucket rate limiter with the clock passed in.

The bucket holds up to `capacity` tokens and gets `refill_per_second` new ones every second.
Each action takes tokens with [`try_acquire`](#try_acquire); when there are not enough
left the action is refused, so bursts up to `capacity` are allowed while the long-run rate
stays at `refill_per_second`. Nothing here reads a clock: pass the current time in
milliseconds (any monotonic count works). A time that goes backwards is treated as no time
having passed.

## Import

```rust
use helpers4::function::TokenBucket;
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

## Definition

```rust
pub struct TokenBucket { /* private fields */ }
```

## Examples

```rust
use helpers4::function::TokenBucket;

// A burst of 2, then one more every second.
let mut bucket = TokenBucket::new(2, 1, 0);
assert!(bucket.try_acquire(0));
assert!(bucket.try_acquire(0));
assert!(!bucket.try_acquire(500));  // half a token is not enough
assert!(bucket.try_acquire(1_000)); // one full token has come back
```

## Methods

### `new`

```rust
pub fn new(capacity: u32, refill_per_second: u32, now_ms: u64) -> Self
```

Creates a full bucket.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `capacity` | `u32` | The most tokens the bucket holds, which is also the largest burst. |
| `refill_per_second` | `u32` | How many tokens are added every second. |
| `now_ms` | `u64` | The current time in milliseconds. |

**Returns**

`Self` — A bucket holding `capacity` tokens.

### `try_acquire`

```rust
pub fn try_acquire(&mut self, now_ms: u64) -> bool
```

Takes one token if there is one.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `now_ms` | `u64` | The current time in milliseconds. |

**Returns**

`bool` — `true` when a token was taken, `false` when the bucket is empty.

### `try_acquire_n`

```rust
pub fn try_acquire_n(&mut self, now_ms: u64, tokens: u32) -> bool
```

Takes `tokens` tokens at once if that many are available, and none otherwise.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `now_ms` | `u64` | The current time in milliseconds. |
| `tokens` | `u32` | How many tokens the action costs. |

**Returns**

`bool` — `true` when the tokens were taken, `false` when there are not enough (nothing is taken).

### `available`

```rust
pub fn available(&mut self, now_ms: u64) -> u32
```

How many whole tokens are available right now.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `now_ms` | `u64` | The current time in milliseconds. |

**Returns**

`u32` — The number of tokens that [`try_acquire_n`](#try_acquire_n) would grant at once.

## Source

[src/function/token_bucket.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/function/token_bucket.rs#L27)
