---
title: "is_uuid"
description: "Checks whether s is a UUID in its canonical 8-4-4-4-12 hyphenated hexadecimal form."
sidebar:
  label: "is_uuid"
---

Checks whether `s` is a UUID in its canonical `8-4-4-4-12` hyphenated hexadecimal form.

Case-insensitive. The variant and version digits are not checked, so this accepts any RFC
9562 UUID (v1 through v8) as well as the all-zero nil UUID; it only checks the shape.

## Import

```rust
use helpers4::validate::is_uuid;
```

Cargo feature `validate` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features validate
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["validate"] }
```

## Signature

```rust
pub fn is_uuid(s: &str) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `s` | `&str` | The text to check. |

## Returns

`bool` — `true` when `s` has the shape of a UUID.

## Examples

```rust
use helpers4::validate::is_uuid;

assert!(is_uuid("550e8400-e29b-41d4-a716-446655440000"));
assert!(is_uuid("550E8400-E29B-41D4-A716-446655440000"));
assert!(!is_uuid("550e8400-e29b-41d4-a716-44665544000")); // one digit short
assert!(!is_uuid("not-a-uuid"));
```

## Source

[src/validate/is_uuid.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/validate/is_uuid.rs#L29)
