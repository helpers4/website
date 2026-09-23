---
title: "strip"
description: "Removes the ANSI escape sequences from text, leaving what a terminal would display."
sidebar:
  label: "strip"
---

Removes the ANSI escape sequences from `text`, leaving what a terminal would display.

Handles the colors and styles (`ESC [ ... m`) and every other CSI sequence (cursor moves, erase),
operating system commands such as window titles and hyperlinks (`ESC ] ... BEL` or
`ESC ] ... ESC \`), and the two-character escapes (`ESC c`, `ESC 7`, `ESC ( B`). A lone
escape character is dropped, and a sequence cut short at the end of the text is dropped with
it. Returns the input borrowed, without allocating, when it has no escape character.

## Import

```rust
use helpers4::ansi::strip;
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
pub fn strip(text: &str) -> Cow<'_, str>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text that may contain escape sequences, such as captured command output. |

## Returns

`Cow<'_, str>` — The text without escape sequences.

## Examples

```rust
use helpers4::ansi::strip;

assert_eq!(strip("\u{1b}[1;31merror\u{1b}[0m: it broke"), "error: it broke");
assert_eq!(strip("plain"), "plain");
```

## Source

[src/ansi/strip.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ansi/strip.rs#L32)
