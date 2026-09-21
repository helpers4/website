---
title: "Modules"
description: "The 8 modules of the helpers4 Rust crate."
sidebar:
  order: 0
  label: "Overview"
---

The `helpers4` crate has 8 modules, each behind a Cargo feature of the same name. All of them are enabled by default; take only what you use with:

```toml
[dependencies]
helpers4 = { version = "0", default-features = false, features = ["string", "hex"] }
```

| Module | What it covers | Items |
| --- | --- | --- |
| [`array`](./array/) | Helpers for slices and Vecs that the standard library does not provide. | 10 |
| [`cache`](./cache/) | Caches and stores whose entries expire. | 2 |
| [`env`](./env/) | Dotenv (.env) helpers working on plain text: no file or process-environment access, so they are deterministic and easy to test. | 5 |
| [`hex`](./hex/) | Hexadecimal encoding and decoding with typed errors. | 6 |
| [`http`](./http/) | HTTP header value helpers on plain text: no dependency on an HTTP crate. | 1 |
| [`net`](./net/) | Network helpers on std::net and plain text: no I/O, no resolution. | 3 |
| [`string`](./string/) | String manipulation and formatting helpers. | 9 |
| [`time`](./time/) | Time helpers. | 3 |

Import through the module path (`helpers4::string::capitalize`): names repeat across modules on purpose, so never glob-import a module.

Documented version: **0.0.2**. Minimum supported Rust version: **1.85**.
