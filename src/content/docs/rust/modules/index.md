---
title: "Modules"
description: "The 29 modules of the helpers4 Rust crate."
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

The `helpers4` crate is organised in 29 modules. **Each module is a Cargo feature of the same name**, and all of them are enabled by default (`cargo add helpers4`).

A helper that needs a dependency the rest of its module does without sits behind an opt-in sub-feature named `<module>-<what>` (listed after its module below), so the default features stay dependency-free.

## Install only what you use

Turn the default features off and name the modules you want:

```sh
cargo add helpers4 --no-default-features --features string,hex
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.8", default-features = false, features = ["string", "hex"] }
```

## Modules

| Module | Cargo feature | What it covers | Items |
| --- | --- | --- | --- |
| [`ansi`](/rust/modules/ansi/) | `ansi` | ANSI escape sequences: remove them from captured output and build styled text. | 5 |
| [`array`](/rust/modules/array/) | `array` | Helpers for slices and `Vec`s that the standard library does not provide. | 13 |
| [`bytes`](/rust/modules/bytes/) | `bytes` | Helpers for byte slices and sizes that the standard library does not provide. | 13 |
| [`cache`](/rust/modules/cache/) | `cache` | Caches and stores: entries that expire with a passed-in clock (`ExpiringMap`), and a capacity-bounded map that evicts by recency instead (`LruCache`). | 3 |
| [`ci`](/rust/modules/ci/) | `ci` | Detecting CI environments and reporting pipeline status. | 7 |
| [`color`](/rust/modules/color/) | `color` | Colors without a dependency: parsing, hex, HSL, blending and WCAG contrast. | 6 |
| [`commit`](/rust/modules/commit/) | `commit` | Conventional Commits: parse a message, decide the version bump, validate. | 6 |
| [`date`](/rust/modules/date/) | `date` | Calendar dates without time zones: validation, ISO 8601 text, weekdays and day arithmetic. | 5 |
| [`duration`](/rust/modules/duration/) | `duration` | Parsing and formatting of durations as short human-readable strings (`1h30m`). | 3 |
| [`env`](/rust/modules/env/) | `env` | Dotenv (`.env`) helpers working on plain text: no file or process-environment access, so they are deterministic and easy to test. | 9 |
| [`fs`](/rust/modules/fs/) | `fs` | File-system helpers: safe writes, missing-file-as-`None`, listing and path checks. | 5 |
| [`function`](/rust/modules/function/) | `function` | Helpers around functions: composition, memoization, retrying and rate limiting. | 6 |
| [`future`](/rust/modules/future/) | `future` | Runtime-neutral helpers for `Future`s, built on the standard library only. | 5 |
| [`geometry`](/rust/modules/geometry/) | `geometry` | 2D geometry in `f64`: `Point`, `Rect` and the affine `Matrix`, in the layout of CSS and SVG `matrix(a b c d e f)`. | 3 |
| [`hex`](/rust/modules/hex/) | `hex` | Byte/text encodings with typed errors: hexadecimal, and base64/base32 (RFC 4648). | 12 |
| [`http`](/rust/modules/http/) | `http` | HTTP header value helpers on plain text: no dependency on an HTTP crate. | 1 |
| [`iter`](/rust/modules/iter/) | `iter` | Helpers for any `Iterator`, not only slices: work on a lazy, single-use or unbounded source. | 3 |
| [`license`](/rust/modules/license/) | `license` | SPDX license identifiers and expressions: look a license up, parse `MIT OR Apache-2.0`, check it against a policy, write a source header. | 7 |
| [`map`](/rust/modules/map/) | `map` | Helpers for `HashMap` that the standard library does not provide. | 3 |
| [`markdown`](/rust/modules/markdown/) | `markdown` | Helpers for writing Markdown safely: escaping, links, code, quotes, tables and heading anchors. | 7 |
| [`net`](/rust/modules/net/) | `net` | Network helpers on `std::net` and plain text: no I/O, no resolution. | 3 |
| [`number`](/rust/modules/number/) | `number` | Numeric helpers that the standard library does not provide. | 7 |
| [`secret`](/rust/modules/secret/) | `secret` | Keeping secrets out of logs: a wrapper that never prints its value, redaction, masking and credential detection. | 8 |
| [`set`](/rust/modules/set/) | `set` | Helpers for `HashSet` that the standard library does not provide. | 7 |
| [`string`](/rust/modules/string/) | `string`, `string-diacritics` | String manipulation and formatting helpers. | 21 |
| [`time`](/rust/modules/time/) | `time` | Time helpers. | 3 |
| [`url`](/rust/modules/url/) | `url` | URLs without a dependency: percent-encoding, query strings, a parser and reference resolution. | 8 |
| [`validate`](/rust/modules/validate/) | `validate` | Shape checks for common user-facing formats: pragmatic subsets that catch real mistakes, not full grammars. | 3 |
| [`version`](/rust/modules/version/) | `version` | Semantic Versioning 2.0.0: parsing, precedence, bumps and Cargo-style requirements. | 5 |

Import through the module path (`helpers4::string::capitalize`): names can repeat across modules on purpose, so never glob-import a module.

Documented version: **0.0.8**. Minimum supported Rust version: **1.85**.
