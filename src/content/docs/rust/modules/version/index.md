---
title: "version"
description: "Semantic Versioning 2.0.0: parsing, precedence, bumps and Cargo-style requirements."
sidebar:
  label: "≡ Overview"
  order: 0
---

Semantic Versioning 2.0.0: parsing, precedence, bumps and Cargo-style requirements.

[`Version`](/rust/modules/version/version/) is a strict semver version (with a lenient parser for `v1.2`), [`VersionReq`](/rust/modules/version/versionreq/) a requirement
such as `^1.2` or `>=1.0, <2.0` using Cargo's rules, and `compare` / `satisfies` are the one-line
versions for strings. Bad input is a typed error, never a guess.

## Install

Cargo feature `version` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features version
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["version"] }
```

Import path: `helpers4::version`.

## Items

| Item | What it does |
| --- | --- |
| [`compare`](/rust/modules/version/compare/) | Compares two version strings by semver precedence. |
| [`satisfies`](/rust/modules/version/satisfies/) | Whether the version `version` satisfies the requirement `requirement`, both given as text. |
| [`Version`](/rust/modules/version/version/) | A [Semantic Versioning 2.0.0](https://semver.org) version: `MAJOR.MINOR.PATCH`, optionally with a pre-release (`-alpha.1`) and build metadata (`+sha.5114f85`). |
| [`VersionReq`](/rust/modules/version/versionreq/) | A version requirement such as `^1.2`, `>=1.0, <2.0` or `1.*`: which versions are acceptable. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`ParseVersionError`](/rust/modules/version/compare/#error-type-parseversionerror) | [`compare`](/rust/modules/version/compare/), [`satisfies`](/rust/modules/version/satisfies/), [`Version`](/rust/modules/version/version/), [`VersionReq`](/rust/modules/version/versionreq/) |
