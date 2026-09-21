---
title: Getting Started
sidebar:
  order: 1
---

## Install

```sh
cargo add helpers4
```

That enables every module. To take only some of them, turn the default features off and name the ones you want (each module is a feature of the same name):

```sh
cargo add helpers4 --no-default-features --features string,hex
```

The [modules overview](./modules/) lists them all, and the minimum supported Rust version.

## First use

Import through the module path:

```rust
use helpers4::string::capitalize;

assert_eq!(capitalize("hello world"), "Hello world");
```

Names repeat across modules on purpose (the same idea is spelled the same way whatever it applies to), so avoid glob imports of a module: `use helpers4::string::*;` would make the next name collision your problem.

## Conventions

- **Borrowed in, owned out.** Helpers take `&str` and slices and return new values; nothing is mutated unless the documentation says so.
- **Typed errors.** A helper that can fail returns a `Result` with an error enum you can match on (`HostnameError`, `DecodeError`, ...), never a bare `bool` that hides why.
- **The clock and the environment are inputs.** Nothing reads the time or the process environment behind your back: `cache::ExpiringMap` takes `now` as an argument, and `env` works on the text of a `.env` file rather than on the process.

## For AI assistants

The full reference, with every signature and example, is one file: [`/rust/llms-full.txt`](/rust/llms-full.txt). Every example in it is a doctest that runs in the crate's CI.
