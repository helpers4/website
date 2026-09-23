---
title: "pipe"
description: "Combines two functions into one that applies first and then second to its result: pipe(first, second)(x) is second(first(x))."
sidebar:
  label: "pipe"
---

Combines two functions into one that applies `first` and then `second` to its result:
`pipe(first, second)(x)` is `second(first(x))`.

The same as [`compose`](/rust/modules/function/compose/) with the arguments in reading order.

## Import

```rust
use helpers4::function::pipe;
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
pub fn pipe<A, B, C>(first: impl Fn(A) -> B, second: impl Fn(B) -> C) -> impl Fn(A) -> C
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `first` | `impl Fn(A) -> B` | The function applied first. |
| `second` | `impl Fn(B) -> C` | The function applied to the result of `first`. |

## Returns

`impl Fn(A) -> C` — A function from the input of `first` to the output of `second`.

## Examples

```rust
use helpers4::function::pipe;

let shout = pipe(|s: &str| s.to_uppercase(), |s: String| s + "!");
assert_eq!(shout("hello"), "HELLO!");
```

## Source

[src/function/pipe.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/function/pipe.rs#L27)
