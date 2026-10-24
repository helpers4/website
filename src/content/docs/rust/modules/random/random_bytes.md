---
title: "random_bytes"
description: "Random bytes from the operating system, suitable for keys, tokens and salts."
sidebar:
  label: "random_bytes"
---

Random bytes from the operating system, suitable for keys, tokens and salts.

Needs the `random-entropy` feature. It returns an error rather than weaker randomness when
the system cannot provide bytes.

## Import

```rust
use helpers4::random::random_bytes;
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
pub fn random_bytes(len: usize) -> Result<Vec<u8>, EntropyError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `len` | `usize` | The number of bytes. |

## Returns

`Result<Vec<u8>, EntropyError>` — `len` random bytes, or an [`EntropyError`](#error-type-entropyerror).

## Errors

Returns an [`EntropyError`](#error-type-entropyerror) when the operating system cannot provide random bytes.

## Examples

```rust
use helpers4::random::random_bytes;

let key = random_bytes(32)?;
assert_eq!(key.len(), 32);
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

[src/random/random_bytes.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/random/random_bytes.rs#L34)
