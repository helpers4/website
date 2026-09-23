---
title: "heading_slug"
description: "The anchor GitHub gives to a heading: \"Hello, World!\" becomes \"hello-world\"."
sidebar:
  label: "heading_slug"
---

The anchor GitHub gives to a heading: `"Hello, World!"` becomes `"hello-world"`.

The text is trimmed and lowercased, letters (any language), digits, `-` and `_` are kept, every
whitespace character becomes a `-` (they are not merged, so `"a  b"` is `"a--b"`), and
everything else is dropped. Unlike [`slugify`](https://docs.rs/helpers4/latest/helpers4/string/fn.slugify.html)
it follows GitHub's rules rather than making a tidy slug, so use it to build the `#fragment` of a
link to a heading. Two headings with the same text get a numeric suffix on GitHub; that part
needs the whole document and is left to you.

## Import

```rust
use helpers4::markdown::heading_slug;
```

Cargo feature `markdown` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features markdown
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["markdown"] }
```

## Signature

```rust
pub fn heading_slug(heading: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `heading` | `&str` | The text of the heading, without the leading `#`s. |

## Returns

`String` — The anchor, without the leading `#`.

## Examples

```rust
use helpers4::markdown::heading_slug;

assert_eq!(heading_slug("Hello, World!"), "hello-world");
assert_eq!(heading_slug("  Getting started (v2)  "), "getting-started-v2");
assert_eq!(heading_slug("snake_case & kebab-case"), "snake_case--kebab-case");
```

## Source

[src/markdown/heading_slug.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/markdown/heading_slug.rs#L32)
