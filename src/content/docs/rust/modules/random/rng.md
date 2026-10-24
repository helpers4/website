---
title: "Rng"
description: "A small, fast, seedable pseudo-random generator (SplitMix64): the same seed always gives the same sequence, on every platform."
sidebar:
  label: "Rng"
---

A small, fast, seedable pseudo-random generator (SplitMix64): the same seed always gives the
same sequence, on every platform.

It is meant for reproducible work (tests, procedural content, shuffling with a recorded
seed) and passed explicitly to [`shuffle`](/rust/modules/random/shuffle/), [`sample`](/rust/modules/random/sample/) and
[`choose`](/rust/modules/random/choose/). It is **not cryptographically secure**: never derive a key, a
token or an identifier that must stay secret from it. Use the `random-entropy` feature for
that.

## Import

```rust
use helpers4::random::Rng;
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

## Definition

```rust
pub struct Rng { /* private fields */ }
```

## Examples

```rust
use helpers4::random::Rng;

let mut a = Rng::seeded(42);
let mut b = Rng::seeded(42);
assert_eq!(a.next_u64(), b.next_u64()); // same seed, same sequence

let roll = a.below(6).map(|n| n + 1); // 1..=6, without modulo bias
assert!(matches!(roll, Some(1..=6)));
```

## Methods

### `next_u64`

```rust
pub fn next_u64(&mut self) -> u64
```

The next 64 random bits.

**Returns**

`u64` — A `u64` where every bit pattern is equally likely.

**Examples**

```rust
use helpers4::random::Rng;

let mut rng = Rng::seeded(1);
assert_eq!(rng.next_u64(), 0x910A_2DEC_8902_5CC1);
assert_eq!(rng.next_u64(), 0xBEEB_8DA1_658E_EC67);
```

### `next_f64`

```rust
pub fn next_f64(&mut self) -> f64
```

A random number in `[0, 1)`, with 53 bits of precision (every value is a multiple of
2⁻⁵³).

**Returns**

`f64` — A value `>= 0.0` and `< 1.0`.

**Examples**

```rust
use helpers4::random::Rng;

let x = Rng::seeded(7).next_f64();
assert!((0.0..1.0).contains(&x));
```

### `below`

```rust
pub fn below(&mut self, bound: u64) -> Option<u64>
```

A random integer in `0..bound`, uniformly: values are rejected rather than folded with a
modulo, which would favor small results when `bound` does not divide 2⁶⁴.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `bound` | `u64` | The exclusive upper bound. |

**Returns**

`Option<u64>` — A value `< bound`, or `None` when `bound` is `0` (there is no such value).

**Examples**

```rust
use helpers4::random::Rng;

let mut rng = Rng::seeded(3);
assert!(rng.below(10).is_some_and(|n| n < 10));
assert_eq!(rng.below(1), Some(0));
assert_eq!(rng.below(0), None);
```

### `fill_bytes`

```rust
pub fn fill_bytes(&mut self, dest: &mut [u8])
```

Fills `dest` with random bytes.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `dest` | `&mut [u8]` | The buffer to fill. |

**Returns**

`()`

**Examples**

```rust
use helpers4::random::Rng;

let mut buf = [0u8; 5];
Rng::seeded(9).fill_bytes(&mut buf);
assert_ne!(buf, [0u8; 5]);
```

### `from_entropy`

```rust
pub fn from_entropy() -> Result<Self, super::EntropyError>
```

Starts a generator from a seed drawn from the operating system, for work that must differ
on every run but needs no secrecy (a random order, a random pick).

Needs the `random-entropy` feature. The generator itself is still not cryptographically
secure: for keys and tokens, use [`random_bytes`](/rust/modules/random/random_bytes/) directly.

**Returns**

`Result<Self, super::EntropyError>` — A generator with an unpredictable seed.

**Errors**

Returns an [`EntropyError`](#error-type-entropyerror) when the operating system cannot provide
random bytes.

**Examples**

```rust
use helpers4::random::{shuffle, Rng};

let mut rng = Rng::from_entropy()?;
let order = shuffle(&[1, 2, 3], &mut rng);
assert_eq!(order.len(), 3);
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

[src/random/rng.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/random/rng.rs#L27)
