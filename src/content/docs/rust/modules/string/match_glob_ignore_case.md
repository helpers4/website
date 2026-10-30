---
title: "match_glob_ignore_case"
description: "Like match_glob, ignoring case: both sides are compared in Unicode lower case."
sidebar:
  label: "match_glob_ignore_case"
---

Like [`match_glob`](/rust/modules/string/match_glob/), ignoring case: both sides are compared in Unicode lower case. A character
that lower-cases to several (`İ`) counts as several for `?`.

## Import

```rust
use helpers4::string::match_glob_ignore_case;
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
pub fn match_glob_ignore_case(pattern: &str, text: &str) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `pattern` | `&str` | The glob pattern. |
| `text` | `&str` | The string to test. |

## Returns

`bool` — `true` if `text` matches `pattern` in full.

## Examples

```rust
use helpers4::string::match_glob_ignore_case;

assert!(match_glob_ignore_case("screen *", "Screen 2"));
assert!(match_glob_ignore_case("É*", "école"));
assert!(!match_glob_ignore_case("screen *", "Home"));
```

## Source

[src/string/match_glob_ignore_case.rs](https://github.com/helpers4/rust/blob/v0.0.10/src/string/match_glob_ignore_case.rs#L29)
