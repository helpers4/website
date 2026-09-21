---
title: "dedent"
description: "Strips the indentation shared by every non-blank line of s, and drops one leading and one trailing blank line."
sidebar:
  label: "dedent"
---

Strips the indentation shared by every non-blank line of `s`, and drops one leading and one
trailing blank line.

Lets a multi-line string literal be indented with the surrounding code without that
indentation leaking into the value. Indentation is counted in whitespace characters, and
lines are split on `'\n'` only (a `'\r'` stays on its line).

## Import

```rust
use helpers4::string::dedent;
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
pub fn dedent(s: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::dedent;

assert_eq!(dedent("\n    Hello\n      World\n"), "Hello\n  World");
assert_eq!(dedent("  a\n  b"), "a\nb");
```

## More in this module

- [`camel_case`](../camel_case/) — Converts `s` to `camelCase`.
- [`capitalize`](../capitalize/) — Uppercases the first character of `s` and leaves the rest untouched.
- [`escape_html`](../escape_html/) — Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`.
- [`kebab_case`](../kebab_case/) — Converts `s` to `kebab-case`.
- [`pascal_case`](../pascal_case/) — Converts `s` to `PascalCase`.
- [`slugify`](../slugify/) — Converts `s` into a lowercase, hyphen-separated slug safe for URLs.
- [`snake_case`](../snake_case/) — Converts `s` to `snake_case`.
- [`truncate`](../truncate/) — Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut.

## Source

[src/string/dedent.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/string/dedent.rs#L21)
