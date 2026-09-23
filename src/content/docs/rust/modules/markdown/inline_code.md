---
title: "inline_code"
description: "Wraps text in a Markdown code span, using enough backticks for the text to show literally."
sidebar:
  label: "inline_code"
---

Wraps `text` in a Markdown code span, using enough backticks for the text to show literally.

The fence is one backtick longer than the longest run of backticks inside, so text with a
single backtick gets a two-backtick fence, text with two gets three, and so on. When the text
starts or ends with a backtick, or starts *and* ends with a space, one space of padding is
added on each side (Markdown strips exactly that) so nothing is lost. Line breaks are not
handled: Markdown turns them into spaces.

## Import

```rust
use helpers4::markdown::inline_code;
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
pub fn inline_code(text: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to show as code. |

## Returns

`String` — The code span, such as `` `cargo test` ``.

## Examples

```rust
use helpers4::markdown::inline_code;

assert_eq!(inline_code("cargo test"), "`cargo test`");
assert_eq!(inline_code("a`b"), "``a`b``");
assert_eq!(inline_code("`tick`"), "`` `tick` ``");
```

## Source

[src/markdown/inline_code.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/markdown/inline_code.rs#L31)
