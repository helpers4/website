---
title: "escape_html"
description: "Escapes the HTML special characters &, <, >, \" and '."
sidebar:
  label: "escape_html"
---

Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`.

Returns the input borrowed, without allocating, when there is nothing to escape. Use it to
embed untrusted text in HTML text nodes or quoted attribute values.

## Import

```rust
use helpers4::string::escape_html;
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
pub fn escape_html(s: &str) -> Cow<'_, str>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`Cow<'_, str>`

## Examples

```rust
use helpers4::string::escape_html;

assert_eq!(
    escape_html("<script>alert(\"xss\")</script>"),
    "&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;"
);
assert_eq!(escape_html("It's a <test> & more"), "It&#39;s a &lt;test&gt; &amp; more");
assert_eq!(escape_html("plain"), "plain");
```

## More in this module

- [`camel_case`](../camel_case/) — Converts `s` to `camelCase`.
- [`capitalize`](../capitalize/) — Uppercases the first character of `s` and leaves the rest untouched.
- [`dedent`](../dedent/) — Strips the indentation shared by every non-blank line of `s`, and drops one leading and one trailing blank line.
- [`kebab_case`](../kebab_case/) — Converts `s` to `kebab-case`.
- [`pascal_case`](../pascal_case/) — Converts `s` to `PascalCase`.
- [`slugify`](../slugify/) — Converts `s` into a lowercase, hyphen-separated slug safe for URLs.
- [`snake_case`](../snake_case/) — Converts `s` to `snake_case`.
- [`truncate`](../truncate/) — Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut.

## Source

[src/string/escape_html.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/string/escape_html.rs#L25)
