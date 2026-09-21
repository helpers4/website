---
title: "truncate"
description: "Shortens s to at most max_chars characters, ending with suffix when it was cut."
sidebar:
  label: "truncate"
---

Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut.

The suffix counts toward the limit. Lengths are in Unicode scalar values (`char`s), not
grapheme clusters. If the suffix alone does not fit, the first `max_chars` characters of the
suffix are returned.

## Import

```rust
use helpers4::string::truncate;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.2", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn truncate(s: &str, max_chars: usize, suffix: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |
| `max_chars` | `usize` |
| `suffix` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::truncate;

assert_eq!(truncate("Hello, world", 8, "..."), "Hello...");
assert_eq!(truncate("short", 8, "..."), "short");
assert_eq!(truncate("Hello", 2, "..."), "..");
```

## Source

[src/string/truncate.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/string/truncate.rs#L21)
