---
title: "MAX_SUBSET_ITEMS"
description: "The most items subsets accepts: 2^16 = 65 536 subsets."
sidebar:
  label: "MAX_SUBSET_ITEMS"
---

The most items [`subsets`](/rust/modules/set/subsets/) accepts: 2^16 = 65 536 subsets.

## Import

```rust
use helpers4::set::MAX_SUBSET_ITEMS;
```

Cargo feature `set` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features set
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["set"] }
```

## Definition

```rust
pub const MAX_SUBSET_ITEMS: usize = 16
```

## Source

[src/set/subsets.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/set/subsets.rs#L6)
