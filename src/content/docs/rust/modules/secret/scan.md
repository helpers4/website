---
title: "scan"
description: "Finds the well-known credentials in text."
sidebar:
  label: "scan"
---

Finds the well-known credentials in `text`.

The text is cut into words made of letters, digits, `_`, `-` and `.`, and each word is checked
with [`detect`](/rust/modules/secret/detect/); a PEM private key header line (`-----BEGIN ... PRIVATE KEY-----`)
is found as a whole line. Quotes, `=`, `:`, spaces and other punctuation around a token are not
part of it. Like `detect` this is a format check: expect false negatives for formats it does
not know, and use it as a safety net, not as your only protection.

## Import

```rust
use helpers4::secret::scan;
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
pub fn scan(text: &str) -> Vec<Finding>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to search, such as a file or a log. |

## Returns

`Vec<Finding>` — The findings in the order they appear, with their byte ranges in `text`.

## Examples

```rust
use helpers4::secret::{scan, TokenKind};

let findings = scan("AWS_KEY=\"AKIAIOSFODNN7EXAMPLE\" # and nothing else");
assert_eq!(findings.len(), 1);
assert_eq!(findings[0].kind(), TokenKind::AwsAccessKey);
```

## Source

[src/secret/scan.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/secret/scan.rs#L84)
