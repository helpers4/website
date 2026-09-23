---
title: "mask"
description: "Hides a secret but for its last few characters, such as \"****************7890\"."
sidebar:
  label: "mask"
---

Hides a secret but for its last few characters, such as `"****************7890"`.

Every character except the last `visible` becomes `*`. To be safe with short secrets, at most a
quarter of the characters are ever shown, whatever `visible` asks for, so an 8-character
password shows at most 2. The length of the result equals the length of the secret in characters.

## Import

```rust
use helpers4::secret::mask;
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

## Signature

```rust
pub fn mask(secret: &str, visible: usize) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `secret` | `&str` | The value to mask. |
| `visible` | `usize` | How many trailing characters to keep, at most a quarter of the secret. |

## Returns

`String` — The masked value.

## Examples

```rust
use helpers4::secret::mask;

assert_eq!(mask("sk-abcdef1234567890", 4), "***************7890");
assert_eq!(mask("abc", 4), "***"); // too short to show anything
```

## Source

[src/secret/mask.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/secret/mask.rs#L29)
