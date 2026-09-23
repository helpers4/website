---
title: "yield_now"
description: "A future that gives other tasks a turn: it is pending once, then completes."
sidebar:
  label: "yield_now"
---

A future that gives other tasks a turn: it is pending once, then completes.

The first poll wakes the task straight away and returns `Pending`, so an executor that runs
many tasks can schedule the others before resuming this one. Call it inside a long
computation in an `async` block to keep it from monopolising its thread.

## Import

```rust
use helpers4::future::yield_now;
```

Cargo feature `future` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features future
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["future"] }
```

## Signature

```rust
pub fn yield_now() -> impl Future<Output = ()>
```

## Returns

`impl Future<Output = ()>` — A future that completes on its second poll.

## Examples

```rust
use helpers4::future::{block_on, yield_now};

block_on(async {
    yield_now().await;
});
```

## Source

[src/future/yield_now.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/future/yield_now.rs#L27)
