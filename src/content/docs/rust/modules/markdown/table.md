---
title: "table"
description: "A GitHub-flavored Markdown table."
sidebar:
  label: "table"
---

A GitHub-flavored Markdown table.

`headers` gives the columns; each row is padded with empty cells or cut to that many. Cells
are cleaned so they cannot break the table: `|` becomes `\|` and line breaks become spaces.
Columns are padded to a common width (at least 3, for the `---` separator) so the source
lines up, measured in characters. The result has one line per row and ends with a newline;
no headers give an empty string. Cell text is not otherwise escaped: use
[`escape`](/rust/modules/markdown/escape/) on text you do not control.

## Import

```rust
use helpers4::markdown::table;
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
pub fn table<H: AsRef<str>, C: AsRef<str>>(headers: &[H], rows: &[Vec<C>]) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `headers` | `&[H]` | The column titles. |
| `rows` | `&[Vec<C>]` | The rows, each a list of cells. |

## Returns

`String` — The table.

## Examples

```rust
use helpers4::markdown::table;

let out = table(&["Name", "Stars"], &[vec!["typescript", "1"], vec!["rust", "0"]]);
assert_eq!(
    out,
    "| Name       | Stars |\n| ---------- | ----- |\n| typescript | 1     |\n| rust       | 0     |\n"
);
```

## Source

[src/markdown/table.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/markdown/table.rs#L35)
