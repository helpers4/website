---
title: "string"
description: "String manipulation and formatting helpers."
sidebar:
  label: "≡ Overview"
  order: 0
---

String manipulation and formatting helpers.

## Install

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["string"] }
```

Import path: `helpers4::string`.

## Items

| Item | What it does |
| --- | --- |
| [`camel_case`](/rust/modules/string/camel_case/) | Converts `s` to `camelCase`. |
| [`capitalize`](/rust/modules/string/capitalize/) | Uppercases the first character of `s` and leaves the rest untouched. |
| [`constant_case`](/rust/modules/string/constant_case/) | Converts `s` to `CONSTANT_CASE` (also known as `SCREAMING_SNAKE_CASE`). |
| [`dedent`](/rust/modules/string/dedent/) | Strips the indentation shared by every non-blank line of `s`, and drops one leading and one trailing blank line. |
| [`escape_html`](/rust/modules/string/escape_html/) | Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`. |
| [`indent`](/rust/modules/string/indent/) | Prefixes every non-blank line of `s` with `prefix`. |
| [`kebab_case`](/rust/modules/string/kebab_case/) | Converts `s` to `kebab-case`. |
| [`pascal_case`](/rust/modules/string/pascal_case/) | Converts `s` to `PascalCase`. |
| [`slugify`](/rust/modules/string/slugify/) | Converts `s` into a lowercase, hyphen-separated slug safe for URLs. |
| [`snake_case`](/rust/modules/string/snake_case/) | Converts `s` to `snake_case`. |
| [`squish`](/rust/modules/string/squish/) | Trims `s` and collapses every run of whitespace into a single space. |
| [`title_case`](/rust/modules/string/title_case/) | Capitalizes the first letter of every whitespace-separated word and lowercases the rest. |
| [`truncate`](/rust/modules/string/truncate/) | Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut. |
| [`unescape_html`](/rust/modules/string/unescape_html/) | Decodes the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&apos;`, `&#39;` and any numeric character reference (`&#65;`, `&#x41;`). |
