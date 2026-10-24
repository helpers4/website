---
title: "env"
description: "Dotenv (.env) helpers working on plain text: no file or process-environment access, so they are deterministic and easy to test."
sidebar:
  label: "≡ Overview"
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
helpers4 = { version = "0.0.9", default-features = false, features = ["env"] }
```

Import path: `helpers4::env`.

## Items

| Item | What it does |
| --- | --- |
| [`get`](/rust/modules/env/get/) | Returns the value of `key` in dotenv `content`, or `None` when it is not assigned. |
| [`get_bool`](/rust/modules/env/get_bool/) | Returns `key` in dotenv `content` parsed as a boolean, or `default` when it is absent or not recognized. |
| [`get_duration`](/rust/modules/env/get_duration/) | Returns `key` in dotenv `content` parsed as a human-written duration (`"1h30m"`, `"2d"`, `"500ms"`), or `default` when it is absent or does not parse. |
| [`get_int`](/rust/modules/env/get_int/) | Returns `key` in dotenv `content` parsed as an integer, or `default` when it is absent or not a valid `i64` (a decimal integer, optionally signed; no underscores, no `0x`/`0b` prefixes). |
| [`get_list`](/rust/modules/env/get_list/) | Returns `key` in dotenv `content` split on `separator` into a list, or `default` when it is absent. |
| [`parse`](/rust/modules/env/parse/) | Parses dotenv `content` into `(key, value)` pairs, in file order. |
| [`remove`](/rust/modules/env/remove/) | Removes every assignment of `key` from dotenv `content` and returns the new content. |
| [`set`](/rust/modules/env/set/) | Sets `key` to `value` in dotenv `content` and returns the new content. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`InvalidKeyError`](/rust/modules/env/set/#error-type-invalidkeyerror) | [`set`](/rust/modules/env/set/) |
