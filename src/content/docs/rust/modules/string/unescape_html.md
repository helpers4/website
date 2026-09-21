---
title: "unescape_html"
description: "Decodes the HTML entities &amp;, &lt;, &gt;, &quot;, &apos;, &#39; and any numeric character reference (&#65;, &#x41;)."
sidebar:
  label: "unescape_html"
---

Decodes the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&apos;`, `&#39;` and any numeric
character reference (`&#65;`, `&#x41;`).

It is the inverse of [`escape_html`](/rust/modules/string/escape_html/). The text is decoded in a single
pass, so `&amp;lt;` becomes `&lt;` and not `<`. Anything that is not a known entity, including
a numeric reference that is not a valid character, is left as it is. Returns the input
borrowed, without allocating, when it contains no `&`.

## Import

```rust
use helpers4::string::unescape_html;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn unescape_html(s: &str) -> Cow<'_, str>
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |

## Returns

`Cow<'_, str>`

## Examples

```rust
use helpers4::string::unescape_html;

assert_eq!(unescape_html("&lt;b&gt;Tom &amp; Jerry&lt;/b&gt;"), "<b>Tom & Jerry</b>");
assert_eq!(unescape_html("&#65;&#x42;"), "AB");
assert_eq!(unescape_html("&amp;lt;"), "&lt;");
assert_eq!(unescape_html("&unknown;"), "&unknown;");
```

## Source

[src/string/unescape_html.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/string/unescape_html.rs#L29)
