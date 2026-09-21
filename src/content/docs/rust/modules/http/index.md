---
title: "http"
description: "HTTP header value helpers on plain text: no dependency on an HTTP crate."
sidebar:
  label: "📋 Overview"
  order: 0
---

HTTP header value helpers on plain text: no dependency on an HTTP crate.

## Install

Cargo feature `http` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features http
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.2", default-features = false, features = ["http"] }
```

Import path: `helpers4::http`.

## Items

| Item | What it does |
| --- | --- |
| [`bearer_token`](./bearer_token/) | Extracts the token from an `Authorization: Bearer <token>` header value. |
