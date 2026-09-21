---
title: "Modules"
description: "The 8 modules of the helpers4 Rust crate."
sidebar:
  order: 0
  label: "📋 Overview"
---

The `helpers4` crate is organised in 8 modules. **Each module is a Cargo feature of the same name**, and all of them are enabled by default (`cargo add helpers4`).

## Install only what you use

Turn the default features off and name the modules you want:

```sh
cargo add helpers4 --no-default-features --features string,hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.2", default-features = false, features = ["string", "hex"] }
```

## Modules

| Module | Cargo feature | What it covers | Items |
| --- | --- | --- | --- |
| [`array`](./array/) | `array` | Helpers for slices and `Vec`s that the standard library does not provide. | 10 |
| [`cache`](./cache/) | `cache` | Caches and stores whose entries expire. | 2 |
| [`env`](./env/) | `env` | Dotenv (`.env`) helpers working on plain text: no file or process-environment access, so they are deterministic and easy to test. | 5 |
| [`hex`](./hex/) | `hex` | Hexadecimal encoding and decoding with typed errors. | 6 |
| [`http`](./http/) | `http` | HTTP header value helpers on plain text: no dependency on an HTTP crate. | 1 |
| [`net`](./net/) | `net` | Network helpers on `std::net` and plain text: no I/O, no resolution. | 3 |
| [`string`](./string/) | `string` | String manipulation and formatting helpers. | 9 |
| [`time`](./time/) | `time` | Time helpers. | 3 |

Import through the module path (`helpers4::string::capitalize`): names can repeat across modules on purpose, so never glob-import a module.

Documented version: **0.0.2**. Minimum supported Rust version: **1.85**.
