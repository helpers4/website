---
title: "detect"
description: "Which CI service the environment belongs to, if any."
sidebar:
  label: "detect"
---

Which CI service the environment belongs to, if any.

The environment is a parameter, not read behind your back: pass a lookup such as
`&|name| std::env::var(name).ok()`, or a closure over a map in a test. The known services are
recognized by their own variables (`GITHUB_ACTIONS`, `GITLAB_CI`, `CIRCLECI`, ...); any other
environment with a truthy `CI` variable is [`Provider::Other`](/rust/modules/ci/provider/). A variable is truthy unless it
is empty, `0` or `false` (case-insensitive).

## Import

```rust
use helpers4::ci::detect;
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
pub fn detect(get: &dyn Fn(&str) -> Option<String>) -> Option<Provider>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `get` | `&dyn Fn(&str) -> Option<String>` | Looks a variable up by name. |

## Returns

`Option<Provider>` — The [`Provider`](/rust/modules/ci/provider/), or `None` outside CI.

## Examples

```rust
use helpers4::ci::{detect, Provider};

let env = |name: &str| (name == "GITHUB_ACTIONS").then(|| "true".to_string());
assert_eq!(detect(&env), Some(Provider::GitHubActions));
assert_eq!(detect(&|_: &str| None), None);
```

## Source

[src/ci/detect.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ci/detect.rs#L53)
