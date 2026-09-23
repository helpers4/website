---
title: "markdown"
description: "Helpers for writing Markdown safely: escaping, links, code, quotes, tables and heading anchors."
sidebar:
  label: "≡ Overview"
  order: 0
---

Helpers for writing Markdown safely: escaping, links, code, quotes, tables and heading anchors.

Everything here produces Markdown text; nothing parses it. The functions make untrusted text and
awkward characters (backticks, pipes, brackets, parentheses) come out literally.

## Install

Cargo feature `markdown` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features markdown
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["markdown"] }
```

Import path: `helpers4::markdown`.

## Items

| Item | What it does |
| --- | --- |
| [`blockquote`](/rust/modules/markdown/blockquote/) | Turns `text` into a Markdown blockquote by prefixing every line with `> `. |
| [`code_block`](/rust/modules/markdown/code_block/) | A fenced code block for `code`, tagged with `language`. |
| [`escape`](/rust/modules/markdown/escape/) | Escapes `text` so that Markdown shows it literally instead of interpreting it. |
| [`heading_slug`](/rust/modules/markdown/heading_slug/) | The anchor GitHub gives to a heading: `"Hello, World!"` becomes `"hello-world"`. |
| [`inline_code`](/rust/modules/markdown/inline_code/) | Wraps `text` in a Markdown code span, using enough backticks for the text to show literally. |
| [`link`](/rust/modules/markdown/link/) | A Markdown link `[text](url)`, with the characters that would break it made safe. |
| [`table`](/rust/modules/markdown/table/) | A GitHub-flavored Markdown table. |
