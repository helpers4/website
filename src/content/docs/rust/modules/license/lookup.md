---
title: "lookup"
description: "What this module knows about the license with SPDX identifier id."
sidebar:
  label: "lookup"
---

What this module knows about the license with SPDX identifier `id`.

The match ignores case (SPDX identifiers are case-insensitive) and accepts the deprecated
identifiers that are still common (`GPL-3.0`, `LGPL-2.1+`, `AGPL-3.0`, ...), answering with the
current one (see [`normalize`](/rust/modules/license/normalize/)). About forty common licenses are known; for
any other identifier the answer is `None`, which means "not in this list", not "invalid".

## Import

```rust
use helpers4::license::lookup;
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
pub fn lookup(id: &str) -> Option<LicenseInfo>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `id` | `&str` | The SPDX identifier, such as `"MIT"` or `"Apache-2.0"`. |

## Returns

`Option<LicenseInfo>` — The [`LicenseInfo`](/rust/modules/license/licenseinfo/), or `None` for an identifier that is not known.

## Examples

```rust
use helpers4::license::{lookup, Category};

assert_eq!(lookup("MPL-2.0").map(|i| i.category()), Some(Category::WeakCopyleft));
assert_eq!(lookup("gpl-3.0").map(|i| i.id()), Some("GPL-3.0-only"));
assert_eq!(lookup("Not-A-License"), None);
```

## Source

[src/license/lookup.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/license/lookup.rs#L33)
