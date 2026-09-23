---
title: "satisfies"
description: "Whether the version version satisfies the requirement requirement, both given as text."
sidebar:
  label: "satisfies"
---

Whether the version `version` satisfies the requirement `requirement`, both given as text.

A shortcut for [`Version::parse_lenient`](/rust/modules/version/version/), [`VersionReq::parse`](/rust/modules/env/parse/) and [`VersionReq::matches`](/rust/modules/version/versionreq/):
use those directly to check many versions against one requirement.

## Import

```rust
use helpers4::version::satisfies;
```

Cargo feature `version` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features version
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["version"] }
```

## Signature

```rust
pub fn satisfies(version: &str, requirement: &str) -> Result<bool, ParseVersionError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `version` | `&str` | The version to check, such as `"1.4.2"`. |
| `requirement` | `&str` | The requirement, such as `"^1.2"` (see [`VersionReq`] for the syntax). |

## Returns

`Result<bool, ParseVersionError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

The [`ParseVersionError`](#error-type-parseversionerror) of whichever string does not parse.

## Examples

```rust
use helpers4::version::satisfies;

assert!(satisfies("1.4.2", "^1.2")?);
assert!(!satisfies("2.0.0", "^1.2")?);
assert!(satisfies("0.3.1", ">=0.3, <0.4")?);
```

## Error type: ParseVersionError

Why a version or a version requirement could not be parsed.

```rust
use helpers4::version::ParseVersionError;

#[non_exhaustive]
pub enum ParseVersionError {
    /// The text is empty or only whitespace.
    Empty,
    /// A part is missing: `"1.2"` has no patch.
    MissingComponent {
        /// `"minor"` or `"patch"`.
        component: &'static str,
    },
    /// A part is not a number (or does not fit a `u64`).
    InvalidNumber {
        /// `"major"`, `"minor"` or `"patch"`.
        component: &'static str,
    },
    /// A number has a leading zero (`"01"`), which semver forbids.
    LeadingZero {
        /// `"major"`, `"minor"`, `"patch"` or `"prerelease"` (a numeric identifier).
        component: &'static str,
    },
    /// A pre-release or build identifier is empty or has a character outside `[0-9A-Za-z-]`.
    InvalidIdentifier,
    /// A requirement comparator is malformed: unknown operator, a wildcard where it is not
    /// allowed, a pre-release on a partial version, or build metadata.
    InvalidComparator,
}
```

## Source

[src/version/satisfies.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/version/satisfies.rs#L31)
