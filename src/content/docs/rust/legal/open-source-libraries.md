---
title: "Open-source libraries"
sidebar:
  label: "Open-source libraries"
---

## Runtime dependencies

None with the default features: nothing but the Rust standard library ends up in your build. An opt-in feature can add one:

- [`unicode-normalization`](https://crates.io/crates/unicode-normalization) `0.1.3` — optional, only with the `string-diacritics` feature

## Development dependencies

Used to test and benchmark the crate. They are **not** part of what you download when you depend on `helpers4`.

- [`criterion`](https://crates.io/crates/criterion) `0.7`
- [`proptest`](https://crates.io/crates/proptest) `1`
