---
title: "random"
description: "Randomness without a hidden global generator."
sidebar:
  label: "≡ Overview"
  order: 0
---

Randomness without a hidden global generator.

[`Rng`](/rust/modules/random/rng/) is a small seedable generator for work that must be reproducible and testable:
[`shuffle`](/rust/modules/random/shuffle/), [`sample`](/rust/modules/random/sample/) and [`choose`](/rust/modules/random/choose/) take it as an argument, so the same seed always gives
the same result. It is **not** for secrets: a 64-bit seed can be guessed.

Keys, tokens and anything an attacker must not predict come from the operating system, with
the `random-entropy` feature (not in `default`, it pulls the `getrandom` crate):
[`random_bytes`](/rust/modules/random/random_bytes/), [`random_hex`](/rust/modules/random/random_hex/), [`random_alphanumeric`](/rust/modules/random/random_alphanumeric/) and [`Rng::from_entropy`](/rust/modules/random/rng/). They
return an [`EntropyError`](/rust/modules/random/random_alphanumeric/#error-type-entropyerror) when the system cannot provide bytes, and never fall back to
weaker randomness. They are not built for `wasm32-unknown-unknown`, which has no default
entropy source: pass bytes from the host (`crypto.getRandomValues`) to the pure constructors
of the `id` module instead.

## Install

Cargo feature `random` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features random
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["random"] }
```

Opt-in sub-feature `random-entropy` (adds the `getrandom` dependency): .

Import path: `helpers4::random`.

## Items

| Item | What it does |
| --- | --- |
| [`choose`](/rust/modules/random/choose/) | Picks one element at random, each with the same probability. |
| [`random_alphanumeric`](/rust/modules/random/random_alphanumeric/) | A random string of letters and digits (`A-Za-z0-9`) from the operating system's random source, with every character equally likely. |
| [`random_bytes`](/rust/modules/random/random_bytes/) | Random bytes from the operating system, suitable for keys, tokens and salts. |
| [`random_hex`](/rust/modules/random/random_hex/) | Random bytes from the operating system, written as lowercase hexadecimal: the usual form of a master key or a session token (`random_hex(32)` is a 256-bit key in 64 characters). |
| [`Rng`](/rust/modules/random/rng/) | A small, fast, seedable pseudo-random generator (SplitMix64): the same seed always gives the same sequence, on every platform. |
| [`sample`](/rust/modules/random/sample/) | Picks `count` different elements at random (without replacement), in random order. |
| [`shuffle`](/rust/modules/random/shuffle/) | Returns the elements in a random order (Fisher–Yates: every permutation is equally likely), leaving `items` as it is. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`EntropyError`](/rust/modules/random/random_alphanumeric/#error-type-entropyerror) | [`random_alphanumeric`](/rust/modules/random/random_alphanumeric/), [`random_bytes`](/rust/modules/random/random_bytes/), [`random_hex`](/rust/modules/random/random_hex/), [`Rng`](/rust/modules/random/rng/) |
