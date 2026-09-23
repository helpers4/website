---
title: "bearer_token"
description: "Extracts the token from an Authorization: Bearer <token> header value."
sidebar:
  label: "bearer_token"
---

Extracts the token from an `Authorization: Bearer <token>` header value.

Follows RFC 7235 and RFC 6750: the scheme name is case-insensitive, it is followed by one or
more spaces, and the token is a non-empty `b64token` (letters, digits and `-` `.` `_` `~` `+`
`/`, optionally ending with `=` padding). Leading and trailing spaces or tabs around the whole
value are ignored. Anything else, including another scheme or an empty token, gives `None`.

Only the syntax is checked: whether the token is valid is up to the caller.

## Import

```rust
use helpers4::http::bearer_token;
```

Cargo feature `http` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features http
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["http"] }
```

## Signature

```rust
pub fn bearer_token(header: &str) -> Option<&str>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `header` | `&str` | The value of an `Authorization` header. |

## Returns

`Option<&str>`

## Examples

```rust
use helpers4::http::bearer_token;

assert_eq!(bearer_token("Bearer abc.def-123"), Some("abc.def-123"));
assert_eq!(bearer_token("bearer   abc"), Some("abc"));
assert_eq!(bearer_token("Basic dXNlcjpwYXNz"), None);
assert_eq!(bearer_token("Bearer "), None);
```

## Source

[src/http/bearer_token.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/http/bearer_token.rs#L29)
