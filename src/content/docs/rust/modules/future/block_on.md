---
title: "block_on"
description: "Runs future to completion on the current thread and returns its output."
sidebar:
  label: "block_on"
---

Runs `future` to completion on the current thread and returns its output.

A minimal executor with no dependency: it polls the future, and while it is pending parks the
thread until the future's waker is called. There is no reactor, timer or thread pool, so it
suits futures that are purely computational or woken by another thread (channels, locks,
your own `Waker` users). A future that needs a specific runtime (tokio's sockets or timers,
for instance) must run in that runtime instead, and blocking inside one would deadlock it.

## Import

```rust
use helpers4::future::block_on;
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
pub fn block_on<F: Future>(future: F) -> F::Output
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `future` | `F` | The future to run. |

## Returns

`F::Output` — The output of `future`.

## Examples

```rust
use helpers4::future::block_on;

let answer = block_on(async { 40 + 2 });
assert_eq!(answer, 42);
```

## Source

[src/future/block_on.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/future/block_on.rs#L43)
