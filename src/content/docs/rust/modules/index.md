---
title: "Modules"
description: "The 8 modules of the helpers4 Rust crate."
sidebar:
  order: 0
  label: "≡ Overview"
---

:::caution[Version 0: expect changes]
While the crate is at version `0.x`:

- **The split into modules, and so into Cargo features, may change.** A helper can move to another module — and so to another feature to enable — from one release to the next.
- **The code and security verification will keep improving.** More checks (fuzzing and static analysis, for instance) are planned, and each helper's page says what it guarantees and what it does not.

Pin the exact version and read the [changelog](/rust/reference/changelog/) before upgrading.
:::

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
| [`array`](/rust/modules/array/) | `array` | Helpers for slices and `Vec`s that the standard library does not provide. | 10 |
| [`cache`](/rust/modules/cache/) | `cache` | Caches and stores whose entries expire. | 2 |
| [`env`](/rust/modules/env/) | `env` | Dotenv (`.env`) helpers working on plain text: no file or process-environment access, so they are deterministic and easy to test. | 5 |
| [`hex`](/rust/modules/hex/) | `hex` | Hexadecimal encoding and decoding with typed errors. | 6 |
| [`http`](/rust/modules/http/) | `http` | HTTP header value helpers on plain text: no dependency on an HTTP crate. | 1 |
| [`net`](/rust/modules/net/) | `net` | Network helpers on `std::net` and plain text: no I/O, no resolution. | 3 |
| [`string`](/rust/modules/string/) | `string` | String manipulation and formatting helpers. | 9 |
| [`time`](/rust/modules/time/) | `time` | Time helpers. | 3 |

Import through the module path (`helpers4::string::capitalize`): names can repeat across modules on purpose, so never glob-import a module.

Documented version: **0.0.2**. Minimum supported Rust version: **1.85**.
