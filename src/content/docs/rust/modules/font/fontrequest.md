---
title: "FontRequest"
description: "What a text asks of a family: the properties pick_closest matches."
sidebar:
  label: "FontRequest"
---

What a text asks of a family: the properties [`pick_closest`](/rust/modules/font/pick_closest/) matches.
The default is CSS's initial value: weight 400, normal style, normal width.

## Import

```rust
use helpers4::font::FontRequest;
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

## Definition

```rust
pub struct FontRequest { /* private fields */ }
```

## Examples

```rust
use helpers4::font::{FontRequest, FontStyle};

let request = FontRequest::default();
assert_eq!((request.weight, request.style, request.stretch), (400.0, FontStyle::Normal, 100.0));
assert_eq!(FontRequest::new(600.0, FontStyle::Italic).weight, 600.0);
```

## Source

[src/font/font_request.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/font_request.rs#L20)
