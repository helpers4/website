---
title: "normalize"
description: "The current SPDX identifier for a deprecated one."
sidebar:
  label: "normalize"
---

The current SPDX identifier for a deprecated one.

SPDX split the GNU licenses into `-only` and `-or-later` and retired the bare forms and the
`+` suffix, but `GPL-3.0` and `LGPL-2.1+` are still what many manifests contain. The match
ignores case. Identifiers that are not deprecated give `None`.

## Import

```rust
use helpers4::license::normalize;
```

Cargo feature `license` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features license
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["license"] }
```

## Signature

```rust
pub fn normalize(id: &str) -> Option<&'static str>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `id` | `&str` | The identifier to update. |

## Returns

`Option<&'static str>` — The replacement, such as `"GPL-3.0-only"` for `"GPL-3.0"`, or `None` when `id` is not one of
the ten deprecated GNU identifiers (`GPL`, `LGPL` and `AGPL`, with and without `+`).

## Examples

```rust
use helpers4::license::normalize;

assert_eq!(normalize("GPL-3.0"), Some("GPL-3.0-only"));
assert_eq!(normalize("GPL-3.0+"), Some("GPL-3.0-or-later"));
assert_eq!(normalize("MIT"), None);
```

## Source

[src/license/normalize.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/license/normalize.rs#L32)
