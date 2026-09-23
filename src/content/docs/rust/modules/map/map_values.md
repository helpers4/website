---
title: "map_values"
description: "Returns a new map with the same keys and each value replaced by f(value)."
sidebar:
  label: "map_values"
---

Returns a new map with the same keys and each value replaced by `f(value)`.

## Import

```rust
use helpers4::map::map_values;
```

Cargo feature `map` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features map
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["map"] }
```

## Signature

```rust
pub fn map_values<K: Clone + Eq + Hash, V, W, S: BuildHasher>(
    map: &HashMap<K, V, S>,
    mut f: impl FnMut(&V) -> W,
) -> HashMap<K, W>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `map` | `&HashMap<K, V, S>` | The map to transform. |
| `f` | `impl FnMut(&V) -> W` | Computes the new value from each old value. |

## Returns

`HashMap<K, W>`

## Examples

```rust
use helpers4::map::map_values;
use std::collections::HashMap;

let prices = HashMap::from([("apple", 2), ("pear", 3)]);
let doubled = map_values(&prices, |price| price * 2);
assert_eq!(doubled, HashMap::from([("apple", 4), ("pear", 6)]));
```

## Source

[src/map/map_values.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/map/map_values.rs#L25)
