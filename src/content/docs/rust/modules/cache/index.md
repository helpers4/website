---
title: "cache"
description: "Caches and stores whose entries expire."
sidebar:
  label: "≡ Overview"
  order: 0
---

Caches and stores whose entries expire. The clock is always passed in, never read.

## Install

Cargo feature `cache` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features cache
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["cache"] }
```

Import path: `helpers4::cache`.

## Items

| Item | What it does |
| --- | --- |
| [`ExpiringMap`](/rust/modules/cache/expiringmap/) | A map whose entries expire, with the clock passed in by the caller. |
| [`ExpiringSet`](/rust/modules/cache/expiringset/) | A set whose members expire: an `ExpiringMap` without values. |
