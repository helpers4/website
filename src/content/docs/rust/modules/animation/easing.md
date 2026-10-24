---
title: "Easing"
description: "A timing curve: how the progress of an animation follows the progress of time, from 0.0 to 1.0."
sidebar:
  label: "Easing"
---

A timing curve: how the progress of an animation follows the progress of time, from `0.0` to
`1.0`. The same curves as CSS `animation-timing-function`.

Build one directly ([`linear`](#linear), [`cubic_bezier`](#cubic_bezier),
[`steps`](#steps)) or read it from a CSS string, e.g. the easing a design tool exported
([`parse`](#parse): keywords, `cubic-bezier()`, `steps()` and `linear()`), then evaluate
it with [`at`](#at).

## Import

```rust
use helpers4::animation::Easing;
```

Cargo feature `animation` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features animation
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["animation"] }
```

## Definition

```rust
pub struct Easing { /* private fields */ }
```

## Examples

```rust
use helpers4::animation::Easing;

let ease_out = Easing::parse("ease-out")?;
assert!((ease_out.at(0.5) - 0.6846).abs() < 1e-4);

let bouncy = Easing::parse("cubic-bezier(0.34, 1.56, 0.64, 1)")?;
assert!(bouncy.at(0.5) > 1.0); // overshoots before settling
```

## Methods

### `cubic_bezier`

```rust
pub fn cubic_bezier(x1: f64, y1: f64, x2: f64, y2: f64) -> Option<Self>
```

The curve of CSS `cubic-bezier(x1, y1, x2, y2)`. The `y` values may leave `0..=1` to
overshoot; the `x` values may not, as in CSS.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `x1` | `f64` | x of the first control point, `0.0..=1.0`. |
| `y1` | `f64` | y of the first control point. |
| `x2` | `f64` | x of the second control point, `0.0..=1.0`. |
| `y2` | `f64` | y of the second control point. |

**Returns**

`Option<Self>` — The easing, or `None` when an `x` is outside `0.0..=1.0` or a value is not finite.

**Examples**

```rust
use helpers4::animation::Easing;

let ease = Easing::cubic_bezier(0.25, 0.1, 0.25, 1.0);
assert!(ease.is_some_and(|e| (e.at(0.5) - 0.8024).abs() < 1e-4));
assert_eq!(Easing::cubic_bezier(1.5, 0.0, 1.0, 1.0), None);
```

### `steps`

```rust
pub fn steps(count: u32, position: StepPosition) -> Option<Self>
```

The curve of CSS `steps(count, position)`: the progress moves by jumps instead of
continuously, for frame-by-frame sprites, ticking counters or an "instant" transition.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `count` | `u32` | Number of steps, at least `1` (at least `2` with [`StepPosition::JumpNone`]). |
| `position` | `StepPosition` | Where the jumps happen. |

**Returns**

`Option<Self>` — The easing, or `None` for a `count` that is too small.

**Examples**

```rust
use helpers4::animation::{Easing, StepPosition};

let frames = Easing::steps(4, StepPosition::JumpEnd);
assert_eq!(frames.map(|e| e.at(0.6)), Some(0.5));
assert_eq!(Easing::steps(1, StepPosition::JumpNone), None);
```

### `parse`

```rust
pub fn parse(css: &str) -> Result<Self, ParseEasingError>
```

Reads a CSS easing: `linear`, `ease`, `ease-in`, `ease-out`, `ease-in-out`, `step-start`,
`step-end`, `cubic-bezier(x1, y1, x2, y2)`, `steps(count[, position])` or
`linear(0, 0.25 40%, 1)` (points with optional input positions, which CSS fills in).

Case and extra spaces are ignored.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `css` | `&str` | The CSS easing. |

**Returns**

`Result<Self, ParseEasingError>` — The easing.

**Errors**

Returns a [`ParseEasingError`](#error-type-parseeasingerror) for anything that is not a CSS easing, or a known function
with arguments CSS rejects.

**Examples**

```rust
use helpers4::animation::Easing;

assert_eq!(Easing::parse("linear(0, 0.9 50%, 1)")?.at(0.25), 0.45);
assert_eq!(Easing::parse("steps(4, jump-start)")?.at(0.3), 0.5);
assert!(Easing::parse("bounce").is_err());
```

### `at`

```rust
pub fn at(&self, t: f64) -> f64
```

The progress of the animation at a progress of time.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | `f64` | The progress of time. Clamped to `0.0..=1.0`; a `NaN` counts as `0.0`. |

**Returns**

`f64` — The progress of the animation: `0.0` at the start and `1.0` at the end, possibly outside
`0.0..=1.0` in between for curves that overshoot.

**Examples**

```rust
use helpers4::animation::Easing;

let ease = Easing::parse("ease-in-out")?;
assert_eq!(ease.at(0.0), 0.0);
assert!((ease.at(0.5) - 0.5).abs() < 1e-9);
assert_eq!(ease.at(2.0), 1.0);
```

## Error type: ParseEasingError

Why a string is not a CSS easing.

```rust
use helpers4::animation::ParseEasingError;

#[non_exhaustive]
pub enum ParseEasingError {
    /// Neither an easing keyword nor `cubic-bezier()`, `steps()` or `linear()`.
    UnknownFunction,
    /// A known function with arguments CSS does not accept (a wrong count, a number out of range,
    /// a malformed stop).
    InvalidArguments,
}
```

### Examples

```rust
use helpers4::animation::{Easing, ParseEasingError};

assert_eq!(Easing::parse("bounce"), Err(ParseEasingError::UnknownFunction));
assert_eq!(Easing::parse("steps(0)"), Err(ParseEasingError::InvalidArguments));
```

## Source

[src/animation/easing.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/animation/easing.rs#L30)
