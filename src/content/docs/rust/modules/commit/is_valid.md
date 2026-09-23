---
title: "is_valid"
description: "Whether message is a valid Conventional Commit."
sidebar:
  label: "is_valid"
---

Whether `message` is a valid Conventional Commit.

A shortcut for `Commit::parse(message).is_ok()`, for a commit-msg hook or a CI check that only
needs a yes or no; use [`Commit::parse`](/rust/modules/env/parse/) to learn what is wrong.

## Import

```rust
use helpers4::commit::is_valid;
```

Cargo feature `commit` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features commit
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["commit"] }
```

## Signature

```rust
pub fn is_valid(message: &str) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `message` | `&str` | The whole commit message. |

## Returns

`bool` — `true` when the message parses.

## Examples

```rust
use helpers4::commit::is_valid;

assert!(is_valid("fix(parser): handle empty input"));
assert!(!is_valid("fixed some stuff"));
```

## Source

[src/commit/is_valid.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/commit/is_valid.rs#L29)
