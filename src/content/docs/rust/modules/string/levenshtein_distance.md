---
title: "levenshtein_distance"
description: "The Levenshtein edit distance between a and b: the fewest single-character insertions, deletions or substitutions needed to turn one into the other."
sidebar:
  label: "levenshtein_distance"
---

The Levenshtein edit distance between `a` and `b`: the fewest single-character insertions,
deletions or substitutions needed to turn one into the other.

Operates on `char`s (Unicode scalar values), not bytes or grapheme clusters.

## Import

```rust
use helpers4::string::levenshtein_distance;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.10", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn levenshtein_distance(a: &str, b: &str, case_sensitive: bool) -> usize
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&str` | The first string. |
| `b` | `&str` | The second string. |
| `case_sensitive` | `bool` | Whether the comparison is case-sensitive. |

## Returns

`usize` — The edit distance; `0` when `a` and `b` are equal (after case-folding when `case_sensitive`
is `false`).

## Examples

```rust
use helpers4::string::levenshtein_distance;

assert_eq!(levenshtein_distance("kitten", "sitting", true), 3);
assert_eq!(levenshtein_distance("Kitten", "kitten", false), 0);
```

## Source

[src/string/levenshtein_distance.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/string/levenshtein_distance.rs#L30)
