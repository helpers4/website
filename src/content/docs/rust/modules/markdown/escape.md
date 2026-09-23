---
title: "escape"
description: "Escapes text so that Markdown shows it literally instead of interpreting it."
sidebar:
  label: "escape"
---

Escapes `text` so that Markdown shows it literally instead of interpreting it.

A backslash is put before every character that can start emphasis, code, a link, a tag, a table
cell or a strikethrough (`` \ ` * _ [ ] < > | ~ & ``), and before the characters that only
matter at the start of a line: `#`, `+`, `-`, `=`, and the `.` or `)` of `1.` / `1)` list
markers. Escaping more than strictly needed is harmless (the Markdown spec accepts a backslash before
any ASCII punctuation) and keeps this predictable. Use it for text you do not control that you
put into a Markdown document, such as a user name or an error message.

## Import

```rust
use helpers4::markdown::escape;
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
pub fn escape(text: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to escape, on one or several lines. |

## Returns

`String` — The escaped text.

## Examples

```rust
use helpers4::markdown::escape;

assert_eq!(escape("*not bold* and [not a link](x)"), "\\*not bold\\* and \\[not a link\\](x)");
assert_eq!(escape("# not a heading"), "\\# not a heading");
assert_eq!(escape("1. not a list"), "1\\. not a list");
```

## Source

[src/markdown/escape.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/markdown/escape.rs#L32)
