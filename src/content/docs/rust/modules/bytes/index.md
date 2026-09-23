---
title: "bytes"
description: "Helpers for byte slices and sizes that the standard library does not provide."
sidebar:
  label: "≡ Overview"
  order: 0
---

Helpers for byte slices and sizes that the standard library does not provide.

Reading integers at an offset without panicking, a byte-slice search, a constant-time comparison,
XOR, and human-readable sizes (`1.5 KiB`) in both directions.

## Install

Cargo feature `bytes` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features bytes
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["bytes"] }
```

Import path: `helpers4::bytes`.

## Items

| Item | What it does |
| --- | --- |
| [`constant_time_eq`](/rust/modules/bytes/constant_time_eq/) | Compares two byte slices without stopping at the first difference. |
| [`Endian`](/rust/modules/bytes/endian/) | The byte order of a multi-byte integer. |
| [`find`](/rust/modules/bytes/find/) | The index of the first occurrence of `needle` in `haystack`. |
| [`format_size`](/rust/modules/bytes/format_size/) | Formats a number of bytes with a binary unit and at most one decimal, such as `"1.5 KiB"`. |
| [`parse_size`](/rust/modules/bytes/parse_size/) | Parses a human-written size such as `"1.5 KiB"`, `"10MB"` or `"512"` into a number of bytes. |
| [`read_u16`](/rust/modules/bytes/read_u16/) | Reads a `u16` from `bytes` at `offset`, in the given byte order. |
| [`read_u32`](/rust/modules/bytes/read_u32/) | Reads a `u32` from `bytes` at `offset`, in the given byte order. |
| [`read_u64`](/rust/modules/bytes/read_u64/) | Reads a `u64` from `bytes` at `offset`, in the given byte order. |
| [`xor`](/rust/modules/bytes/xor/) | The bytewise XOR of two slices of the same length. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`ParseSizeError`](/rust/modules/bytes/parse_size/#error-type-parsesizeerror) | [`parse_size`](/rust/modules/bytes/parse_size/) |
