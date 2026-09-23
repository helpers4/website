---
title: "write_atomic"
description: "Writes contents to path so that readers see either the old file or the new one, never a half-written one."
sidebar:
  label: "write_atomic"
---

Writes `contents` to `path` so that readers see either the old file or the new one, never a
half-written one.

The data goes to a temporary file in the same directory (so the last step stays on one file
system), is flushed to disk, and is then renamed over `path`. If anything fails the temporary
file is removed and `path` is left as it was. The parent directory must exist.

## Import

```rust
use helpers4::fs::write_atomic;
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
pub fn write_atomic(path: impl AsRef<Path>, contents: impl AsRef<[u8]>) -> io::Result<()>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `path` | `impl AsRef<Path>` | The file to create or replace. |
| `contents` | `impl AsRef<[u8]>` | The bytes to write. |

## Returns

`io::Result<()>`

## Errors

An `io::Error` when `path` has no file name, the temporary file cannot be created or
written, or the final rename fails (for instance because `path` is a directory).

## Examples

```rust
use helpers4::fs::write_atomic;

let path = std::env::temp_dir().join("helpers4-write-atomic-doc.txt");
write_atomic(&path, "first")?;
write_atomic(&path, "second")?;
assert_eq!(std::fs::read_to_string(&path)?, "second");
```

## Source

[src/fs/write_atomic.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/fs/write_atomic.rs#L41)
