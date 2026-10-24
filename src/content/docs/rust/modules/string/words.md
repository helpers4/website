---
title: "words"
description: "Splits s into its words, keeping their original casing."
sidebar:
  label: "words"
---

Splits `s` into its words, keeping their original casing.

A word ends at any non-alphanumeric character, before an uppercase letter that follows a
lowercase letter or a digit (`userName`, `v2Beta`), and before the last capital of an
acronym run (`HTMLParser` gives `HTML`, `Parser`). Use one of the `*_case` helpers instead if
you want the words lowercased and rejoined.

## Import

```rust
use helpers4::string::words;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn words(s: &str) -> Vec<&str>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `s` | `&str` | The text to split. |

## Returns

`Vec<&str>` — The words, in order, with no separators or empty entries.

## Examples

```rust
use helpers4::string::words;

assert_eq!(words("hello world"), vec!["hello", "world"]);
assert_eq!(words("camelCaseString"), vec!["camel", "Case", "String"]);
assert_eq!(words("SCREAMING_SNAKE"), vec!["SCREAMING", "SNAKE"]);
assert_eq!(words("foo123bar"), vec!["foo123bar"]);
assert!(words("   ").is_empty());
```

## Source

[src/string/words.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/string/words.rs#L34)
