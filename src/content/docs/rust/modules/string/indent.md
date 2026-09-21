---
title: "indent"
description: "Prefixes every non-blank line of s with prefix."
sidebar:
  label: "indent"
---

Prefixes every non-blank line of `s` with `prefix`.

Blank lines (empty or whitespace only) are left untouched, so no trailing whitespace is
introduced. Lines are split on `'\n'` only, and a trailing newline is preserved. It is the
inverse of [`dedent`](/rust/modules/string/dedent/) for text indented with a fixed prefix.

## Import

```rust
use helpers4::string::indent;
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
pub fn indent(s: &str, prefix: &str) -> String
```

## Parameters

| Parameter | Type |
| --- | --- |
| `s` | `&str` |
| `prefix` | `&str` |

## Returns

`String`

## Examples

```rust
use helpers4::string::indent;

assert_eq!(indent("a\n\nb", "  "), "  a\n\n  b");
assert_eq!(indent("line\n", "> "), "> line\n");
```

## Source

[src/string/indent.rs](https://github.com/helpers4/rust/blob/v0.0.4/src/string/indent.rs#L20)
