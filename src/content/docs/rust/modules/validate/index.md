---
title: "validate"
description: "Shape checks for common user-facing formats: pragmatic subsets that catch real mistakes, not full grammars."
sidebar:
  label: "≡ Overview"
  order: 0
---

Shape checks for common user-facing formats: pragmatic subsets that catch real mistakes,
not full grammars. None of them normalizes or parses the value, only checks it.

## Install

Cargo feature `validate` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features validate
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.5", default-features = false, features = ["validate"] }
```

Import path: `helpers4::validate`.

## Items

| Item | What it does |
| --- | --- |
| [`is_slug`](/rust/modules/validate/is_slug/) | Checks whether `s` has the shape of an ASCII URL slug: non-empty, made only of lowercase ASCII letters, digits and hyphens, with no leading, trailing or doubled hyphen. |
| [`is_uuid`](/rust/modules/validate/is_uuid/) | Checks whether `s` is a UUID in its canonical `8-4-4-4-12` hyphenated hexadecimal form. |
| [`is_valid_email`](/rust/modules/validate/is_valid_email/) | Checks a pragmatic subset of RFC 5322 that catches real typos, not a full grammar. |
