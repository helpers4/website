---
title: "redact"
description: "Replaces every occurrence of each of secrets in text with [REDACTED]."
sidebar:
  label: "redact"
---

Replaces every occurrence of each of `secrets` in `text` with `[REDACTED]`.

Meant for text that is about to be logged or shown (a command line, an HTTP dump, an error
message) when you know the secret values. Longer secrets are replaced first, so a secret that
contains another one is hidden whole. Empty secrets are ignored. Only exact occurrences are
found: a secret that was transformed (encoded, split over lines) is not.

## Import

```rust
use helpers4::secret::redact;
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
pub fn redact(text: &str, secrets: &[&str]) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to clean. |
| `secrets` | `&[&str]` | The values to hide. |

## Returns

`String` — The text with every occurrence replaced.

## Examples

```rust
use helpers4::secret::redact;

let line = "curl -H 'Authorization: Bearer abc123' https://x.org?key=abc123";
assert_eq!(
    redact(line, &["abc123"]),
    "curl -H 'Authorization: Bearer [REDACTED]' https://x.org?key=[REDACTED]"
);
```

## Source

[src/secret/redact.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/secret/redact.rs#L36)
