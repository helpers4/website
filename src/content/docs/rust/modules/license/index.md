---
title: "license"
description: "SPDX license identifiers and expressions: look a license up, parse MIT OR Apache-2.0, check it against a policy, write a source header."
sidebar:
  label: "≡ Overview"
  order: 0
---

SPDX license identifiers and expressions: look a license up, parse `MIT OR Apache-2.0`, check it
against a policy, write a source header.

[`lookup`](/rust/modules/license/lookup/) gives the name and family ([`Category`](/rust/modules/license/category/)) of about forty common licenses, `normalize`
updates the deprecated GNU identifiers, [`Expression`](/rust/modules/license/expression/) parses and evaluates SPDX expressions, and
`header` writes the copyright and `SPDX-License-Identifier` lines. This is information for tooling,
not legal advice.

## Install

Cargo feature `license` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features license
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["license"] }
```

Import path: `helpers4::license`.

## Items

| Item | What it does |
| --- | --- |
| [`Category`](/rust/modules/license/category/) | How a license treats the code that uses it: the main families, from most to least permissive. |
| [`Expression`](/rust/modules/license/expression/) | An [SPDX license expression](https://spdx.github.io/spdx-spec/v2.3/SPDX-license-expressions/): one license, or several combined with `AND` and `OR`. |
| [`header`](/rust/modules/license/header/) | The two-line source header that carries a copyright notice and an SPDX license identifier. |
| [`LicenseInfo`](/rust/modules/license/licenseinfo/) | What is known about one license: its SPDX identifier, its name and its family. |
| [`lookup`](/rust/modules/license/lookup/) | What this module knows about the license with SPDX identifier `id`. |
| [`normalize`](/rust/modules/license/normalize/) | The current SPDX identifier for a deprecated one. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`ParseExpressionError`](/rust/modules/license/expression/#error-type-parseexpressionerror) | [`Expression`](/rust/modules/license/expression/) |
