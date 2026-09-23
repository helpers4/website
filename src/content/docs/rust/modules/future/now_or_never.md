---
title: "now_or_never"
description: "Polls future exactly once and returns its output if it was already ready."
sidebar:
  label: "now_or_never"
---

Polls `future` exactly once and returns its output if it was already ready.

Useful to peek at a future that may have finished (a channel receive, a cached value) without
waiting for it. The future is dropped if it was not ready, so use it on futures you can
afford to abandon.

## Import

```rust
use helpers4::future::now_or_never;
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
pub fn now_or_never<F: Future>(future: F) -> Option<F::Output>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `future` | `F` | The future to poll once. |

## Returns

`Option<F::Output>` — `Some(output)` when the first poll completed, `None` when it was still pending.

## Examples

```rust
use helpers4::future::now_or_never;

assert_eq!(now_or_never(async { 1 + 1 }), Some(2));
assert_eq!(now_or_never(std::future::pending::<u32>()), None);
```

## Source

[src/future/now_or_never.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/future/now_or_never.rs#L30)
