---
title: "env"
description: "Dotenv (.env) helpers working on plain text: no file or process-environment access, so they are deterministic and easy to test."
sidebar:
  label: "📋 Overview"
  order: 0
---

Dotenv (`.env`) helpers working on plain text: no file or process-environment access, so
they are deterministic and easy to test. Read the file yourself, edit the content here, and
write it back.

## Install

Cargo feature `env` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features env
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.2", default-features = false, features = ["env"] }
```

Import path: `helpers4::env`.

## Items

| Item | What it does |
| --- | --- |
| [`InvalidKeyError`](./invalidkeyerror/) | The variable name passed to `set` is not a valid name (`[A-Za-z_][A-Za-z0-9_]*`). |
| [`get`](./get/) | Returns the value of `key` in dotenv `content`, or `None` when it is not assigned. |
| [`parse`](./parse/) | Parses dotenv `content` into `(key, value)` pairs, in file order. |
| [`remove`](./remove/) | Removes every assignment of `key` from dotenv `content` and returns the new content. |
| [`set`](./set/) | Sets `key` to `value` in dotenv `content` and returns the new content. |
