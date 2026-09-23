---
title: "Bump"
description: "How much a set of changes raises a semantic version."
sidebar:
  label: "Bump"
---

How much a set of changes raises a semantic version.

Ordered from the smallest to the largest, so `max` of several levels is the one to apply.

## Import

```rust
use helpers4::commit::Bump;
```

Cargo feature `commit` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features commit
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["commit"] }
```

## Definition

```rust
pub enum Bump {
    /// Nothing that affects the version (docs, tests, chores...).
    None,
    /// A backwards-compatible fix.
    Patch,
    /// A backwards-compatible feature.
    Minor,
    /// A breaking change.
    Major,
}
```

## Examples

```rust
use helpers4::commit::Bump;

assert!(Bump::Major > Bump::Minor && Bump::Minor > Bump::Patch && Bump::Patch > Bump::None);
```

## Source

[src/commit/bump_level.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/commit/bump_level.rs#L17)
