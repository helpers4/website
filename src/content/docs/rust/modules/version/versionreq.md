---
title: "VersionReq"
description: "A version requirement such as ^1.2, >=1.0, <2.0 or 1.*: which versions are acceptable."
sidebar:
  label: "VersionReq"
---

A version requirement such as `^1.2`, `>=1.0, <2.0` or `1.*`: which versions are acceptable.

The syntax and the rules are Cargo's. A requirement is comma-separated comparators that must
all match. Operators: `=`, `>`, `>=`, `<`, `<=`, `~` (tilde: patch-level changes, or minor when
the patch is omitted), `^` (caret: changes that keep the left-most non-zero number), and none,
which means caret. `1`, `1.2` and `1.2.3` may be partial; `*`, `x` and `X` are wildcards
(`1.*`, `1.2.x`, or `*` alone for anything). A pre-release version only matches a
requirement that names a pre-release of the same `MAJOR.MINOR.PATCH`.

## Import

```rust
use helpers4::version::VersionReq;
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

## Definition

```rust
pub struct VersionReq { /* private fields */ }
```

## Examples

```rust
use helpers4::version::{Version, VersionReq};

let req = VersionReq::parse("^1.2")?;
assert!(req.matches(&Version::parse("1.9.0")?));
assert!(!req.matches(&Version::parse("2.0.0")?));
assert!(!req.matches(&Version::parse("1.1.9")?));

let range = VersionReq::parse(">=1.0, <1.5")?;
assert!(range.matches(&Version::parse("1.4.9")?));
```

## Methods

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, ParseVersionError>
```

Parses a requirement.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The requirement, such as `"^1.2"`, `">=1.0, <2.0"` or `"*"`. |

**Returns**

`Result<Self, ParseVersionError>`

**Errors**

A [`ParseVersionError`](#error-type-parseversionerror): [`Empty`](#error-type-parseversionerror) for an empty text,
[`InvalidComparator`](#error-type-parseversionerror) for a malformed comparator
(unknown operator, a wildcard with an operator other than `=`, a pre-release on a partial
version, build metadata), or the number and identifier errors of [`Version::parse`](/rust/modules/env/parse/).

### `matches`

```rust
pub fn matches(&self, version: &Version) -> bool
```

Whether `version` satisfies every comparator (and the pre-release rule).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `version` | `&Version` | The version to check. |

**Returns**

`bool` — `true` when the version is acceptable.

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

[src/version/version_req.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/version/version_req.rs#L33)
