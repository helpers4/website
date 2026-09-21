---
title: "http"
description: "HTTP header value helpers on plain text: no dependency on an HTTP crate."
sidebar:
  order: 5
---

HTTP header value helpers on plain text: no dependency on an HTTP crate.

Cargo feature `http` (enabled by default) · import path `helpers4::http`

| Item | What it does |
| --- | --- |
| [`bearer_token`](#bearer_token) | Extracts the token from an `Authorization: Bearer <token>` header value. |

## `bearer_token`

```rust
pub fn bearer_token(header: &str) -> Option<&str>
```

Extracts the token from an `Authorization: Bearer <token>` header value.

Follows RFC 7235 and RFC 6750: the scheme name is case-insensitive, it is followed by one or
more spaces, and the token is a non-empty `b64token` (letters, digits and `-` `.` `_` `~` `+`
`/`, optionally ending with `=` padding). Leading and trailing spaces or tabs around the whole
value are ignored. Anything else, including another scheme or an empty token, gives `None`.

Only the syntax is checked: whether the token is valid is up to the caller.

### Examples

```rust
use helpers4::http::bearer_token;

assert_eq!(bearer_token("Bearer abc.def-123"), Some("abc.def-123"));
assert_eq!(bearer_token("bearer   abc"), Some("abc"));
assert_eq!(bearer_token("Basic dXNlcjpwYXNz"), None);
assert_eq!(bearer_token("Bearer "), None);
```

