---
title: "is_within"
description: "Whether path, taken relative to base, stays inside base: a guard against path traversal."
sidebar:
  label: "is_within"
---

Whether `path`, taken relative to `base`, stays inside `base`: a guard against path traversal.

A relative `path` is joined to `base` and both are cleaned lexically (see
[`normalize`](/rust/modules/license/normalize/)), so `"a/../../b"` escapes and `"a/../b"` does not; an
absolute `path` must itself lie under `base`. `base` counts as inside itself. Nothing touches
the file system, so this does **not** see symbolic links: if the directory can contain links
an attacker controls, resolve the path with `std::fs::canonicalize` and compare that instead.

## Import

```rust
use helpers4::fs::is_within;
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
pub fn is_within(base: &Path, path: &Path) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `base` | `&Path` | The directory that must contain the result. |
| `path` | `&Path` | The path to check, relative to `base` or absolute. |

## Returns

`bool` — `true` when the cleaned path is `base` or lies under it.

## Examples

```rust
use helpers4::fs::is_within;
use std::path::Path;

let uploads = Path::new("/srv/uploads");
assert!(is_within(uploads, Path::new("avatars/me.png")));
assert!(!is_within(uploads, Path::new("../secrets.txt")));
assert!(!is_within(uploads, Path::new("/etc/passwd")));
```

## Source

[src/fs/is_within.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/fs/is_within.rs#L37)
