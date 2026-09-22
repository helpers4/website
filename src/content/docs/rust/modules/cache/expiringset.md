---
title: "ExpiringSet"
description: "A set whose members expire: an ExpiringMap without values."
sidebar:
  label: "ExpiringSet"
---

A set whose members expire: an [`ExpiringMap`](/rust/modules/cache/expiringmap/) without values.

## Import

```rust
use helpers4::cache::ExpiringSet;
```

Cargo feature `cache` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features cache
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["cache"] }
```

## Definition

```rust
pub type ExpiringSet<K, T = u64> = ExpiringMap<K, (), T>
```

## Source

[src/cache/expiring_map.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/cache/expiring_map.rs#L54)
