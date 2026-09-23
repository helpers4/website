---
title: "toggle"
description: "Removes item from set if it is there, inserts it otherwise."
sidebar:
  label: "toggle"
---

Removes `item` from `set` if it is there, inserts it otherwise.

## Import

```rust
use helpers4::set::toggle;
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

## Signature

```rust
pub fn toggle<T: Eq + Hash, S: BuildHasher>(set: &mut HashSet<T, S>, item: T) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `set` | `&mut HashSet<T, S>` | The set to change. |
| `item` | `T` | The element to flip. |

## Returns

`bool` — `true` when `item` is in the set after the call (it was inserted), `false` when it was removed.

## Examples

```rust
use helpers4::set::toggle;
use std::collections::HashSet;

let mut tags = HashSet::from(["rust"]);
assert!(toggle(&mut tags, "cli"));   // added
assert!(!toggle(&mut tags, "rust")); // removed
assert_eq!(tags, HashSet::from(["cli"]));
```

## Source

[src/set/toggle.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/set/toggle.rs#L30)
