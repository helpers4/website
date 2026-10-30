---
title: "pick_closest"
description: "Picks the face that CSS would use for a request, among the faces of one family: the CSS Fonts Level 4 matching algorithm (§5.2), as a pure function."
sidebar:
  label: "pick_closest"
---

Picks the face that CSS would use for a request, among the faces of one family: the CSS Fonts
Level 4 matching algorithm (§5.2), as a pure function. The stretch is matched first, then the
style, then the weight; each step keeps only the faces closest to what was asked.

- Stretch: at or below 100, narrower faces first (nearest), then wider ones; above 100, the
  other way round.
- Style: normal prefers normal, then oblique, then italic; italic prefers italic, then
  oblique, then normal; oblique prefers oblique, then italic, then normal.
- Weight: a variable face whose range covers the weight is an exact match. Otherwise, from 400
  to 500, the nearest heavier weight up to 500, then lighter ones, then heavier ones above
  500; below 400, lighter first then heavier; above 500, heavier first then lighter. A
  variable face counts for the bound of its range closest to the weight.

## Import

```rust
use helpers4::font::pick_closest;
```

Cargo feature `font` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features font
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["font"] }
```

## Signature

```rust
pub fn pick_closest(faces: &[FontFace], wanted: FontRequest) -> Option<usize>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `faces` | `&[FontFace]` | The faces of one family. |
| `wanted` | `FontRequest` | What was asked. |

## Returns

`Option<usize>` — The index of the closest face, the first one when several are equally close, or `None` for no
face.

## Examples

```rust
use helpers4::font::{pick_closest, FontFace, FontRequest, FontStyle};

let faces = [
    FontFace::new(300.0, FontStyle::Normal),
    FontFace::new(400.0, FontStyle::Normal),
    FontFace::new(700.0, FontStyle::Normal),
];
assert_eq!(pick_closest(&faces, FontRequest::new(600.0, FontStyle::Normal)), Some(2));

let variable = [FontFace::variable(100.0, 900.0, FontStyle::Normal), FontFace::new(600.0, FontStyle::Normal)];
assert_eq!(pick_closest(&variable, FontRequest::new(450.0, FontStyle::Normal)), Some(0));
```

## Source

[src/font/pick_closest.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/font/pick_closest.rs#L120)
