---
title: "code_block"
description: "A fenced code block for code, tagged with language."
sidebar:
  label: "code_block"
---

A fenced code block for `code`, tagged with `language`.

The fence is at least three backticks and one longer than the longest run of backticks in the
code, so code that itself contains a fence stays inside the block. The result ends with a
newline and the code keeps its own line breaks (a single trailing newline is not doubled).
Whitespace and backticks are removed from `language`, which must be a single word (`rust`,
`sh`, `json`, or empty for none).

## Import

```rust
use helpers4::markdown::code_block;
```

Cargo feature `markdown` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features markdown
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["markdown"] }
```

## Signature

```rust
pub fn code_block(code: &str, language: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `code` | `&str` | The code to show. |
| `language` | `&str` | The language tag for syntax highlighting, or `""`. |

## Returns

`String` — The fenced block, ending with a newline.

## Examples

```rust
use helpers4::markdown::code_block;

assert_eq!(code_block("let x = 1;", "rust"), "```rust\nlet x = 1;\n```\n");
assert_eq!(code_block("```\nnested\n```", ""), "````\n```\nnested\n```\n````\n");
```

## Source

[src/markdown/code_block.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/markdown/code_block.rs#L31)
