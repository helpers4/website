---
title: "Version"
description: "A [Semantic Versioning 2.0.0](https://semver.org) version: MAJOR.MINOR.PATCH, optionally with a pre-release (-alpha.1) and build metadata (+sha.5114f85)."
sidebar:
  label: "Version"
---

A [Semantic Versioning 2.0.0](https://semver.org) version: `MAJOR.MINOR.PATCH`, optionally
with a pre-release (`-alpha.1`) and build metadata (`+sha.5114f85`).

[`Version::parse`](/rust/modules/env/parse/) is strict semver; [`Version::parse_lenient`](/rust/modules/version/version/) also takes `v1.2`. Versions
order by semver precedence (a pre-release sorts before its release, numeric identifiers
compare as numbers); build metadata does not count for precedence
([`precedence`](#precedence)) but breaks ties in `Ord` so that it stays consistent with
`Eq`.

## Import

```rust
use helpers4::version::Version;
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
pub struct Version { /* private fields */ }
```

## Examples

```rust
use helpers4::version::Version;

let v = Version::parse("1.4.2-rc.1+build.7")?;
assert_eq!((v.major(), v.minor(), v.patch()), (1, 4, 2));
assert_eq!(v.pre(), Some("rc.1"));
assert!(v < Version::parse("1.4.2")?);
assert_eq!(v.bump_minor().to_string(), "1.5.0");
```

## Methods

### `new`

```rust
pub fn new(major: u64, minor: u64, patch: u64) -> Self
```

A release version, with no pre-release or build metadata.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `major` | `u64` | The major version. |
| `minor` | `u64` | The minor version. |
| `patch` | `u64` | The patch version. |

**Returns**

`Self` — The version `major.minor.patch`.

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, ParseVersionError>
```

Parses a strict semver version: exactly `MAJOR.MINOR.PATCH`, then optionally `-PRERELEASE`
and `+BUILD`. No `v` prefix, no missing parts, no leading zeros in the numbers.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The version to parse. |

**Returns**

`Result<Self, ParseVersionError>`

**Errors**

A [`ParseVersionError`](#error-type-parseversionerror) naming what is wrong: an empty text, a missing or invalid number,
a leading zero, or a bad pre-release or build identifier.

### `parse_lenient`

```rust
pub fn parse_lenient(text: &str) -> Result<Self, ParseVersionError>
```

Parses a version the way people write it: surrounding whitespace and a leading `v` or `V`
are ignored, and a missing minor or patch is `0` (`"v1.2"` is `1.2.0`, `"3"` is `3.0.0`).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The version to parse. |

**Returns**

`Result<Self, ParseVersionError>`

**Errors**

The same [`ParseVersionError`](#error-type-parseversionerror)s as [`Version::parse`](/rust/modules/env/parse/), except that a missing minor or
patch is not an error.

### `major`

```rust
pub fn major(&self) -> u64
```

The major version.

**Returns**

`u64` — The first number.

### `minor`

```rust
pub fn minor(&self) -> u64
```

The minor version.

**Returns**

`u64` — The second number.

### `patch`

```rust
pub fn patch(&self) -> u64
```

The patch version.

**Returns**

`u64` — The third number.

### `pre`

```rust
pub fn pre(&self) -> Option<&str>
```

The pre-release identifiers, without the leading `-`.

**Returns**

`Option<&str>` — For instance `Some("alpha.1")`, or `None` for a release.

### `build`

```rust
pub fn build(&self) -> Option<&str>
```

The build metadata, without the leading `+`.

**Returns**

`Option<&str>` — For instance `Some("sha.5114f85")`, or `None`.

### `is_prerelease`

```rust
pub fn is_prerelease(&self) -> bool
```

Whether this is a pre-release (it has a `-...` part).

**Returns**

`bool` — `true` for `1.0.0-alpha`, `false` for `1.0.0`.

### `bump_major`

```rust
pub fn bump_major(&self) -> Self
```

The next major version: `1.4.2-rc.1` gives `2.0.0`.

**Returns**

`Self` — A release with the major version incremented and the rest reset. It saturates at
`u64::MAX` instead of overflowing.

### `bump_minor`

```rust
pub fn bump_minor(&self) -> Self
```

The next minor version: `1.4.2-rc.1` gives `1.5.0`.

**Returns**

`Self` — A release with the minor version incremented and the patch reset. It saturates at
`u64::MAX` instead of overflowing.

### `bump_patch`

```rust
pub fn bump_patch(&self) -> Self
```

The next patch version: `1.4.2-rc.1` gives `1.4.3`.

**Returns**

`Self` — A release with the patch version incremented. It saturates at `u64::MAX` instead of
overflowing.

### `precedence`

```rust
pub fn precedence(&self, other: &Self) -> Ordering
```

Compares two versions by semver precedence: build metadata is ignored, so `1.0.0+a` and
`1.0.0+b` are equal here.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `other` | `&Self` | The version to compare with. |

**Returns**

`Ordering` — How this version orders relative to `other`.

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

[src/version/semantic_version.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/version/semantic_version.rs#L33)
