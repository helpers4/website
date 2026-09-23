---
title: "REDACTED"
description: "The text shown in place of a redacted secret."
sidebar:
  label: "REDACTED"
---

The text shown in place of a redacted secret.

## Import

```rust
use helpers4::secret::REDACTED;
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
pub const REDACTED: &str = "[REDACTED]"
```

## Source

[src/secret/redact.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/secret/redact.rs#L6)
