---
title: "pick"
description: "Returns a new map with only the entries of map whose key is in keys."
sidebar:
  label: "pick"
---

Returns a new map with only the entries of `map` whose key is in `keys`.

Keys that are not in `map` are ignored.

## Import

```rust
use helpers4::map::pick;
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
pub fn pick<K: Clone + Eq + Hash, V: Clone, S: BuildHasher>(
    map: &HashMap<K, V, S>,
    keys: &[K],
) -> HashMap<K, V>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `map` | `&HashMap<K, V, S>` | The map to filter. |
| `keys` | `&[K]` | The keys to keep. |

## Returns

`HashMap<K, V>`

## Examples

```rust
use helpers4::map::pick;
use std::collections::HashMap;

let user = HashMap::from([("name", 1), ("email", 2), ("password", 3)]);
let public = pick(&user, &["name", "email", "age"]);
assert_eq!(public, HashMap::from([("name", 1), ("email", 2)]));
```

## Source

[src/map/pick.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/map/pick.rs#L28)
