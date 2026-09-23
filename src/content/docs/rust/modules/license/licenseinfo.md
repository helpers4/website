---
title: "LicenseInfo"
description: "What is known about one license: its SPDX identifier, its name and its family."
sidebar:
  label: "LicenseInfo"
---

What is known about one license: its SPDX identifier, its name and its family.

Get it with [`lookup`](/rust/modules/license/lookup/).

## Import

```rust
use helpers4::license::LicenseInfo;
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

## Definition

```rust
pub struct LicenseInfo { /* private fields */ }
```

## Examples

```rust
use helpers4::license::{lookup, Category};

let info = lookup("apache-2.0").unwrap();
assert_eq!(info.id(), "Apache-2.0");
assert_eq!(info.name(), "Apache License 2.0");
assert_eq!(info.category(), Category::Permissive);
```

## Methods

### `id`

```rust
pub fn id(&self) -> &'static str
```

The SPDX identifier in its canonical case.

**Returns**

`&'static str` — For instance `"Apache-2.0"`.

### `name`

```rust
pub fn name(&self) -> &'static str
```

The full name of the license.

**Returns**

`&'static str` — For instance `"Apache License 2.0"`.

### `category`

```rust
pub fn category(&self) -> Category
```

The family the license belongs to.

**Returns**

`Category` — The [`Category`](/rust/modules/license/category/).

## Source

[src/license/license_info.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/license/license_info.rs#L22)
