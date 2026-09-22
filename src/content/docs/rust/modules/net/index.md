---
title: "net"
description: "Network helpers on std::net and plain text: no I/O, no resolution."
sidebar:
  label: "≡ Overview"
  order: 0
---

Network helpers on `std::net` and plain text: no I/O, no resolution.

## Install

Cargo feature `net` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features net
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["net"] }
```

Import path: `helpers4::net`.

## Items

| Item | What it does |
| --- | --- |
| [`is_public_ip`](/rust/modules/net/is_public_ip/) | Returns `true` when `ip` is a globally reachable unicast address, `false` for everything that is loopback, private, link-local, shared, documentation, reserved or otherwise not on the public internet. |
| [`is_valid_hostname`](/rust/modules/net/is_valid_hostname/) | Checks that `hostname` is a valid hostname (RFC 1035 and RFC 1123, ASCII only). |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`HostnameError`](/rust/modules/net/is_valid_hostname/#error-type-hostnameerror) | [`is_valid_hostname`](/rust/modules/net/is_valid_hostname/) |
