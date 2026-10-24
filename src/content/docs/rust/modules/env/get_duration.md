---
title: "get_duration"
description: "Returns key in dotenv content parsed as a human-written duration (\"1h30m\", \"2d\", \"500ms\"), or default when it is absent or does not parse."
sidebar:
  label: "get_duration"
---

Returns `key` in dotenv `content` parsed as a human-written duration (`"1h30m"`, `"2d"`,
`"500ms"`), or `default` when it is absent or does not parse.

Sharing this format with the `duration` module's own `parse` does not need that module
enabled: `env` stands alone, like every module here.

## Import

```rust
use helpers4::env::get_duration;
```

Cargo feature `env` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features env
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.8", default-features = false, features = ["env"] }
```

## Signature

```rust
pub fn get_duration(content: &str, key: &str, default: Duration) -> Duration
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `content` | `&str` | The dotenv text to read. |
| `key` | `&str` | The variable name to look up. |
| `default` | `Duration` | Returned when `key` is absent or its value does not parse. |

## Returns

`Duration` — The parsed duration, or `default`.

## Examples

```rust
use helpers4::env::get_duration;
use std::time::Duration;

let content = "TIMEOUT=1h30m\nNAME=not-a-duration\n";
assert_eq!(get_duration(content, "TIMEOUT", Duration::ZERO), Duration::from_secs(5400));
assert_eq!(get_duration(content, "NAME", Duration::ZERO), Duration::ZERO);
assert_eq!(get_duration(content, "MISSING", Duration::from_secs(30)), Duration::from_secs(30));
```

## Source

[src/env/get_duration.rs](https://github.com/helpers4/rust/blob/v0.0.8/src/env/get_duration.rs#L37)
