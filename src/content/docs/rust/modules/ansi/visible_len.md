---
title: "visible_len"
description: "The number of characters a terminal shows for text: its length once escape sequences are removed."
sidebar:
  label: "visible_len"
---

The number of characters a terminal shows for `text`: its length once escape sequences are
removed.

Use it to pad or truncate styled text to a column width. It counts `char`s, not display cells,
so wide characters (CJK, some emoji) count as one and combining marks count too; use a
width-aware crate when you need exact terminal columns.

## Import

```rust
use helpers4::ansi::visible_len;
```

Cargo feature `ansi` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features ansi
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["ansi"] }
```

## Signature

```rust
pub fn visible_len(text: &str) -> usize
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text, possibly containing escape sequences. |

## Returns

`usize` — The number of visible characters.

## Examples

```rust
use helpers4::ansi::visible_len;

assert_eq!(visible_len("\u{1b}[1;31merror\u{1b}[0m"), 5);
assert_eq!(visible_len("plain"), 5);
```

## Source

[src/ansi/visible_len.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ansi/visible_len.rs#L29)
