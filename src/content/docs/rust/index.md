---
title: Helpers 4 Rust
sidebar:
  label: Rust
  order: 0
---

General-purpose Rust helpers: **one crate, one module per category**, each behind its own Cargo feature.

## Quick Links

- **[Browse modules](./modules/)** — every helper, with its signature, documentation and examples
- **[Getting started](./getting-started/)** — install and first use
- **[crates.io](https://crates.io/crates/helpers4)** · **[docs.rs](https://docs.rs/helpers4)** · **[GitHub](https://github.com/helpers4/rust)** · **[License (LGPL-3.0)](./legal/license)**

## Installation

```sh
cargo add helpers4
```

Every module is enabled by default. To compile only what you use:

```sh
cargo add helpers4 --no-default-features --features string,hex
```

## Principles

- **Zero third-party dependencies by default.** A module that needs one gets its own Cargo feature.
- **Names can repeat across modules** (`array::compact` and `map::compact` are different functions), so you always import through the module path: `helpers4::string::capitalize`.
- **Tested hard.** 100% line, function and region coverage, unit and property-based tests, doctests for every example, mutation testing, and benchmarks where speed matters.
- **No `unsafe`, no panics on bad input.** Fallible helpers return typed errors.
- **Ready for AI assistants.** The whole reference is available as a single file, [`llms-full.txt`](/rust/llms-full.txt).

The crate is pre-1.0: the API can still change between `0.0.x` releases, and each change is listed in the [changelog](./reference/changelog/).
