---
title: "commit"
description: "Conventional Commits: parse a message, decide the version bump, validate."
sidebar:
  label: "≡ Overview"
  order: 0
---

Conventional Commits: parse a message, decide the version bump, validate.

[`Commit`](/rust/modules/commit/commit/) parses `type(scope)!: description` with its body and footers, following the
specification; [`Bump`](/rust/modules/commit/bump/) and `bump_for` turn a list of commits into the semantic-version bump they
call for, `is_valid` is the yes/no shortcut, and `emoji_for` gives the gitmoji of the helpers4
convention.

## Install

Cargo feature `commit` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features commit
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["commit"] }
```

Import path: `helpers4::commit`.

## Items

| Item | What it does |
| --- | --- |
| [`bump_for`](/rust/modules/commit/bump_for/) | The largest version bump called for by any of `commits`. |
| [`Bump`](/rust/modules/commit/bump/) | How much a set of changes raises a semantic version. |
| [`Commit`](/rust/modules/commit/commit/) | A parsed [Conventional Commits 1.0.0](https://www.conventionalcommits.org) message: `type(scope)!: description`, then an optional body and optional footers. |
| [`emoji_for`](/rust/modules/commit/emoji_for/) | The emoji the helpers4 commit convention puts after the colon for a commit type, such as `✨` for `feat` and `🐛` for `fix`. |
| [`is_valid`](/rust/modules/commit/is_valid/) | Whether `message` is a valid Conventional Commit. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`ParseCommitError`](/rust/modules/commit/commit/#error-type-parsecommiterror) | [`Commit`](/rust/modules/commit/commit/) |
