---
title: "bump_for"
description: "The largest version bump called for by any of commits."
sidebar:
  label: "bump_for"
---

The largest version bump called for by any of `commits`.

One breaking change means [`Bump::Major`](/rust/modules/commit/bump/); otherwise a `feat` means [`Bump::Minor`](/rust/modules/commit/bump/), a `fix`
[`Bump::Patch`](/rust/modules/commit/bump/), and commits of other types (docs, tests, chores) do not bump the version.
An empty list gives [`Bump::None`](/rust/modules/commit/bump/).

## Import

```rust
use helpers4::commit::bump_for;
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

## Signature

```rust
pub fn bump_for(commits: &[Commit]) -> Bump
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `commits` | `&[Commit]` | The parsed commits of a release, in any order. |

## Returns

`Bump` — The bump to apply to the current version.

## Examples

```rust
use helpers4::commit::{bump_for, Bump, Commit};

let commits = [
    Commit::parse("docs: update the readme")?,
    Commit::parse("fix: handle empty input")?,
    Commit::parse("feat: add a helper")?,
];
assert_eq!(bump_for(&commits), Bump::Minor);
```

## Source

[src/commit/bump_for.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/commit/bump_for.rs#L35)
