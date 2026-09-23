---
title: "emoji_for"
description: "The emoji the helpers4 commit convention puts after the colon for a commit type, such as ✨ for feat and 🐛 for fix."
sidebar:
  label: "emoji_for"
---

The emoji the helpers4 commit convention puts after the colon for a commit type, such as `✨`
for `feat` and `🐛` for `fix`.

The type is matched ignoring case. These are the primary emoji of the convention (see
`commit-convention.json` in the `.dev` repository), one per standard type: `feat`, `fix`,
`docs`, `refactor`, `test`, `chore`, `perf`, `style`, `ci`, `build` and `revert`.

## Import

```rust
use helpers4::commit::emoji_for;
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
pub fn emoji_for(kind: &str) -> Option<&'static str>
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `kind` | `&str` | The commit type, such as `"feat"`. |

## Returns

`Option<&'static str>` — The emoji, or `None` for a type the convention does not define.

## Examples

```rust
use helpers4::commit::emoji_for;

assert_eq!(emoji_for("feat"), Some("\u{2728}"));
assert_eq!(emoji_for("FIX"), Some("\u{1f41b}"));
assert_eq!(emoji_for("wip"), None);
```

## Source

[src/commit/emoji_for.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/commit/emoji_for.rs#L30)
