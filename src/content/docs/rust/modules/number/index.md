---
title: "number"
description: "Numeric helpers that the standard library does not provide."
sidebar:
  label: "≡ Overview"
  order: 0
---

Numeric helpers that the standard library does not provide.

Floating-point helpers never panic: an input with no meaningful answer (an empty slice, a
zero total, a `NaN`) gives `None`, and `NaN` or infinite values propagate as usual for `f64`.

## Install

Cargo feature `number` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features number
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["number"] }
```

Import path: `helpers4::number`.

## Items

| Item | What it does |
| --- | --- |
| [`gcd`](/rust/modules/number/gcd/) | Greatest common divisor of `a` and `b`; `gcd(0, 0)` is `0`. |
| [`lcm`](/rust/modules/number/lcm/) | Least common multiple of `a` and `b`, or `None` when it does not fit in a `u64`. |
| [`lerp`](/rust/modules/number/lerp/) | Linear interpolation between `from` and `to`: `from` at `t = 0`, `to` at `t = 1`. |
| [`mean`](/rust/modules/number/mean/) | Arithmetic mean of `values`, or `None` when it is empty. |
| [`median`](/rust/modules/number/median/) | Median of `values`, or `None` when it is empty or contains a `NaN`. |
| [`percentage`](/rust/modules/number/percentage/) | What percent `part` is of `total`, or `None` when `total` is zero. |
| [`round_to`](/rust/modules/number/round_to/) | Rounds `value` to `decimals` decimal places, half away from zero. |
