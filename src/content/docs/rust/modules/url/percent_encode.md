---
title: "percent_encode"
description: "Percent-encodes input for use as one URL component: a path segment, a query key or value."
sidebar:
  label: "percent_encode"
---

Percent-encodes `input` for use as one URL component: a path segment, a query key or value.

Only the unreserved characters of RFC 3986 (`A-Z a-z 0-9 - . _ ~`) are kept; every other byte,
including `/`, `?`, `&`, `=`, `+` and every byte of a non-ASCII character, becomes `%XX` in
upper case. It is stricter than JavaScript's `encodeURIComponent` (which also leaves `! * ' ( )`)
so the result is safe in any part of a URL. Returns the input borrowed when there is nothing to
encode.

## Import

```rust
use helpers4::url::percent_encode;
```

Cargo feature `url` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features url
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["url"] }
```

## Signature

```rust
pub fn percent_encode(input: &str) -> Cow<'_, str>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `input` | `&str` | The text to encode. |

## Returns

`Cow<'_, str>` — The encoded text.

## Examples

```rust
use helpers4::url::percent_encode;

assert_eq!(percent_encode("a b&c=d"), "a%20b%26c%3Dd");
assert_eq!(percent_encode("café"), "caf%C3%A9");
assert_eq!(percent_encode("safe-text_1.~"), "safe-text_1.~");
```

## Source

[src/url/percent_encode.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/url/percent_encode.rs#L33)
