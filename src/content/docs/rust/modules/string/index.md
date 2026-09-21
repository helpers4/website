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
helpers4 = { version = "0.0.2", default-features = false, features = ["string"] }
```

Import path: `helpers4::string`.

## Items

| Item | What it does |
| --- | --- |
| [`camel_case`](/rust/modules/string/camel_case/) | Converts `s` to `camelCase`. |
| [`capitalize`](/rust/modules/string/capitalize/) | Uppercases the first character of `s` and leaves the rest untouched. |
| [`dedent`](/rust/modules/string/dedent/) | Strips the indentation shared by every non-blank line of `s`, and drops one leading and one trailing blank line. |
| [`escape_html`](/rust/modules/string/escape_html/) | Escapes the HTML special characters `&`, `<`, `>`, `"` and `'`. |
| [`kebab_case`](/rust/modules/string/kebab_case/) | Converts `s` to `kebab-case`. |
| [`pascal_case`](/rust/modules/string/pascal_case/) | Converts `s` to `PascalCase`. |
| [`slugify`](/rust/modules/string/slugify/) | Converts `s` into a lowercase, hyphen-separated slug safe for URLs. |
| [`snake_case`](/rust/modules/string/snake_case/) | Converts `s` to `snake_case`. |
| [`truncate`](/rust/modules/string/truncate/) | Shortens `s` to at most `max_chars` characters, ending with `suffix` when it was cut. |
