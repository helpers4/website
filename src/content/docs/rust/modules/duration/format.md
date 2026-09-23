---
title: "format"
description: "Formats duration as a short human-readable string such as \"1h 30m 5s\"."
sidebar:
  label: "format"
---

Formats `duration` as a short human-readable string such as `"1h 30m 5s"`.

Uses the units `d`, `h`, `m`, `s` and `ms`, largest first, and skips the ones that are zero. A
zero duration is `"0s"`. Anything below one millisecond is dropped (truncated, not rounded).
[`parse`](/rust/modules/env/parse/) reads the result back.

## Import

```rust
use helpers4::duration::format;
```

Cargo feature `duration` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features duration
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["duration"] }
```

## Signature

```rust
pub fn format(duration: Duration) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `duration` | `Duration` | The duration to format. |

## Returns

`String`

## Examples

```rust
use helpers4::duration::format;
use std::time::Duration;

assert_eq!(format(Duration::from_secs(5405)), "1h 30m 5s");
assert_eq!(format(Duration::from_millis(1500)), "1s 500ms");
assert_eq!(format(Duration::ZERO), "0s");
```

## Source

[src/duration/format.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/duration/format.rs#L28)
