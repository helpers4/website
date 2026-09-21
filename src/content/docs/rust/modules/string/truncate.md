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

## More in this module

- [`camel_case`](../camel_case/) — Converts `s` to `camelCase`.
- [`capitalize`](../capitalize/) — Uppercases the first character of `s` and leaves the rest untouched.
- [`dedent`](../dedent/) — Strips the indentation shared by every non-blank line of `s`, and drops one leading and one trailing blank line.
- [`escape_html`](../escape_html/) — Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`.
- [`kebab_case`](../kebab_case/) — Converts `s` to `kebab-case`.
- [`pascal_case`](../pascal_case/) — Converts `s` to `PascalCase`.
- [`slugify`](../slugify/) — Converts `s` into a lowercase, hyphen-separated slug safe for URLs.
- [`snake_case`](../snake_case/) — Converts `s` to `snake_case`.

## Source

[src/string/truncate.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/string/truncate.rs#L21)
