---
title: "match_glob"
description: "Whether text matches a simple glob pattern in full: * matches any sequence of characters (including none), ? exactly one character, everything else is literal."
sidebar:
  label: "match_glob"
---

Whether `text` matches a simple glob pattern in full: `*` matches any sequence of characters
(including none), `?` exactly one character, everything else is literal.

It is not a shell glob: no `[...]` classes, `{a,b}` alternatives, escapes or path-aware `**`,
just the two wildcards. Characters are Unicode scalar values (`char`), so `?` matches a whole
`é` or emoji. Matching is case-sensitive; lowercase both sides to ignore case. Runs in
`O(pattern × text)` at worst, without recursion or a regex engine.

## Import

```rust
use helpers4::string::match_glob;
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
pub fn match_glob(pattern: &str, text: &str) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `pattern` | `&str` | The glob pattern. |
| `text` | `&str` | The string to test. |

## Returns

`bool` — `true` if `text` matches `pattern`.

## Examples

```rust
use helpers4::string::match_glob;

assert!(match_glob("*.fig", "design.fig"));
assert!(match_glob("frame-?", "frame-é"));
assert!(!match_glob("frame-?", "frame-12"));
assert!(match_glob("screen *", &"Screen 2".to_lowercase())); // ignore case
```

## Source

[src/string/match_glob.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/string/match_glob.rs#L33)
