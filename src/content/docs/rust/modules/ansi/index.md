---
title: "ansi"
description: "ANSI escape sequences: remove them from captured output and build styled text."
sidebar:
  label: "≡ Overview"
  order: 0
---

ANSI escape sequences: remove them from captured output and build styled text.

`strip`, `contains` and `visible_len` deal with text that already has escape sequences (command
output, logs); [`Style`](/rust/modules/ansi/style/) and [`Color`](/rust/modules/ansi/color/) build the sequences for colors and attributes. Nothing here
decides whether a terminal supports colors: that stays with the caller.

## Install

Cargo feature `ansi` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features ansi
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["ansi"] }
```

Import path: `helpers4::ansi`.

## Items

| Item | What it does |
| --- | --- |
| [`Color`](/rust/modules/ansi/color/) | A terminal color for `Style`. |
| [`contains`](/rust/modules/ansi/contains/) | Whether `text` contains an ANSI escape character (`ESC`, U+001B). |
| [`strip`](/rust/modules/ansi/strip/) | Removes the ANSI escape sequences from `text`, leaving what a terminal would display. |
| [`Style`](/rust/modules/ansi/style/) | A text style: colors and attributes, applied to a string with `paint`. |
| [`visible_len`](/rust/modules/ansi/visible_len/) | The number of characters a terminal shows for `text`: its length once escape sequences are removed. |
