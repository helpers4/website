---
title: "find"
description: "The index of the first occurrence of needle in haystack."
sidebar:
  label: "find"
---

The index of the first occurrence of `needle` in `haystack`.

The byte-slice counterpart of [`str::find`](/rust/modules/bytes/find/): the standard library has no subslice search.

## Import

```rust
use helpers4::bytes::find;
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
pub fn find(haystack: &[u8], needle: &[u8]) -> Option<usize>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `haystack` | `&[u8]` | The bytes to search in. |
| `needle` | `&[u8]` | The bytes to look for. |

## Returns

`Option<usize>` — The starting index of the first match, `Some(0)` for an empty `needle`, or `None` when there
is no match.

## Examples

```rust
use helpers4::bytes::find;

assert_eq!(find(b"hello world", b"o w"), Some(4));
assert_eq!(find(b"hello", b"xyz"), None);
assert_eq!(find(b"hello", b""), Some(0));
```

## Source

[src/bytes/find.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/bytes/find.rs#L29)
