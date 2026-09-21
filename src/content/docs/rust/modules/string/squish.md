---
title: "squish"
description: "Trims s and collapses every run of whitespace into a single space."
sidebar:
  label: "squish"
---

Trims `s` and collapses every run of whitespace into a single space.

Tabs and line breaks count as whitespace, so a multi-line text becomes one line.

## Import

```rust
use helpers4::string::squish;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn squish(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::squish;

assert_eq!(squish("  hello   \n\t world  "), "hello world");
assert_eq!(squish("   "), "");
```

## Source

[src/string/squish.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/string/squish.rs#L18)
