---
title: "is_ci"
description: "Whether the environment looks like a CI run."
sidebar:
  label: "is_ci"
---

Whether the environment looks like a CI run.

The same as `detect(get).is_some()`. The environment is a parameter: pass
`&|name| std::env::var(name).ok()` for the real one.

## Import

```rust
use helpers4::ci::is_ci;
```

Cargo feature `ci` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features ci
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["ci"] }
```

## Signature

```rust
pub fn is_ci(get: &dyn Fn(&str) -> Option<String>) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `get` | `&dyn Fn(&str) -> Option<String>` | Looks a variable up by name. |

## Returns

`bool` — `true` when a known CI service, or a truthy `CI` variable, is present.

## Examples

```rust
use helpers4::ci::is_ci;

assert!(is_ci(&|name: &str| (name == "CI").then(|| "true".to_string())));
assert!(!is_ci(&|_: &str| None));
```

## Source

[src/ci/is_ci.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ci/is_ci.rs#L29)
