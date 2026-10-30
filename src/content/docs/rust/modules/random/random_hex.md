---
title: "random_hex"
description: "Random bytes from the operating system, written as lowercase hexadecimal: the usual form of a master key or a session token (random_hex(32) is a 256-bit key in 64 characters)."
sidebar:
  label: "random_hex"
---

Random bytes from the operating system, written as lowercase hexadecimal: the usual form of
a master key or a session token (`random_hex(32)` is a 256-bit key in 64 characters).

Needs the `random-entropy` feature.

## Import

```rust
use helpers4::random::random_hex;
```

Cargo feature `random` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features random
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["random"] }
```

## Signature

```rust
pub fn random_hex(byte_len: usize) -> Result<String, EntropyError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `byte_len` | `usize` | The number of random bytes; the result has twice as many characters. |

## Returns

`Result<String, EntropyError>` — `2 * byte_len` characters in `0-9a-f`, or an [`EntropyError`](#error-type-entropyerror).

## Errors

Returns an [`EntropyError`](#error-type-entropyerror) when the operating system cannot provide random bytes.

## Examples

```rust
use helpers4::random::random_hex;

let key = random_hex(32)?;
assert_eq!(key.len(), 64);
assert!(key.chars().all(|c| c.is_ascii_hexdigit()));
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

[src/random/random_hex.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/random/random_hex.rs#L35)
