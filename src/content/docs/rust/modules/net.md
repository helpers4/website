---
title: "net"
description: "Network helpers on std::net and plain text: no I/O, no resolution."
sidebar:
  order: 6
---

Network helpers on `std::net` and plain text: no I/O, no resolution.

Cargo feature `net` (enabled by default) · import path `helpers4::net`

| Item | What it does |
| --- | --- |
| [`HostnameError`](#hostnameerror) | Why a string is not a valid hostname (see `is_valid_hostname`). |
| [`is_public_ip`](#is_public_ip) | Returns `true` when `ip` is a globally reachable unicast address, `false` for everything that is loopback, private, link-local, shared, documentation, reserved or otherwise not on the public internet. |
| [`is_valid_hostname`](#is_valid_hostname) | Checks that `hostname` is a valid hostname (RFC 1035 and RFC 1123, ASCII only). |

## `HostnameError`

```rust
#[non_exhaustive]
pub enum HostnameError {
    /// The string is empty.
    Empty,
    /// The name is longer than 253 octets (not counting an optional trailing dot).
    TooLong,
    /// A label is empty: a leading dot, two consecutive dots, or a lone `"."`.
    EmptyLabel,
    /// A label is longer than 63 octets.
    LabelTooLong,
    /// A character other than an ASCII letter, digit or hyphen.
    InvalidChar {
        /// Byte offset of the character in the input.
        index: usize,
        /// The offending character.
        found: char,
    },
    /// A label starts or ends with a hyphen.
    HyphenEdge,
    /// The last label is a number (`127.1`, `2130706433`, `0x7f`): URL parsers read such a name as
    /// an IPv4 address, not as a hostname.
    NumericLastLabel,
}
```

Why a string is not a valid hostname (see [`is_valid_hostname`](#is_valid_hostname)).

## `is_public_ip`

```rust
pub fn is_public_ip(ip: IpAddr) -> bool
```

Returns `true` when `ip` is a globally reachable unicast address, `false` for everything
that is loopback, private, link-local, shared, documentation, reserved or otherwise not on the
public internet.

It is meant as the address check of an SSRF guard (a server that fetches user-supplied URLs).
The guarantee is one-sided: **no address that the IANA special-purpose registries mark as not
globally reachable is reported public**. Where a block is refused as a whole and the registry
carves a reachable piece out of it, the whole block is refused on purpose.

- **IPv4** is refused when it falls in any block of the IANA IPv4 special-purpose registry
  that is not globally reachable: `0.0.0.0/8`, `10.0.0.0/8`, `100.64.0.0/10` (shared address
  space, e.g. carrier-grade NAT and Tailscale), `127.0.0.0/8`, `169.254.0.0/16` (link-local,
  including the cloud metadata address), `172.16.0.0/12`, `192.0.0.0/24` (including the two
  anycast addresses `192.0.0.9` and `192.0.0.10` that the registry lists as reachable),
  `192.0.2.0/24`, `192.88.99.0/24`, `192.168.0.0/16`, `198.18.0.0/15`, `198.51.100.0/24`,
  `203.0.113.0/24`, and `224.0.0.0/3` (multicast, reserved and broadcast).
- **IPv6** is only accepted inside the global unicast space `2000::/3`, minus `2001::/23`
  (IETF assignments, including Teredo), `2001:db8::/32` and `3fff::/20` (documentation, RFC
  9637) and `2002::/16` (6to4). Loopback, unspecified, unique-local, link-local, multicast and
  the deprecated IPv4-compatible `::a.b.c.d` form are all outside `2000::/3`. Everything else
  inside `2000::/3` is accepted, **including blocks IANA holds in reserve** (`2d00::/8` to
  `3e00::/8`, `3f00::/9` to `3ffe::/16`): nothing is routed there today, and IANA keeps
  allocating out of this space, so a block delegated tomorrow must not start failing the guard.
- **Embedded IPv4** is judged by the IPv4 rules: an IPv4-mapped address (`::ffff:a.b.c.d`) and
  an address under the NAT64 well-known prefix (`64:ff9b::/96`) are public exactly when the
  IPv4 address inside is. 6to4 addresses are refused outright.

### What this check cannot know

This is only one half of an SSRF defence.

- **The address that is really used.** Resolve the name once, validate that address, and
  connect to it (not to the name again, which invites DNS rebinding), and validate every
  redirect target the same way.
- **What is not an IP literal to `std`.** Spellings such as `2130706433`, `0x7f.1` or
  `127.1` do not parse as an `IpAddr`, yet a URL parser reads them as `127.0.0.1`. Parse the
  URL first and pass the address it produces here (see also
  [`is_valid_hostname`](#is_valid_hostname), which rejects them).
- **Provider-specific addresses inside a public range.** A registry cannot say that, for
  example, Azure's wire server `168.63.129.16` is internal: it is reported public.

### Examples

```rust
use helpers4::net::is_public_ip;

assert!(is_public_ip("8.8.8.8".parse().unwrap()));
assert!(is_public_ip("2606:4700:4700::1111".parse().unwrap()));

assert!(!is_public_ip("169.254.169.254".parse().unwrap())); // cloud metadata
assert!(!is_public_ip("::1".parse().unwrap()));
assert!(!is_public_ip("::ffff:10.0.0.1".parse().unwrap())); // private, in IPv6 clothes
```

## `is_valid_hostname`

```rust
pub fn is_valid_hostname(hostname: &str) -> Result<(), HostnameError>
```

Checks that `hostname` is a valid hostname (RFC 1035 and RFC 1123, ASCII only).

The rules: at most 253 octets, not counting one optional trailing dot; labels of 1 to 63
octets made of ASCII letters, digits and hyphens; no label starts or ends with a hyphen. A
label may start with a digit, but the **last** label may not be a number (decimal like `1`, or
hexadecimal like `0x7f`): RFC 1123 section 2.1 keeps the top-level label alphabetic so that a
hostname is never mistaken for an address, and URL parsers do read `127.1`, `2130706433` or
`0x7f000001` as `127.0.0.1`. Underscores are refused (they are not hostname characters), and so
are non-ASCII characters: convert an internationalized name to its `xn--` form first.

This checks syntax only. It is not an SSRF check: a name that passes can still resolve to a
private address. To guard a server that fetches user-supplied URLs, parse the URL first, then
check the address you will actually connect to with
[`is_public_ip`](#is_public_ip).

### Errors

A [`HostnameError`](#hostnameerror) naming the first rule that fails.

### Examples

```rust
use helpers4::net::{is_valid_hostname, HostnameError};

assert!(is_valid_hostname("example.com").is_ok());
assert!(is_valid_hostname("localhost.").is_ok());
assert_eq!(is_valid_hostname("-bad.example"), Err(HostnameError::HyphenEdge));
assert_eq!(is_valid_hostname("a..b"), Err(HostnameError::EmptyLabel));
assert_eq!(is_valid_hostname("127.0.0.1"), Err(HostnameError::NumericLastLabel));
```

