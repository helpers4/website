---
title: "contains"
description: "Whether text contains an ANSI escape character (ESC, U+001B)."
sidebar:
  label: "contains"
---

Whether `text` contains an ANSI escape character (`ESC`, U+001B).

A cheap check for output that is styled, for instance to decide whether to strip it with
[`strip`](/rust/modules/ansi/strip/) before writing it to a file.

## Import

```rust
use helpers4::ansi::contains;
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
pub fn contains(text: &str) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to check. |

## Returns

`bool` — `true` when the text has an escape character.

## Examples

```rust
use helpers4::ansi::contains;

assert!(contains("\u{1b}[32mok\u{1b}[0m"));
assert!(!contains("ok"));
```

## Source

[src/ansi/contains.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ansi/contains.rs#L27)
