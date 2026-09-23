---
title: "compare"
description: "Compares two version strings by semver precedence."
sidebar:
  label: "compare"
---

Compares two version strings by semver precedence.

Both are read leniently (see [`Version::parse_lenient`](/rust/modules/version/version/): a `v` prefix and missing minor or
patch are fine), and build metadata is ignored.

## Import

```rust
use helpers4::version::compare;
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
pub fn compare(a: &str, b: &str) -> Result<Ordering, ParseVersionError>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `a` | `&str` | The first version. |
| `b` | `&str` | The second version. |

## Returns

`Result<Ordering, ParseVersionError>` — `Ok` on success, otherwise an `Err`: see [Errors](#errors).

## Errors

The [`ParseVersionError`](#error-type-parseversionerror) of whichever string does not parse (the first one if both fail).

## Examples

```rust
use helpers4::version::compare;
use std::cmp::Ordering;

assert_eq!(compare("1.10.0", "1.9.0")?, Ordering::Greater);
assert_eq!(compare("v2", "2.0.0")?, Ordering::Equal);
assert_eq!(compare("1.0.0-rc.1", "1.0.0")?, Ordering::Less);
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

[src/version/compare.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/version/compare.rs#L33)
