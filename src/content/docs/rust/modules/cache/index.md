---
title: "cache"
description: "Caches and stores: entries that expire with a passed-in clock (ExpiringMap), and a capacity-bounded map that evicts by recency instead (LruCache)."
sidebar:
  label: "≡ Overview"
  order: 0
---

Caches and stores: entries that expire with a passed-in clock ([`ExpiringMap`](/rust/modules/cache/expiringmap/)), and a
capacity-bounded map that evicts by recency instead ([`LruCache`](/rust/modules/cache/lrucache/)). Neither ever reads a
clock or the system allocator's notion of "recent" behind the caller's back.

## Install

Cargo feature `cache` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features cache
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.8", default-features = false, features = ["cache"] }
```

Import path: `helpers4::cache`.

## Items

| Item | What it does |
| --- | --- |
| [`ExpiringMap`](/rust/modules/cache/expiringmap/) | A map whose entries expire, with the clock passed in by the caller. |
| [`ExpiringSet`](/rust/modules/cache/expiringset/) | A set whose members expire: an `ExpiringMap` without values. |
| [`LruCache`](/rust/modules/cache/lrucache/) | A map bounded to at most `capacity` entries: once full, inserting a new key evicts the least recently used one. |
