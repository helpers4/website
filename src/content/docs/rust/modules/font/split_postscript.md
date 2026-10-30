---
title: "split_postscript"
description: "Splits a PostScript font name into family and style at its first hyphen: NeutrifPro-SemiBold is NeutrifPro and SemiBold."
sidebar:
  label: "split_postscript"
---

Splits a PostScript font name into family and style at its first hyphen:
`NeutrifPro-SemiBold` is `NeutrifPro` and `SemiBold`.

## Import

```rust
use helpers4::font::split_postscript;
```

Cargo feature `font` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features font
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["font"] }
```

## Signature

```rust
pub fn split_postscript(name: &str) -> (&str, &str)
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `name` | `&str` | The PostScript name. |

## Returns

`(&str, &str)` — The family and the style, borrowed from `name`. The style is empty when there is no hyphen.

## Examples

```rust
use helpers4::font::split_postscript;

assert_eq!(split_postscript("NeutrifPro-SemiBold"), ("NeutrifPro", "SemiBold"));
assert_eq!(split_postscript("Helvetica"), ("Helvetica", ""));
```

## Source

[src/font/split_postscript.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/split_postscript.rs#L25)
