---
title: "GlobSet"
description: "A list of glob patterns with exclusions: a string matches when one pattern matches and no exclusion does, like the lines of a .gitignore read the other way round."
sidebar:
  label: "GlobSet"
---

A list of glob patterns with exclusions: a string matches when one pattern matches and no
exclusion does, like the lines of a `.gitignore` read the other way round.

Patterns use the `*` and `?` of [`match_glob`](/rust/modules/string/match_glob/), which is case-sensitive. A pattern starting
with `!` is an exclusion; write `\!` for a pattern that really starts with `!`. The order does
not matter. With no pattern besides exclusions, everything else matches, and an empty set
matches everything (no filter).

Regular expressions need a dependency this crate does not have; use the `regex` crate for
those, or the TypeScript package's `createMatcher`.

## Import

```rust
use helpers4::string::GlobSet;
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

## Definition

```rust
pub struct GlobSet { /* private fields */ }
```

## Examples

```rust
use helpers4::string::GlobSet;

let screens = GlobSet::new(&["Screen *", "Home", "!* (old)"]);
assert!(screens.is_match("Screen 2"));
assert!(screens.is_match("Home"));
assert!(!screens.is_match("Screen 2 (old)")); // excluded
assert!(!screens.is_match("Settings")); // no pattern matches
```

## Methods

### `new`

```rust
pub fn new(patterns: &[&str]) -> Self
```

Builds a set from patterns, `!` marking the exclusions.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `patterns` | `&[&str]` | The patterns, with `!` before an exclusion and `\!` for a literal `!`. |

**Returns**

`Self` — The set.

**Examples**

```rust
use helpers4::string::GlobSet;

let set = GlobSet::new(&["*.fig", "!draft-*"]);
assert!(set.is_match("a.fig"));
assert!(!set.is_match("draft-a.fig"));
```

### `is_match`

```rust
pub fn is_match(&self, text: &str) -> bool
```

Whether `text` matches the set.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The string to test. |

**Returns**

`bool` — `true` if one pattern matches and no exclusion does (or, with no pattern besides
exclusions, if no exclusion does).

**Examples**

```rust
use helpers4::string::GlobSet;

assert!(GlobSet::new(&[]).is_match("anything"));
assert!(GlobSet::new(&["!*.tmp"]).is_match("a.fig"));
assert!(!GlobSet::new(&["!*.tmp"]).is_match("a.tmp"));
```

## Source

[src/string/glob_set.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/string/glob_set.rs#L30)
