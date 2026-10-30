---
title: "animation"
description: "Animation timing without a framework: Easing curves (the CSS keywords, cubic-bezier(), steps() and linear(), read from a CSS string or built directly), physical Springs with their settling time, and to_css_linear to turn any curve into a CSS linear()."
sidebar:
  label: "≡ Overview"
  order: 0
---

Animation timing without a framework: [`Easing`](/rust/modules/animation/easing/) curves (the CSS keywords, `cubic-bezier()`,
`steps()` and `linear()`, read from a CSS string or built directly), physical [`Spring`](/rust/modules/animation/spring/)s with
their settling time, and [`to_css_linear`](/rust/modules/animation/to_css_linear/) to turn any curve into a CSS `linear()`.

The same model as the TypeScript package's `animation` category, for code that computes
animation values itself (a renderer, a native player, a tool that exports animations).

## Install

Cargo feature `animation` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features animation
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["animation"] }
```

Import path: `helpers4::animation`.

## Items

| Item | What it does |
| --- | --- |
| [`Easing`](/rust/modules/animation/easing/) | A timing curve: how the progress of an animation follows the progress of time, from `0.0` to `1.0`. |
| [`Spring`](/rust/modules/animation/spring/) | A damped spring going from `0.0` to `1.0`: the curve behind "spring" transitions of design tools, with the time it takes to settle. |
| [`StepPosition`](/rust/modules/animation/stepposition/) | Where the jumps of a `steps()` easing happen, as in CSS. |
| [`to_css_linear`](/rust/modules/animation/to_css_linear/) | Samples an easing function into a CSS `linear()` easing, so that any curve (a `Spring`, a custom bounce) can be played by CSS transitions and the Web Animations API, which do not take code. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`ParseEasingError`](/rust/modules/animation/easing/#error-type-parseeasingerror) | [`Easing`](/rust/modules/animation/easing/) |
