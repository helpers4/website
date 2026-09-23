---
title: "detect"
description: "Recognizes a well-known credential format: the whole of token must look like one."
sidebar:
  label: "detect"
---

Recognizes a well-known credential format: the whole of `token` must look like one.

The check is by prefix, alphabet and length (GitHub, AWS, Slack, Stripe, Google, npm, JWT, and
the header of a PEM private key): no network call, so it says a string *looks like* a token, not
that it is valid, and it will miss formats it does not know. Use [`scan`](/rust/modules/secret/scan/) to
search a whole text.

## Import

```rust
use helpers4::secret::detect;
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
pub fn detect(token: &str) -> Option<TokenKind>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `token` | `&str` | The string to check, a single word without surrounding quotes. |

## Returns

`Option<TokenKind>` — The [`TokenKind`](/rust/modules/secret/tokenkind/), or `None` when the string matches no known format.

## Examples

```rust
use helpers4::secret::{detect, TokenKind};

assert_eq!(detect("ghp_0123456789abcdefghijklmnopqrstuvwxyz"), Some(TokenKind::GitHub));
assert_eq!(detect("just-a-word"), None);
```

## Source

[src/secret/detect.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/secret/detect.rs#L31)
