---
title: "compose"
description: "Combines two functions into one that applies inner first and outer to its result: compose(outer, inner)(x) is outer(inner(x)), like the mathematical outer ∘ inner."
sidebar:
  label: "compose"
---

Combines two functions into one that applies `inner` first and `outer` to its result:
`compose(outer, inner)(x)` is `outer(inner(x))`, like the mathematical `outer ∘ inner`.

See [`pipe`](/rust/modules/function/pipe/) for the same thing written in reading order.

## Import

```rust
use helpers4::function::compose;
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
pub fn compose<A, B, C>(outer: impl Fn(B) -> C, inner: impl Fn(A) -> B) -> impl Fn(A) -> C
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `outer` | `impl Fn(B) -> C` | The function applied last. |
| `inner` | `impl Fn(A) -> B` | The function applied first. |

## Returns

`impl Fn(A) -> C` — A function from the input of `inner` to the output of `outer`.

## Examples

```rust
use helpers4::function::compose;

let shout = compose(|s: String| s + "!", |s: &str| s.to_uppercase());
assert_eq!(shout("hello"), "HELLO!");
```

## Source

[src/function/compose.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/function/compose.rs#L27)
