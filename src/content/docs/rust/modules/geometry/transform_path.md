---
title: "transform_path"
description: "Transforms SVG path data by a matrix."
sidebar:
  label: "transform_path"
---

Transforms SVG path data by a matrix. The result is written with absolute `M`, `L`, `C`, `Q`
and `Z` only: relative commands are made absolute, `H`/`V`/`S`/`T` are expanded, and arcs
become cubic curves (so any matrix works, skews included). Moving a path is the common case.

## Import

```rust
use helpers4::geometry::transform_path;
```

Cargo feature `geometry` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features geometry
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["geometry"] }
```

## Signature

```rust
pub fn transform_path(d: &str, matrix: Matrix, precision: usize) -> Result<String, ParsePathError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `d` | `&str` | The path data. |
| `matrix` | `Matrix` | The matrix, in the CSS/SVG layout. |
| `precision` | `usize` | Decimals kept per number; `6` is a good default. |

## Returns

`Result<String, ParsePathError>` — The transformed path data.

## Errors

A [`ParsePathError`](#error-type-parsepatherror) if `d` is not valid path data.

## Examples

```rust
use helpers4::geometry::{transform_path, Matrix};

let moved = transform_path("M0 0 h10 v10 z", Matrix::translate(5.0, 5.0), 6)?;
assert_eq!(moved, "M5 5 L15 5 L15 15 Z");
```

## Error type: ParsePathError

Why SVG path data could not be parsed.

```rust
use helpers4::geometry::ParsePathError;

#[non_exhaustive]
pub enum ParsePathError {
    /// The data does not start with a move (`M` or `m`).
    MissingMove,
    /// A letter that is not a path command.
    UnknownCommand {
        /// Byte offset of the letter in the input.
        index: usize,
    },
    /// A command is missing a number, or the text is not a number.
    ExpectedNumber {
        /// Byte offset where a number was expected.
        index: usize,
    },
    /// An arc flag is not `0` or `1`.
    ExpectedFlag {
        /// Byte offset where a flag was expected.
        index: usize,
    },
}
```

## Source

[src/geometry/transform_path.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/transform_path.rs#L35)
