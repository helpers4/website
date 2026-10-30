---
title: "format_path"
description: "Writes path commands back as SVG path data: letters glued to their first number, single spaces elsewhere, numbers rounded to precision decimals with the trailing zeros dropped (-0 is written 0)."
sidebar:
  label: "format_path"
---

Writes path commands back as SVG path data: letters glued to their first number, single
spaces elsewhere, numbers rounded to `precision` decimals with the trailing zeros dropped
(`-0` is written `0`).

## Import

```rust
use helpers4::geometry::format_path;
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
pub fn format_path(commands: &[PathCommand], precision: usize) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `commands` | `&[PathCommand]` | The commands, as `parse_path` returns them. |
| `precision` | `usize` | Decimals kept per number; `6` is a good default. |

## Returns

`String` — The path data.

## Examples

```rust
use helpers4::geometry::{format_path, PathCommand};

let d = format_path(
    &[
        PathCommand::new('M', vec![0.0, 0.5]),
        PathCommand::new('L', vec![10.0, 1.0 / 3.0]),
    ],
    6,
);
assert_eq!(d, "M0 0.5 L10 0.333333");
```

## Source

[src/geometry/format_path.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/geometry/format_path.rs#L46)
