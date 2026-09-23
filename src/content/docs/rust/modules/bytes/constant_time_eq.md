---
title: "constant_time_eq"
description: "Compares two byte slices without stopping at the first difference."
sidebar:
  label: "constant_time_eq"
---

Compares two byte slices without stopping at the first difference.

The loop visits every byte and combines the differences with `|`, so the time it takes does
not depend on where the slices differ, only on their length (a length mismatch returns at
once, so the length is not secret). This is a best effort: Rust and LLVM give no hard
guarantee that a compiler will not turn it back into an early exit, so for cryptographic
code that needs one, use a dedicated crate such as `subtle`.

## Import

```rust
use helpers4::bytes::constant_time_eq;
```

Cargo feature `bytes` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features bytes
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["bytes"] }
```

## Signature

```rust
pub fn constant_time_eq(a: &[u8], b: &[u8]) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&[u8]` | The first slice. |
| `b` | `&[u8]` | The second slice. |

## Returns

`bool` — `true` when both slices have the same length and the same content.

## Examples

```rust
use helpers4::bytes::constant_time_eq;

assert!(constant_time_eq(b"secret", b"secret"));
assert!(!constant_time_eq(b"secret", b"secreT"));
assert!(!constant_time_eq(b"secret", b"secre"));
```

## Source

[src/bytes/constant_time_eq.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/bytes/constant_time_eq.rs#L32)
