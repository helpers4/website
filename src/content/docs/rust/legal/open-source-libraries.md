---
title: "Open-source libraries"
sidebar:
  label: "Open-source libraries"
---

## Runtime dependencies

The `helpers4` crate has **no third-party runtime dependencies**: nothing but the Rust standard library ends up in your build. A module that needs one in the future gets its own Cargo feature, and the dependency is optional.

## Development dependencies

Used to test and benchmark the crate. They are **not** part of what you download when you depend on `helpers4`.

- [`criterion`](https://crates.io/crates/criterion) `0.7`
- [`proptest`](https://crates.io/crates/proptest) `1`
