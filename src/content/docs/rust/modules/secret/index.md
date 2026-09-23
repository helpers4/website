---
title: "secret"
description: "Keeping secrets out of logs: a wrapper that never prints its value, redaction, masking and credential detection."
sidebar:
  label: "≡ Overview"
  order: 0
---

Keeping secrets out of logs: a wrapper that never prints its value, redaction, masking and
credential detection.

[`Secret`](/rust/modules/secret/secret/) hides a value from `Debug` and `Display`; `redact` and `mask` clean text you already have;
`detect` and `scan` recognize well-known token formats (GitHub, AWS, Slack, Stripe, Google, npm, JWT,
PEM keys). None of it wipes memory (that needs unsafe code, which this crate forbids).

## Install

Cargo feature `secret` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features secret
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["secret"] }
```

Import path: `helpers4::secret`.

## Items

| Item | What it does |
| --- | --- |
| [`detect`](/rust/modules/secret/detect/) | Recognizes a well-known credential format: the whole of `token` must look like one. |
| [`mask`](/rust/modules/secret/mask/) | Hides a secret but for its last few characters, such as `"****************7890"`. |
| [`REDACTED`](/rust/modules/secret/redacted/) | The text shown in place of a redacted secret. |
| [`redact`](/rust/modules/secret/redact/) | Replaces every occurrence of each of `secrets` in `text` with `[REDACTED]`. |
| [`Finding`](/rust/modules/secret/finding/) | One credential found by `scan`. |
| [`scan`](/rust/modules/secret/scan/) | Finds the well-known credentials in `text`. |
| [`Secret`](/rust/modules/secret/secret/) | A value that must not leak through logs, error messages or `{:?}`: printing it shows `[REDACTED]` instead of the content. |
| [`TokenKind`](/rust/modules/secret/tokenkind/) | A well-known kind of credential, as recognized by `detect`. |
