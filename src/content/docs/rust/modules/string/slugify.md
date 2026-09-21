---
title: "slugify"
description: "Converts s into a lowercase, hyphen-separated slug safe for URLs."
sidebar:
  label: "slugify"
---

Converts `s` into a lowercase, hyphen-separated slug safe for URLs.

Letters and digits (Unicode included) are kept and lowercased, apostrophes are dropped, and
every other run of characters becomes a single hyphen; leading and trailing hyphens are
never produced. Diacritics are **not** stripped: `"café"` stays `"café"`.

## Import

```rust
use helpers4::string::slugify;
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
pub fn slugify(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::slugify;

assert_eq!(slugify("Hello World!"), "hello-world");
assert_eq!(slugify("  It's  a --- test "), "its-a-test");
assert_eq!(slugify("!!!"), "");
```

## More in this module

- [`camel_case`](../camel_case/) — Converts `s` to `camelCase`.
- [`capitalize`](../capitalize/) — Uppercases the first character of `s` and leaves the rest untouched.
- [`dedent`](../dedent/) — Strips the indentation shared by every non-blank line of `s`, and drops one leading and one trailing blank line.
- [`escape_html`](../escape_html/) — Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`.
- [`kebab_case`](../kebab_case/) — Converts `s` to `kebab-case`.
- [`pascal_case`](../pascal_case/) — Converts `s` to `PascalCase`.
- [`snake_case`](../snake_case/) — Converts `s` to `snake_case`.
- [`truncate`](../truncate/) — Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut.

## Source

[src/string/slugify.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/string/slugify.rs#L21)
