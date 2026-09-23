---
title: "join_all"
description: "Runs any number of futures concurrently and completes with all their outputs, in the order the futures were given."
sidebar:
  label: "join_all"
---

Runs any number of futures concurrently and completes with all their outputs, in the order the
futures were given.

Every future still pending is polled on each wake-up, so they progress together on one task. An
empty input completes at once with an empty `Vec`. Like [`join`](/rust/modules/future/join/) it needs no
runtime.

## Import

```rust
use helpers4::future::join_all;
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
pub fn join_all<I>(futures: I) -> impl Future<Output = Vec<<I::Item as Future>::Output>>
where
    I: IntoIterator,
    I::Item: Future,
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `futures` | `I` | The futures to run, all of the same type (box them to mix types). |

## Returns

`impl Future<Output = Vec<<I::Item as Future>::Output>>` — A future for the outputs, in input order.

## Examples

```rust
use helpers4::future::{block_on, join_all};

let squares = block_on(join_all((1..=4).map(|n| async move { n * n })));
assert_eq!(squares, vec![1, 4, 9, 16]);
```

## Source

[src/future/join_all.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/future/join_all.rs#L31)
