---
title: "format_size"
description: "Formats a number of bytes with a binary unit and at most one decimal, such as \"1.5 KiB\"."
sidebar:
  label: "format_size"
---

Formats a number of bytes with a binary unit and at most one decimal, such as `"1.5 KiB"`.

Units are powers of 1024 (`KiB`, `MiB`, ... `EiB`) and the value is rounded to the nearest
tenth, so `1023.96 KiB` reads `1 MiB` rather than `1024 KiB`. A `.0` is dropped. Only integer
arithmetic is used, so the result never depends on floating-point rounding.
[`parse_size`](/rust/modules/bytes/parse_size/) reads it back.

## Import

```rust
use helpers4::bytes::format_size;
```

Cargo feature `bytes` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features bytes
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["bytes"] }
```

## Signature

```rust
pub fn format_size(bytes: u64) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `bytes` | `u64` | The size to format. |

## Returns

`String` — The formatted size.

## Examples

```rust
use helpers4::bytes::format_size;

assert_eq!(format_size(512), "512 B");
assert_eq!(format_size(1536), "1.5 KiB");
assert_eq!(format_size(5 * 1024 * 1024), "5 MiB");
assert_eq!(format_size(1_048_575), "1 MiB");
```

## Source

[src/bytes/format_size.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/bytes/format_size.rs#L33)
