---
title: "join_path"
description: "Joins two pieces of a URL or path with exactly one / between them."
sidebar:
  label: "join_path"
---

Joins two pieces of a URL or path with exactly one `/` between them.

Trailing slashes of `base` and leading slashes of `segment` are trimmed first, so
`"a/"` + `"/b"`, `"a"` + `"b"` and `"a//"` + `"b"` all give `"a/b"`. Nothing is encoded or
resolved: use [`Url::join`](/rust/modules/future/join/) to resolve a reference against a base URL, and
[`percent_encode`](/rust/modules/url/percent_encode/) for a segment that may contain reserved characters.

## Import

```rust
use helpers4::url::join_path;
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
pub fn join_path(base: &str, segment: &str) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `base` | `&str` | The first part, such as `"https://api.example.com/v1/"`. |
| `segment` | `&str` | The part to append, such as `"/users"`. |

## Returns

`String` — The two parts joined by a single `/`.

## Examples

```rust
use helpers4::url::join_path;

assert_eq!(join_path("https://api.example.com/v1/", "/users"), "https://api.example.com/v1/users");
assert_eq!(join_path("a", "b"), "a/b");
```

## Source

[src/url/join_path.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/url/join_path.rs#L30)
