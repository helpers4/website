---
title: Helpers4 Rust
sidebar:
  label: Rust
  order: 0
---

General-purpose Rust helpers — one crate, one module per category, zero third-party dependencies by default, exhaustively tested.

:::caution[Version 0: expect changes]
While the crate is at version `0.x`:

- **The split into modules, and so into Cargo features, may change.** A helper can move to another module — and so to another feature to enable — from one release to the next.
- **The code and security verification will keep improving.** More checks (fuzzing and static analysis, for instance) are planned, and each helper's page says what it guarantees and what it does not.

Pin the exact version and read the [changelog](/rust/reference/changelog/) before upgrading.
:::

## Quick Links

- **[Get Started](/rust/getting-started/)** — install the crate, or just the modules you need
- **[Browse Modules](/rust/modules/)** — every helper, with its signature, parameters, errors and examples
- **[AI & LLM Support](/rust/reference/ai-support/)** — `llms.txt` and the full machine-readable reference
- **[crates.io](https://crates.io/crates/helpers4)** · **[docs.rs](https://docs.rs/helpers4)** · **[GitHub](https://github.com/helpers4/rust)** · **[License (LGPL-3.0)](/rust/legal/license/)**

## What is helpers4?

A collection of small, well-tested helpers to stop rewriting the same utility code across every project: text, slices, hexadecimal, `.env` files, expiring caches, network address checks, HTTP header values, the system clock. Helpers that the standard library already covers are simply not provided (`chunks`, `partition`, `zip`, …).

It grew out of code that kept being copied between real projects, then reviewed and hardened until it was worth publishing. See the [philosophy](/rust/reference/philosophy/) for the reasoning.

- ✅ **One crate, one Cargo feature per module** — compile only what you use
- ✅ **Zero third-party dependencies by default** — nothing but `std` in your build
- ✅ **No `unsafe`** — and `unwrap`, `expect` and `panic!` are denied outside tests; fallible helpers return typed errors you can match on
- ✅ **Battle-tested** — 100% line, function and region coverage; unit, property-based and doc tests; mutation testing; benchmarks
- ✅ **Explicit inputs** — the clock and the process environment are parameters, never read behind your back
- ✅ **Names may repeat across modules** — always imported through the module path, see [Names and imports](/rust/reference/naming-conflicts/)
- ✅ **AI-ready** — the whole reference is one file, and every example in the module pages is a doctest that runs in CI

## Installation

```sh
cargo add helpers4
```

Every module is enabled by default. To compile only what you use, list the modules (each one is a Cargo feature of the same name):

```sh
cargo add helpers4 --no-default-features --features string,hex
```

Details, and the list of modules, in [Getting Started](/rust/getting-started/) and [Modules](/rust/modules/).

## A taste

```rust
use helpers4::net::is_valid_hostname;
use helpers4::string::slugify;

assert_eq!(slugify("Hello, World!"), "hello-world");
assert!(is_valid_hostname("example.com").is_ok());
```

## Status

The crate is pre-1.0: the API can still change between `0.0.x` releases, and every change is listed in the [changelog](/rust/reference/changelog/).

## Contributing

Found a bug or want to suggest a helper? [Open an issue](https://github.com/helpers4/rust/issues) on the Rust repository, and read [Contributing](/rust/reference/contributing/) before sending code.

Want to improve this documentation? Use the **Edit page** link at the bottom of any page, or [open an issue](https://github.com/helpers4/website/issues) on the website repository. The module pages are generated from the crate's own documentation, so a fix to a helper's description belongs in its source.
