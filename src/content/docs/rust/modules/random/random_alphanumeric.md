---
title: "random_alphanumeric"
description: "A random string of letters and digits (A-Za-z0-9) from the operating system's random source, with every character equally likely."
sidebar:
  label: "random_alphanumeric"
---

A random string of letters and digits (`A-Za-z0-9`) from the operating system's random
source, with every character equally likely.

Needs the `random-entropy` feature. Bytes that would favor some characters are discarded
rather than folded with a modulo (256 is not a multiple of 62), so a 20-character result
carries `20 × log2(62)` ≈ 119 bits of randomness.

## Import

```rust
use helpers4::random::random_alphanumeric;
```

Cargo feature `random` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features random
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["random"] }
```

## Signature

```rust
pub fn random_alphanumeric(len: usize) -> Result<String, EntropyError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `len` | `usize` | The number of characters. |

## Returns

`Result<String, EntropyError>` — A string of `len` characters, or an [`EntropyError`](#error-type-entropyerror).

## Errors

Returns an [`EntropyError`](#error-type-entropyerror) when the operating system cannot provide random bytes.

## Examples

```rust
use helpers4::random::random_alphanumeric;

let token = random_alphanumeric(24)?;
assert_eq!(token.len(), 24);
assert!(token.chars().all(|c| c.is_ascii_alphanumeric()));
```

## Error type: EntropyError

The operating system could not provide random bytes.

Rare, but possible (no entropy source at boot, a sandbox that blocks the system call, an
unsupported platform). The functions that return it never fall back to weaker randomness: a
key or a token made from predictable bytes is worse than no key.

```rust
use helpers4::random::EntropyError;

pub struct EntropyError(getrandom::Error) { /* private fields */ }
```

### Examples

```rust
use helpers4::random::random_bytes;

match random_bytes(16) {
    Ok(bytes) => assert_eq!(bytes.len(), 16),
    Err(error) => eprintln!("no randomness available: {error}"),
}
```

## Source

[src/random/random_alphanumeric.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/random/random_alphanumeric.rs#L39)
