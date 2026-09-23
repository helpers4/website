---
title: "Commit"
description: "A parsed [Conventional Commits 1.0.0](https://www.conventionalcommits.org) message: type(scope)!: description, then an optional body and optional footers."
sidebar:
  label: "Commit"
---

A parsed [Conventional Commits 1.0.0](https://www.conventionalcommits.org) message:
`type(scope)!: description`, then an optional body and optional footers.

The parser follows the specification: the header is `type`, an optional `(scope)`, an optional
`!` and `: `, then the description; a blank line separates the header from the body; footers
(`Token: value` or `Token #value`, with the token in words joined by `-` or exactly
`BREAKING CHANGE`) start at the first such line that follows a blank line and run to the end.
A commit is breaking when it has the `!` or a `BREAKING CHANGE` footer. Text such as an
emoji before the description is part of the description.

## Import

```rust
use helpers4::commit::Commit;
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
pub struct Commit { /* private fields */ }
```

## Examples

```rust
use helpers4::commit::{Bump, Commit};

let commit = Commit::parse("feat(api)!: drop the v1 routes\n\nThey were deprecated.\n\nRefs #42")?;
assert_eq!(commit.kind(), "feat");
assert_eq!(commit.scope(), Some("api"));
assert!(commit.is_breaking());
assert_eq!(commit.description(), "drop the v1 routes");
assert_eq!(commit.body(), Some("They were deprecated."));
assert_eq!(commit.footer("refs"), Some("42"));
assert_eq!(commit.bump(), Bump::Major);
```

## Methods

### `parse`

```rust
pub fn parse(message: &str) -> Result<Self, ParseCommitError>
```

Parses a commit message.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `message` | `&str` | The whole message: header, then optionally a blank line, a body and footers. |

**Returns**

`Result<Self, ParseCommitError>`

**Errors**

A [`ParseCommitError`](#error-type-parsecommiterror) when the message is empty, the header does not look like
`type(scope): description`, or the line after the header is not blank.

### `kind`

```rust
pub fn kind(&self) -> &str
```

The commit type as written, such as `"feat"` or `"fix"`.

**Returns**

`&str` — The type, without the scope or the `!`.

### `scope`

```rust
pub fn scope(&self) -> Option<&str>
```

The scope between the parentheses.

**Returns**

`Option<&str>` — The scope, or `None` when there is none.

### `is_breaking`

```rust
pub fn is_breaking(&self) -> bool
```

Whether the commit is a breaking change: `!` in the header or a `BREAKING CHANGE` footer.

**Returns**

`bool` — `true` for a breaking change.

### `description`

```rust
pub fn description(&self) -> &str
```

The description after the `: `, trimmed.

**Returns**

`&str` — The one-line summary.

### `body`

```rust
pub fn body(&self) -> Option<&str>
```

The free-form body between the header and the footers.

**Returns**

`Option<&str>` — The body with its line breaks, or `None` when there is none.

### `footers`

```rust
pub fn footers(&self) -> &[(String, String)]
```

Every footer, in order, as `(token, value)`.

**Returns**

`&[(String, String)]` — The footers, such as `("Refs", "42")` or `("BREAKING CHANGE", "the API changed")`.

### `footer`

```rust
pub fn footer(&self, token: &str) -> Option<&str>
```

The value of the first footer with the given token, ignoring case.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `token` | `&str` | The footer token, such as `"Refs"` or `"BREAKING CHANGE"`. |

**Returns**

`Option<&str>` — The value, or `None` when there is no such footer.

### `bump`

```rust
pub fn bump(&self) -> Bump
```

The version bump this commit calls for under Semantic Versioning: [`Bump::Major`](/rust/modules/commit/bump/) for a
breaking change, [`Bump::Minor`](/rust/modules/commit/bump/) for `feat`, [`Bump::Patch`](/rust/modules/commit/bump/) for `fix`, otherwise
[`Bump::None`](/rust/modules/commit/bump/). The type is matched ignoring case.

**Returns**

`Bump` — The bump level.

## Error type: ParseCommitError

Why a commit message is not a valid Conventional Commit.

```rust
use helpers4::commit::ParseCommitError;

#[non_exhaustive]
pub enum ParseCommitError {
    /// The message is empty or only whitespace.
    Empty,
    /// The first line has no `type: description` shape (no `:` followed by a space).
    MissingSeparator,
    /// The type is empty or has a character outside letters, digits, `-` and `_`.
    InvalidType,
    /// The scope in parentheses is empty, contains parentheses, or is not closed.
    InvalidScope,
    /// Nothing follows the `: `.
    EmptyDescription,
    /// The line after the header is not blank.
    MissingBlankLine,
}
```

## Source

[src/commit/conventional_commit.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/commit/conventional_commit.rs#L35)
