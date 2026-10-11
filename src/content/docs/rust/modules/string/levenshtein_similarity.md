---
title: "levenshtein_similarity"
description: "Normalized levenshtein_distance between a and b, in [0, 1]."
sidebar:
  label: "levenshtein_similarity"
---

Normalized [`levenshtein_distance`](/rust/modules/string/levenshtein_distance/) between `a` and `b`, in `[0, 1]`.

`1` means identical, `0` means completely dissimilar relative to the longer string's length.
A convenience wrapper for scoring or ranking use cases.

## Import

```rust
use helpers4::string::levenshtein_similarity;
```

Cargo feature `string` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features string
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.7", default-features = false, features = ["string"] }
```

## Signature

```rust
pub fn levenshtein_similarity(a: &str, b: &str, case_sensitive: bool) -> f64
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&str` | The first string. |
| `b` | `&str` | The second string. |
| `case_sensitive` | `bool` | Whether the comparison is case-sensitive. |

## Returns

`f64` — A similarity score between `0` and `1`; `1` when both strings are empty.

## Examples

```rust
use helpers4::string::levenshtein_similarity;

assert_eq!(levenshtein_similarity("same", "same", true), 1.0);
assert!((levenshtein_similarity("kitten", "sitting", true) - 0.571_428_6).abs() < 1e-6);
```

## Source

[src/string/levenshtein_similarity.rs](https://github.com/helpers4/rust/blob/v0.0.7/src/string/levenshtein_similarity.rs#L31)
