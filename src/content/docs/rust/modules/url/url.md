---
title: "Url"
description: "A parsed URL: scheme://userinfo@host:port/path?query#fragment."
sidebar:
  label: "Url"
---

A parsed URL: `scheme://userinfo@host:port/path?query#fragment`.

The parts are kept as written (not percent-decoded), except that the scheme and the host are
lowercased, which URLs treat as case-insensitive. Any part but the scheme and the path may be
absent. `Display` writes the URL back, so a normalized URL round-trips. This is a general
RFC 3986 parser, not the WHATWG one: it does not know special schemes, punycode, or percent-
encode for you (see [`percent_encode`](/rust/modules/url/percent_encode/)), and it rejects spaces and
control characters instead of fixing them.

## Import

```rust
use helpers4::url::Url;
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

## Definition

```rust
pub struct Url { /* private fields */ }
```

## Examples

```rust
use helpers4::url::Url;

let url = Url::parse("https://Example.com:8443/a/b?x=1#top")?;
assert_eq!(url.scheme(), "https");
assert_eq!(url.host(), Some("example.com"));
assert_eq!(url.port(), Some(8443));
assert_eq!(url.path(), "/a/b");
assert_eq!(url.query(), Some("x=1"));
assert_eq!(url.fragment(), Some("top"));
assert_eq!(url.join("../c")?.to_string(), "https://example.com:8443/c");
```

## Methods

### `parse`

```rust
pub fn parse(input: &str) -> Result<Self, UrlError>
```

Parses an absolute URL.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `input` | `&str` | The URL, which must start with a scheme (`https:`, `mailto:`, `file:`, ...). |

**Returns**

`Result<Self, UrlError>`

**Errors**

A [`UrlError`](#error-type-urlerror) for a space or control character, a missing or invalid scheme, a malformed
host, or a port that is not a number from 0 to 65535.

### `join`

```rust
pub fn join(&self, reference: &str) -> Result<Self, UrlError>
```

Resolves `reference` against this URL, as a browser resolves a link on a page (RFC 3986,
section 5).

The reference may be absolute (`https://other.example/`), start with `//` (keep the
scheme), a path (`/a`, `b`, `../c`), only a query (`?x=1`) or only a fragment (`#top`).
`.` and `..` segments are resolved.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `reference` | `&str` | The URL reference to resolve. |

**Returns**

`Result<Self, UrlError>`

**Errors**

The same [`UrlError`](#error-type-urlerror)s as [`Url::parse`](/rust/modules/env/parse/), for the reference.

### `scheme`

```rust
pub fn scheme(&self) -> &str
```

The scheme, lowercase, such as `"https"`.

**Returns**

`&str` — The scheme without the colon.

### `userinfo`

```rust
pub fn userinfo(&self) -> Option<&str>
```

The user information before the `@`, such as `"user:password"`.

**Returns**

`Option<&str>` — The raw user information, or `None` when the URL has none.

### `host`

```rust
pub fn host(&self) -> Option<&str>
```

The host, lowercase, with the brackets of an IPv6 literal (`"[::1]"`).

**Returns**

`Option<&str>` — The host, `Some("")` for an empty authority (`file:///etc`), or `None` when the URL has no
authority at all (`mailto:a@b.c`).

### `port`

```rust
pub fn port(&self) -> Option<u16>
```

The port written in the URL.

**Returns**

`Option<u16>` — The port, or `None` when the URL does not name one.

### `port_or_default`

```rust
pub fn port_or_default(&self) -> Option<u16>
```

The port to connect to: the one in the URL, or the default of a well-known scheme.

**Returns**

`Option<u16>` — The explicit port, else `80` for `http` and `ws`, `443` for `https` and `wss`, `21` for
`ftp`, and `None` for any other scheme.

### `path`

```rust
pub fn path(&self) -> &str
```

The path, as written; possibly empty.

**Returns**

`&str` — The path, starting with `/` when the URL has an authority and a path.

### `query`

```rust
pub fn query(&self) -> Option<&str>
```

The query, without the `?`.

**Returns**

`Option<&str>` — The raw query (see [`parse_query`](/rust/modules/url/parse_query/) to decode it), or `None`.

### `fragment`

```rust
pub fn fragment(&self) -> Option<&str>
```

The fragment, without the `#`.

**Returns**

`Option<&str>` — The raw fragment, or `None`.

## Error type: UrlError

Why a string could not be parsed as a URL.

```rust
use helpers4::url::UrlError;

#[non_exhaustive]
pub enum UrlError {
    /// A space or control character, which must be percent-encoded.
    InvalidCharacter {
        /// Byte offset of the offending character.
        index: usize,
    },
    /// There is no `scheme:` before the first `/`, `?` or `#`.
    MissingScheme,
    /// The scheme does not match `ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )`.
    InvalidScheme {
        /// Byte offset in the input of the first character that does not fit (`0` when the
        /// scheme is empty).
        index: usize,
    },
    /// The host is malformed, for instance an IPv6 literal with no closing `]`.
    InvalidHost,
    /// The port is not a number from 0 to 65535.
    InvalidPort,
}
```

## Source

[src/url/parsed_url.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/url/parsed_url.rs#L34)
