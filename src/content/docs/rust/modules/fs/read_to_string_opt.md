---
title: "read_to_string_opt"
description: "Reads a whole file as text, giving None instead of an error when it does not exist."
sidebar:
  label: "read_to_string_opt"
---

Reads a whole file as text, giving `None` instead of an error when it does not exist.

Every other failure (permissions, a directory, invalid UTF-8) is still an error: only "not
found" means "no value".

## Import

```rust
use helpers4::fs::read_to_string_opt;
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
pub fn read_to_string_opt(path: impl AsRef<Path>) -> io::Result<Option<String>>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `path` | `impl AsRef<Path>` | The file to read. |

## Returns

`io::Result<Option<String>>`

## Errors

Any `io::Error` from `std::fs::read_to_string` except `io::ErrorKind::NotFound`.

## Examples

```rust
use helpers4::fs::read_to_string_opt;

assert_eq!(read_to_string_opt("/definitely/not/here.txt")?, None);
```

## Source

[src/fs/read_to_string_opt.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/fs/read_to_string_opt.rs#L29)
