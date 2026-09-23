---
title: "Memoize"
description: "A function whose results are remembered: calling it again with the same argument returns the stored result instead of computing it again."
sidebar:
  label: "Memoize"
---

A function whose results are remembered: calling it again with the same argument returns
the stored result instead of computing it again.

The wrapped function receives the argument by reference and must be deterministic (and free
of side effects you rely on), since it runs only once per distinct argument. There is no
size limit: every distinct argument keeps its result until [`clear`](#clear) is called,
so do not feed it unbounded input.

## Import

```rust
use helpers4::function::Memoize;
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
pub struct Memoize<A, R, F> { /* private fields */ }
```

## Examples

```rust
use helpers4::function::Memoize;

let mut square = Memoize::new(|n: &u64| n * n);
assert_eq!(square.call(12), 144);
assert_eq!(square.call(12), 144); // served from memory
assert_eq!(square.len(), 1);
```

## Methods

### `new`

```rust
pub fn new(func: F) -> Self
```

Wraps `func`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `func` | `F` | The function whose results to remember. |

**Returns**

`Self` — A memoized version of `func` with an empty memory.

### `call`

```rust
pub fn call(&mut self, arg: A) -> R
```

Calls the function with `arg`, or returns the remembered result for that argument.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `arg` | `A` | The argument to call the function with. |

**Returns**

`R` — The result for `arg`, computed at most once until [`clear`](#clear).

### `len`

```rust
pub fn len(&self) -> usize
```

The number of distinct arguments whose result is remembered.

**Returns**

`usize` — The number of stored results.

### `is_empty`

```rust
pub fn is_empty(&self) -> bool
```

Whether no result is remembered yet.

**Returns**

`bool` — `true` when nothing is stored.

### `clear`

```rust
pub fn clear(&mut self)
```

Forgets every remembered result.

**Returns**

`()`

## Source

[src/function/memoize.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/function/memoize.rs#L26)
