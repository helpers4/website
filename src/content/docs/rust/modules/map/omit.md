---
title: "omit"
description: "Returns a new map with the entries of map except those whose key is in keys."
sidebar:
  label: "omit"
---

Returns a new map with the entries of `map` except those whose key is in `keys`.

Keys that are not in `map` are ignored. The complement of [`pick`](/rust/modules/map/pick/).

## Import

```rust
use helpers4::map::omit;
```

Cargo feature `map` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features map
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["map"] }
```

## Signature

```rust
pub fn omit<K: Clone + Eq + Hash, V: Clone, S: BuildHasher>(
    map: &HashMap<K, V, S>,
    keys: &[K],
) -> HashMap<K, V>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `map` | `&HashMap<K, V, S>` | The map to filter. |
| `keys` | `&[K]` | The keys to leave out. |

## Returns

`HashMap<K, V>`

## Examples

```rust
use helpers4::map::omit;
use std::collections::HashMap;

let user = HashMap::from([("name", 1), ("email", 2), ("password", 3)]);
assert_eq!(omit(&user, &["password"]), HashMap::from([("name", 1), ("email", 2)]));
```

## Source

[src/map/omit.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/map/omit.rs#L27)
