---
title: "walk"
description: "Every file below dir, at any depth, sorted by path."
sidebar:
  label: "walk"
---

Every file below `dir`, at any depth, sorted by path.

Directories themselves are not listed (an empty one contributes nothing), and symbolic links
are listed as entries but not followed, so a link to a parent directory cannot make the walk
loop.

## Import

```rust
use helpers4::fs::walk;
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
pub fn walk(dir: impl AsRef<Path>) -> io::Result<Vec<PathBuf>>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `dir` | `impl AsRef<Path>` | The directory to walk. |

## Returns

`io::Result<Vec<PathBuf>>`

## Errors

An `io::Error` when `dir`, or a directory below it, cannot be read.

## Examples

```rust
use helpers4::fs::{walk, write_atomic};

let root = std::env::temp_dir().join("helpers4-walk-doc");
std::fs::create_dir_all(root.join("sub"))?;
write_atomic(root.join("a.txt"), "a")?;
write_atomic(root.join("sub").join("b.txt"), "b")?;
assert_eq!(walk(&root)?, vec![root.join("a.txt"), root.join("sub").join("b.txt")]);
```

## Source

[src/fs/walk.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/fs/walk.rs#L36)
