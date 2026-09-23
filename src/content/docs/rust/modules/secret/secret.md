---
title: "Secret"
description: "A value that must not leak through logs, error messages or {:?}: printing it shows [REDACTED] instead of the content."
sidebar:
  label: "Secret"
---

A value that must not leak through logs, error messages or `{:?}`: printing it shows
`[REDACTED]` instead of the content.

The only way to read it is the explicit [`expose`](#expose) (or
[`into_inner`](#into_inner)), which makes every use of the secret easy to find in a code
review. It is not `PartialEq`, `Hash` or serializable, so it cannot be compared, used as a key
or written out by accident. **It does not wipe the memory when dropped**: that needs
unsafe code, which this crate forbids, so use a dedicated crate such as `zeroize` when a
value must not linger in memory.

## Import

```rust
use helpers4::secret::Secret;
```

Cargo feature `secret` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features secret
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["secret"] }
```

## Definition

```rust
pub struct Secret<T> { /* private fields */ }
```

## Examples

```rust
use helpers4::secret::Secret;

let token = Secret::new("hunter2".to_string());
assert_eq!(format!("{token}"), "[REDACTED]");
assert_eq!(format!("{token:?}"), "Secret([REDACTED])");
assert_eq!(token.expose(), "hunter2");
```

## Methods

### `new`

```rust
pub fn new(value: T) -> Self
```

Wraps `value`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `value` | `T` | The sensitive value. |

**Returns**

`Self` — The wrapper, which hides the value from `Debug` and `Display`.

### `expose`

```rust
pub fn expose(&self) -> &T
```

Borrows the value.

**Returns**

`&T` — A reference to the wrapped value: the one place where it is read.

### `into_inner`

```rust
pub fn into_inner(self) -> T
```

Unwraps the value.

**Returns**

`T` — The wrapped value, no longer protected.

## Source

[src/secret/secret_value.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/secret/secret_value.rs#L28)
