---
title: "function"
description: "Helpers around functions: composition, memoization, retrying and rate limiting."
sidebar:
  label: "≡ Overview"
  order: 0
---

Helpers around functions: composition, memoization, retrying and rate limiting.

Nothing here sleeps or reads a clock. `retry` and `backoff` leave the waiting to the caller, and
`TokenBucket` takes the current time as an argument, so all of it is deterministic to test.

## Install

Cargo feature `function` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features function
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["function"] }
```

Import path: `helpers4::function`.

## Items

| Item | What it does |
| --- | --- |
| [`backoff`](/rust/modules/function/backoff/) | The delay before retry number `attempt`, doubling each time up to `max`: exponential backoff. |
| [`compose`](/rust/modules/function/compose/) | Combines two functions into one that applies `inner` first and `outer` to its result: `compose(outer, inner)(x)` is `outer(inner(x))`, like the mathematical `outer ∘ inner`. |
| [`Memoize`](/rust/modules/function/memoize/) | A function whose results are remembered: calling it again with the same argument returns the stored result instead of computing it again. |
| [`pipe`](/rust/modules/function/pipe/) | Combines two functions into one that applies `first` and then `second` to its result: `pipe(first, second)(x)` is `second(first(x))`. |
| [`retry`](/rust/modules/function/retry/) | Runs `operation` until it succeeds, at most `attempts` times, and returns the first success or the last error. |
| [`TokenBucket`](/rust/modules/function/tokenbucket/) | A token-bucket rate limiter with the clock passed in. |
