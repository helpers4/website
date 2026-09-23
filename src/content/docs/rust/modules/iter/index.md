---
title: "iter"
description: "Helpers for any Iterator, not only slices: work on a lazy, single-use or unbounded source."
sidebar:
  label: "≡ Overview"
  order: 0
---

Helpers for any `Iterator`, not only slices: work on a lazy, single-use or unbounded source.

## Install

Cargo feature `iter` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features iter
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["iter"] }
```

Import path: `helpers4::iter`.

## Items

| Item | What it does |
| --- | --- |
| [`chunk`](/rust/modules/iter/chunk/) | Splits `iter` into consecutive chunks of `size` items, the last one possibly shorter. |
| [`first_duplicate`](/rust/modules/iter/first_duplicate/) | Returns the first item of `iter` that has already appeared earlier in it, or `None` when every item is unique. |
| [`min_max`](/rust/modules/iter/min_max/) | Returns the smallest and largest item of `iter` in one pass, or `None` when it is empty. |
