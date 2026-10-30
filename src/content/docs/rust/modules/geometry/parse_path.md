---
title: "parse_path"
description: "Parses SVG path data (the d attribute) into commands, as written: the letters keep their case (absolute or relative), H/V/S/T/A stay what they are, and a command repeated without its letter (L 1 2 3 4) becomes one command per set of numbers (M repeats as L, m as l)."
sidebar:
  label: "parse_path"
---

Parses SVG path data (the `d` attribute) into commands, as written: the letters keep their
case (absolute or relative), `H`/`V`/`S`/`T`/`A` stay what they are, and a command repeated
without its letter (`L 1 2 3 4`) becomes one command per set of numbers (`M` repeats as `L`,
`m` as `l`).

It follows the SVG grammar: numbers may be glued (`1-2`, `.5.5`, `1e-3`), separators are
optional, and the two arc flags may be written without any separator (`a1 1 0 011 1`).

## Import

```rust
use helpers4::geometry::parse_path;
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
pub fn parse_path(d: &str) -> Result<Vec<PathCommand>, ParsePathError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `d` | `&str` | The path data. |

## Returns

`Result<Vec<PathCommand>, ParsePathError>` — The commands, in order. Empty for an empty or blank string.

## Errors

A [`ParsePathError`](#error-type-parsepatherror) if the data does not start with a move, has an unknown letter, or misses
numbers or flags.

## Examples

```rust
use helpers4::geometry::{parse_path, PathCommand};

let commands = parse_path("M0 0h10v10z")?;
assert_eq!(commands[0], PathCommand::new('M', vec![0.0, 0.0]));
assert_eq!(commands[1], PathCommand::new('h', vec![10.0]));
assert_eq!(commands.len(), 4);
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

[src/geometry/parse_path.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/parse_path.rs#L97)
