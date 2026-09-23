---
title: "Style"
description: "A text style: colors and attributes, applied to a string with paint."
sidebar:
  label: "Style"
---

A text style: colors and attributes, applied to a string with [`paint`](#paint).

Built by chaining: `Style::new().bold().fg(Color::Red)`. Painting wraps the text in the escape
sequence for the style and a reset (`ESC [ 0 m`); a style with nothing set returns the text
unchanged. This only builds the strings: whether to emit colors at all (a terminal, `NO_COLOR`)
is for the caller to decide.

## Import

```rust
use helpers4::ansi::Style;
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

## Definition

```rust
pub struct Style { /* private fields */ }
```

## Examples

```rust
use helpers4::ansi::{strip, Color, Style};

let error = Style::new().bold().fg(Color::Red);
assert_eq!(error.paint("failed"), "\u{1b}[1;31mfailed\u{1b}[0m");
assert_eq!(strip(&error.paint("failed")), "failed");
```

## Methods

### `new`

```rust
pub fn new() -> Self
```

An empty style: painting with it changes nothing.

**Returns**

`Self` — A style with no color and no attribute.

### `fg`

```rust
pub fn fg(mut self, color: Color) -> Self
```

Sets the text color.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `sel` | `mut self` |  |
| `color` | `Color` | The foreground color. |

**Returns**

`Self` — The style with that text color.

### `bg`

```rust
pub fn bg(mut self, color: Color) -> Self
```

Sets the background color.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `sel` | `mut self` |  |
| `color` | `Color` | The background color. |

**Returns**

`Self` — The style with that background.

### `bold`

```rust
pub fn bold(mut self) -> Self
```

Makes the text bold.

**Parameters**

| Parameter | Type |
| --- | --- |
| `sel` | `mut self` |

**Returns**

`Self` — The style with bold on.

### `dim`

```rust
pub fn dim(mut self) -> Self
```

Makes the text dim (faint).

**Parameters**

| Parameter | Type |
| --- | --- |
| `sel` | `mut self` |

**Returns**

`Self` — The style with dim on.

### `italic`

```rust
pub fn italic(mut self) -> Self
```

Makes the text italic.

**Parameters**

| Parameter | Type |
| --- | --- |
| `sel` | `mut self` |

**Returns**

`Self` — The style with italic on.

### `underline`

```rust
pub fn underline(mut self) -> Self
```

Underlines the text.

**Parameters**

| Parameter | Type |
| --- | --- |
| `sel` | `mut self` |

**Returns**

`Self` — The style with underline on.

### `strikethrough`

```rust
pub fn strikethrough(mut self) -> Self
```

Strikes the text through.

**Parameters**

| Parameter | Type |
| --- | --- |
| `sel` | `mut self` |

**Returns**

`Self` — The style with strikethrough on.

### `is_plain`

```rust
pub fn is_plain(&self) -> bool
```

Whether the style does nothing.

**Returns**

`bool` — `true` for a style with no color and no attribute.

### `paint`

```rust
pub fn paint(&self, text: &str) -> String
```

Applies the style to `text`.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The text to style. |

**Returns**

`String` — The text between the style's escape sequence and a reset, or the text unchanged for a plain
style.

## Source

[src/ansi/style.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ansi/style.rs#L24)
