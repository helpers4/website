---
title: "normalize"
description: "Cleans a path lexically: drops . components and folds .. into the component before it."
sidebar:
  label: "normalize"
---

Cleans a path lexically: drops `.` components and folds `..` into the component before it.

Nothing touches the file system, so this works for paths that do not exist, but symbolic
links are not resolved (use `std::fs::canonicalize` for that). A `..` at the start of a
relative path is kept, a `..` right after the root is dropped, and a path that cleans to
nothing becomes `.`.

## Import

```rust
use helpers4::fs::normalize;
```

Cargo feature `fs` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features fs
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["fs"] }
```

## Signature

```rust
pub fn normalize(path: &Path) -> PathBuf
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `path` | `&Path` | The path to clean. |

## Returns

`PathBuf` — The cleaned path.

## Examples

```rust
use helpers4::fs::normalize;
use std::path::{Path, PathBuf};

assert_eq!(normalize(Path::new("a/./b/../c")), PathBuf::from("a/c"));
assert_eq!(normalize(Path::new("../a")), PathBuf::from("../a"));
assert_eq!(normalize(Path::new("a/..")), PathBuf::from("."));
```

## Source

[src/fs/normalize.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/fs/normalize.rs#L34)
