---
title: "compare_natural"
description: "Compares two strings in natural order: runs of ASCII digits are compared by their numeric value, everything else character by character."
sidebar:
  label: "compare_natural"
---

Compares two strings in natural order: runs of ASCII digits are compared by their numeric
value, everything else character by character. So `"frame 2"` comes before `"frame 10"`,
where plain text order puts `"frame 10"` first.

Letters compare by code point, so case matters (`"B"` before `"a"`): lowercase both sides
first for a case-insensitive order. Numbers of any length are compared exactly, without
converting them to an integer, and two numbers of equal value but different zero padding
(`"a1"` and `"a01"`) are ordered by padding, fewest zeros first, so only identical strings
compare as equal.

## Import

```rust
use helpers4::string::compare_natural;
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
pub fn compare_natural(a: &str, b: &str) -> Ordering
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&str` | The first string. |
| `b` | `&str` | The second string. |

## Returns

`Ordering` — How `a` orders against `b`. Usable as a comparator: `names.sort_by(|a, b| compare_natural(a, b))`.

## Examples

```rust
use helpers4::string::compare_natural;

let mut frames = ["frame 10", "frame 2", "frame 1"];
frames.sort_by(|a, b| compare_natural(a, b));
assert_eq!(frames, ["frame 1", "frame 2", "frame 10"]);
```

## Source

[src/string/compare_natural.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/string/compare_natural.rs#L38)
