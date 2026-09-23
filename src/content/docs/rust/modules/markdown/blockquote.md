---
title: "blockquote"
description: "Turns text into a Markdown blockquote by prefixing every line with > ."
sidebar:
  label: "blockquote"
---

Turns `text` into a Markdown blockquote by prefixing every line with `> `.

Empty lines get a bare `>` (no trailing space), so the quote stays one block. Line breaks are
kept as they are, including a trailing one, and a quote inside a quote nests naturally
(`> > text`).

## Import

```rust
use helpers4::markdown::blockquote;
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
pub fn blockquote(text: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to quote, on one or several lines. |

## Returns

`String` — The quoted text.

## Examples

```rust
use helpers4::markdown::blockquote;

assert_eq!(blockquote("first\n\nsecond"), "> first\n>\n> second");
```

## Source

[src/markdown/blockquote.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/markdown/blockquote.rs#L27)
