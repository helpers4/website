---
title: "join"
description: "Runs two futures concurrently and completes with both outputs, once both are done."
sidebar:
  label: "join"
---

Runs two futures concurrently and completes with both outputs, once both are done.

Both are polled on every wake-up, so they make progress together on one task; neither is
started twice or dropped early. It needs no runtime, so it works with [`block_on`](/rust/modules/future/block_on/)
or any executor.

## Import

```rust
use helpers4::future::join;
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
pub fn join<A: Future, B: Future>(a: A, b: B) -> impl Future<Output = (A::Output, B::Output)>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `A` | The first future. |
| `b` | `B` | The second future. |

## Returns

`impl Future<Output = (A::Output, B::Output)>` — A future for `(output of a, output of b)`.

## Examples

```rust
use helpers4::future::{block_on, join};

let (a, b) = block_on(join(async { 1 }, async { "two" }));
assert_eq!((a, b), (1, "two"));
```

## Source

[src/future/join.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/future/join.rs#L31)
