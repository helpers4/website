---
title: "fs"
description: "File-system helpers: safe writes, missing-file-as-None, listing and path checks."
sidebar:
  label: "≡ Overview"
  order: 0
---

File-system helpers: safe writes, missing-file-as-`None`, listing and path checks.

`write_atomic` and `read_to_string_opt` cover the two things `std::fs` makes awkward, `walk` lists a
tree without following links, and `normalize` / `is_within` handle paths lexically (no I/O, so they
work for paths that do not exist, and never resolve symbolic links).

## Install

Cargo feature `fs` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features fs
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["fs"] }
```

Import path: `helpers4::fs`.

## Items

| Item | What it does |
| --- | --- |
| [`is_within`](/rust/modules/fs/is_within/) | Whether `path`, taken relative to `base`, stays inside `base`: a guard against path traversal. |
| [`normalize`](/rust/modules/fs/normalize/) | Cleans a path lexically: drops `.` components and folds `..` into the component before it. |
| [`read_to_string_opt`](/rust/modules/fs/read_to_string_opt/) | Reads a whole file as text, giving `None` instead of an error when it does not exist. |
| [`walk`](/rust/modules/fs/walk/) | Every file below `dir`, at any depth, sorted by path. |
| [`write_atomic`](/rust/modules/fs/write_atomic/) | Writes `contents` to `path` so that readers see either the old file or the new one, never a half-written one. |
