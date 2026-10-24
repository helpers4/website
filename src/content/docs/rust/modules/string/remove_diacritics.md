---
title: "remove_diacritics"
description: "Removes diacritical marks (accents) from s, e.g."
sidebar:
  label: "remove_diacritics"
---

Removes diacritical marks (accents) from `s`, e.g. `"café"` → `"cafe"`.

Works by Unicode-decomposing each character into its base letter plus combining marks
(`'é'` → `'e'` followed by a combining acute accent), then dropping the marks. Needs the
`string-diacritics` feature (not `string` alone, and not in `default`): full Unicode
normalization needs a real decomposition table, unlike the rest of this module, which is
dependency-free.

## Import

```rust
use helpers4::string::remove_diacritics;
```

Cargo feature `string-diacritics` (opt-in): it enables `string` and adds the `unicode-normalization` dependency. On top of the default features:

```sh
cargo add helpers4 --features string-diacritics
```

or with only this module:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["string-diacritics"] }
```

## Signature

```rust
pub fn remove_diacritics(s: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `s` | `&str` | The text to strip diacritics from. |

## Returns

`String` — `s` with diacritics removed; unchanged if it has none.

## Examples

```rust
use helpers4::string::remove_diacritics;

assert_eq!(remove_diacritics("café"), "cafe");
assert_eq!(remove_diacritics("naïve"), "naive");
assert_eq!(remove_diacritics("ÉCOLE"), "ECOLE");
assert_eq!(remove_diacritics("hello"), "hello");
```

## Source

[src/string/remove_diacritics.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/string/remove_diacritics.rs#L35)
