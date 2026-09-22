---
title: "is_valid_email"
description: "Checks a pragmatic subset of RFC 5322 that catches real typos, not a full grammar."
sidebar:
  label: "is_valid_email"
---

Checks a pragmatic subset of RFC 5322 that catches real typos, not a full grammar.

Requires exactly one `@`, a non-empty local part of ASCII letters, digits and `. _ % + -`
with no leading, trailing or doubled dot, and a domain of at least two dot-separated labels
(ASCII letters, digits and hyphens, none starting or ending with a hyphen) whose last label
is letters only. Quoted local parts, comments and internationalized domain names are not
supported: this is meant to reject obvious mistakes, not to be the final word on deliverability.

## Import

```rust
use helpers4::validate::is_valid_email;
```

Cargo feature `validate` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features validate
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["validate"] }
```

## Signature

```rust
pub fn is_valid_email(s: &str) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `s` | `&str` | The address to check. |

## Returns

`bool` — `true` when `s` passes the checks above.

## Examples

```rust
use helpers4::validate::is_valid_email;

assert!(is_valid_email("jane.doe+list@example.co.uk"));
assert!(!is_valid_email("no-at-sign"));
assert!(!is_valid_email("@example.com"));
assert!(!is_valid_email("jane@localhost"));
```

## Source

[src/validate/is_valid_email.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/validate/is_valid_email.rs#L32)
