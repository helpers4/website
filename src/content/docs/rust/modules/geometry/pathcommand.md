---
title: "PathCommand"
description: "One command of SVG path data: its letter (uppercase is absolute, lowercase relative to the current point) and its numbers, as written in the d attribute."
sidebar:
  label: "PathCommand"
---

One command of SVG path data: its letter (uppercase is absolute, lowercase relative to the
current point) and its numbers, as written in the `d` attribute.

| Letter | Command | Numbers |
| --- | --- | --- |
| `M` `L` `T` | move, line, smooth quadratic | `x y` |
| `H` `V` | horizontal, vertical line | `x` or `y` |
| `C` | cubic Bézier | `x1 y1 x2 y2 x y` |
| `S` `Q` | smooth cubic, quadratic | `x2 y2 x y` or `x1 y1 x y` |
| `A` | elliptical arc | `rx ry rotation large-arc sweep x y` |
| `Z` | close the subpath | none |

## Import

```rust
use helpers4::geometry::PathCommand;
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

## Definition

```rust
pub struct PathCommand { /* private fields */ }
```

## Examples

```rust
use helpers4::geometry::PathCommand;

let line = PathCommand::new('L', vec![10.0, 5.0]);
assert_eq!(line.letter, 'L');
assert_eq!(line.values, [10.0, 5.0]);
```

## Source

[src/geometry/path_command.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/path_command.rs#L27)
