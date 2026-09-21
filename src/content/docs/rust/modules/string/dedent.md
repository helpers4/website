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

## Source

[src/string/dedent.rs](https://github.com/helpers4/rust/blob/v0.0.2/src/string/dedent.rs#L21)
