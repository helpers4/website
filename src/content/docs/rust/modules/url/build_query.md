---
title: "build_query"
description: "Builds a query string (a=1&b=two) from key-value pairs, percent-encoding both sides."
sidebar:
  label: "build_query"
---

Builds a query string (`a=1&b=two`) from key-value pairs, percent-encoding both sides.

Pairs keep their order and repeated keys are kept. A space becomes `%20` (not `+`), which every
URL parser reads back correctly. The result has no leading `?`. It is the inverse of
[`parse_query`](/rust/modules/url/parse_query/).

## Import

```rust
use helpers4::url::build_query;
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
pub fn build_query<I, K, V>(pairs: I) -> String
where
    I: IntoIterator<Item = (K, V)>,
    K: AsRef<str>,
    V: AsRef<str>,
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `pairs` | `I` | The keys and values, anything that iterates over `(key, value)` of string-likes. |

## Returns

`String` — The encoded query string, empty when there are no pairs.

## Examples

```rust
use helpers4::url::build_query;

assert_eq!(build_query([("q", "rust lang"), ("page", "2")]), "q=rust%20lang&page=2");
assert_eq!(build_query(Vec::<(&str, &str)>::new()), "");
```

## Source

[src/url/build_query.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/url/build_query.rs#L30)
