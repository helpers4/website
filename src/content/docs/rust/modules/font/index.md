---
title: "font"
description: "Fonts without a dependency: CSS font matching, the names design tools give to weights and styles, and reading a font file's names, weight and style."
sidebar:
  label: "≡ Overview"
  order: 0
---

Fonts without a dependency: CSS font matching, the names design tools give to weights and
styles, and reading a font file's names, weight and style.

[`pick_closest`](/rust/modules/font/pick_closest/) is CSS Fonts Level 4 matching (§5.2) among the faces of one family, with
variable faces that cover a weight range. [`weight_of_style`](/rust/modules/font/weight_of_style/), [`is_italic`](/rust/modules/font/is_italic/),
[`split_postscript`](/rust/modules/font/split_postscript/) and [`same_family`](/rust/modules/font/same_family/) read the names fonts and design files carry
(`"Semi Bold Italic"`, `"NeutrifPro-SemiBold"`). [`read_font`](/rust/modules/font/read_font/) reads a TrueType, OpenType or
WOFF file: family (typographic first), PostScript name, weight or `wght` range, style.

## Install

Cargo feature `font` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features font
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["font"] }
```

Import path: `helpers4::font`.

## Items

| Item | What it does |
| --- | --- |
| [`FontFace`](/rust/modules/font/fontface/) | A face of a font family, with the properties CSS font matching compares. |
| [`FontInfo`](/rust/modules/font/fontinfo/) | What a font file says about itself, as `read_font` reads it. |
| [`FontRequest`](/rust/modules/font/fontrequest/) | What a text asks of a family: the properties `pick_closest` matches. |
| [`FontStyle`](/rust/modules/font/fontstyle/) | The `font-style` of a face or a request. |
| [`is_italic`](/rust/modules/font/is_italic/) | Whether a style name is italic or oblique, as design tools and font files write it (`"Italic"`, `"Semi Bold Italic"`, `"Light Oblique"`). |
| [`pick_closest`](/rust/modules/font/pick_closest/) | Picks the face that CSS would use for a request, among the faces of one family: the CSS Fonts Level 4 matching algorithm (§5.2), as a pure function. |
| [`read_font`](/rust/modules/font/read_font/) | Reads what a font file says about itself: its family (typographic first), style, PostScript name, weight or `wght` range and whether it is italic. |
| [`same_family`](/rust/modules/font/same_family/) | Whether two family names are the same family: compared without spaces or case, since design files and font files write `"SF Pro"`, `"SFPro"` and `"sf pro"` for one family. |
| [`split_postscript`](/rust/modules/font/split_postscript/) | Splits a PostScript font name into family and style at its first hyphen: `NeutrifPro-SemiBold` is `NeutrifPro` and `SemiBold`. |
| [`weight_of_style`](/rust/modules/font/weight_of_style/) | The CSS weight a style name stands for, as design tools and font files write it: `Thin` 100, `ExtraLight` 200, `Light` 300, `Regular` 400, `Medium` 500, `SemiBold` 600, `Bold` 700, `ExtraBold` 800, `Black` 900, `ExtraBlack` 950. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`FontError`](/rust/modules/font/read_font/#error-type-fonterror) | [`read_font`](/rust/modules/font/read_font/) |
