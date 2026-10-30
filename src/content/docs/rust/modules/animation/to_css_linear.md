---
title: "to_css_linear"
description: "Samples an easing function into a CSS linear() easing, so that any curve (a Spring, a custom bounce) can be played by CSS transitions and the Web Animations API, which do not take code."
sidebar:
  label: "to_css_linear"
---

Samples an easing function into a CSS `linear()` easing, so that any curve (a
[`Spring`](/rust/modules/animation/spring/), a custom bounce) can be played by CSS transitions and the Web
Animations API, which do not take code.

Values are rounded to 4 decimals. More samples follow the curve more closely, in a longer
string; 32 is smooth for most springs.

## Import

```rust
use helpers4::animation::to_css_linear;
```

Cargo feature `animation` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features animation
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["animation"] }
```

## Signature

```rust
pub fn to_css_linear(easing: &dyn Fn(f64) -> f64, samples: u32) -> Option<String>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `easing` | `&dyn Fn(f64) -> f64` | The easing function over `0.0..=1.0`. |
| `samples` | `u32` | Number of points, evenly spaced in time, at least `2`. |

## Returns

`Option<String>` — A `linear(...)` string, or `None` when `samples` is less than `2`.

## Examples

```rust
use helpers4::animation::{to_css_linear, Spring};

assert_eq!(
    to_css_linear(&|t| t * t, 5).as_deref(),
    Some("linear(0, 0.0625, 0.25, 0.5625, 1)")
);

let spring = Spring::default();
let css = to_css_linear(&|t| spring.easing(t), 32);
assert!(css.is_some_and(|css| css.starts_with("linear(0, ")));
```

## Source

[src/animation/to_css_linear.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/animation/to_css_linear.rs#L38)
