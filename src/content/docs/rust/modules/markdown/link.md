---
title: "link"
description: "A Markdown link [text](url), with the characters that would break it made safe."
sidebar:
  label: "link"
---

A Markdown link `[text](url)`, with the characters that would break it made safe.

In `text`, backslashes and square brackets are escaped. In `url`, spaces, parentheses, angle
brackets and line breaks are percent-encoded (`%20`, `%28`, `%29`, `%3C`, `%3E`, `%0A`), so a
URL such as `https://example.com/a (b)` cannot end the link early. Nothing else in the URL is
touched, and no link title is written.

## Import

```rust
use helpers4::markdown::link;
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
pub fn link(text: &str, url: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The visible text of the link. |
| `url` | `&str` | The destination. |

## Returns

`String` — The link, for instance `[docs](https://helpers4.dev/rust/)`.

## Examples

```rust
use helpers4::markdown::link;

assert_eq!(link("docs", "https://helpers4.dev/rust/"), "[docs](https://helpers4.dev/rust/)");
assert_eq!(link("[1]", "https://x.org/a (b)"), "[\\[1\\]](https://x.org/a%20%28b%29)");
```

## Source

[src/markdown/link.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/markdown/link.rs#L30)
