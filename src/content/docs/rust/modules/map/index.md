---
title: "map"
description: "Helpers for HashMap that the standard library does not provide."
sidebar:
  label: "≡ Overview"
  order: 0
---

Helpers for `HashMap` that the standard library does not provide.

Inputs are borrowed and results are new maps: nothing is mutated.

## Install

Cargo feature `map` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features map
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["map"] }
```

Import path: `helpers4::map`.

## Items

| Item | What it does |
| --- | --- |
| [`map_values`](/rust/modules/map/map_values/) | Returns a new map with the same keys and each value replaced by `f(value)`. |
| [`omit`](/rust/modules/map/omit/) | Returns a new map with the entries of `map` except those whose key is in `keys`. |
| [`pick`](/rust/modules/map/pick/) | Returns a new map with only the entries of `map` whose key is in `keys`. |
