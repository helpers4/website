---
title: "url"
description: "URLs without a dependency: percent-encoding, query strings, a parser and reference resolution."
sidebar:
  label: "≡ Overview"
  order: 0
---

URLs without a dependency: percent-encoding, query strings, a parser and reference resolution.

`percent_encode` / `percent_decode` handle one component, `parse_query` / `build_query` turn a query
string into pairs and back, `join_path` glues path pieces, and [`Url`](/rust/modules/url/url/) parses a whole URL (RFC 3986)
and resolves relative references against it. Malformed input is an error, never a silent fix.

## Install

Cargo feature `url` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features url
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["url"] }
```

Import path: `helpers4::url`.

## Items

| Item | What it does |
| --- | --- |
| [`build_query`](/rust/modules/url/build_query/) | Builds a query string (`a=1&b=two`) from key-value pairs, percent-encoding both sides. |
| [`join_path`](/rust/modules/url/join_path/) | Joins two pieces of a URL or path with exactly one `/` between them. |
| [`parse_query`](/rust/modules/url/parse_query/) | Parses a query string (`a=1&b=two`) into its key-value pairs, decoded, in order. |
| [`Url`](/rust/modules/url/url/) | A parsed URL: `scheme://userinfo@host:port/path?query#fragment`. |
| [`percent_decode`](/rust/modules/url/percent_decode/) | Decodes the `%XX` escapes of `input`. |
| [`percent_encode`](/rust/modules/url/percent_encode/) | Percent-encodes `input` for use as one URL component: a path segment, a query key or value. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`PercentDecodeError`](/rust/modules/url/parse_query/#error-type-percentdecodeerror) | [`parse_query`](/rust/modules/url/parse_query/), [`percent_decode`](/rust/modules/url/percent_decode/) |
| [`UrlError`](/rust/modules/url/url/#error-type-urlerror) | [`Url`](/rust/modules/url/url/) |
