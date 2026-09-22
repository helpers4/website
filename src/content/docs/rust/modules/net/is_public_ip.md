---
title: "is_public_ip"
description: "Returns true when ip is a globally reachable unicast address, false for everything that is loopback, private, link-local, shared, documentation, reserved or otherwise not on the public internet."
sidebar:
  label: "is_public_ip"
---

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

## Import

```rust
use helpers4::net::is_public_ip;
```

Cargo feature `net` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features net
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["net"] }
```

## Signature

```rust
pub fn is_public_ip(ip: IpAddr) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `ip` | `IpAddr` | The address to check. |

## Returns

`bool`

## Examples

```rust
use helpers4::net::is_public_ip;

assert!(is_public_ip("8.8.8.8".parse().unwrap()));
assert!(is_public_ip("2606:4700:4700::1111".parse().unwrap()));

assert!(!is_public_ip("169.254.169.254".parse().unwrap())); // cloud metadata
assert!(!is_public_ip("::1".parse().unwrap()));
assert!(!is_public_ip("::ffff:10.0.0.1".parse().unwrap())); // private, in IPv6 clothes
```

## What this check cannot know

This is only one half of an SSRF defence.

- **The address that is really used.** Resolve the name once, validate that address, and
  connect to it (not to the name again, which invites DNS rebinding), and validate every
  redirect target the same way.
- **What is not an IP literal to `std`.** Spellings such as `2130706433`, `0x7f.1` or
  `127.1` do not parse as an `IpAddr`, yet a URL parser reads them as `127.0.0.1`. Parse the
  URL first and pass the address it produces here (see also
  [`is_valid_hostname`](/rust/modules/net/is_valid_hostname/), which rejects them).
- **Provider-specific addresses inside a public range.** A registry cannot say that, for
  example, Azure's wire server `168.63.129.16` is internal: it is reported public.

## Source

[src/net/is_public_ip.rs](https://github.com/helpers4/rust/blob/v0.0.5/src/net/is_public_ip.rs#L67)
