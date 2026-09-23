---
title: "Expression"
description: "An [SPDX license expression](https://spdx.github.io/spdx-spec/v2.3/SPDX-license-expressions/): one license, or several combined with AND and OR."
sidebar:
  label: "Expression"
---

An [SPDX license expression](https://spdx.github.io/spdx-spec/v2.3/SPDX-license-expressions/):
one license, or several combined with `AND` and `OR`.

The syntax is `MIT`, `GPL-2.0-or-later`, `Apache-2.0 WITH LLVM-exception`, `MIT OR Apache-2.0`
and `(MIT OR Apache-2.0) AND BSD-3-Clause`, with `WITH` binding tighter than `AND`, and `AND`
tighter than `OR`. Operators are upper case, and the legacy `MIT/Apache-2.0` of older Cargo
manifests is read as `OR`. A trailing `+` on an identifier is kept (`GPL-2.0+`). Identifiers
are only checked for their shape: use [`unknown_ids`](#unknown_ids) to find the ones this
crate does not list. `Display` writes the expression back, with parentheses only where they
change the meaning.

## Import

```rust
use helpers4::license::Expression;
```

Cargo feature `license` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features license
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["license"] }
```

## Definition

```rust
pub struct Expression { /* private fields */ }
```

## Examples

```rust
use helpers4::license::Expression;

let expr = Expression::parse("(MIT OR Apache-2.0) AND BSD-3-Clause")?;
assert_eq!(expr.licenses(), ["MIT", "Apache-2.0", "BSD-3-Clause"]);
// A policy that allows MIT and BSD-3-Clause is satisfied:
assert!(expr.is_satisfied_by(&["MIT", "BSD-3-Clause"]));
// ... one that only allows MIT is not.
assert!(!expr.is_satisfied_by(&["MIT"]));
```

## Methods

### `parse`

```rust
pub fn parse(text: &str) -> Result<Self, ParseExpressionError>
```

Parses an SPDX license expression.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `text` | `&str` | The expression, such as `"MIT OR Apache-2.0"`. |

**Returns**

`Result<Self, ParseExpressionError>`

**Errors**

A [`ParseExpressionError`](#error-type-parseexpressionerror) for an empty expression, one that ends too early, a token in
the wrong place, a malformed identifier, or an unclosed parenthesis.

### `licenses`

```rust
pub fn licenses(&self) -> Vec<&str>
```

The license identifiers used, in order of first appearance, without repeats.

**Returns**

`Vec<&str>` — The identifiers as written, without the exceptions after `WITH`.

### `unknown_ids`

```rust
pub fn unknown_ids(&self) -> Vec<&str>
```

The identifiers that are neither in this crate's list of licenses (see
[`lookup`](/rust/modules/license/lookup/)) nor a `LicenseRef-` / `DocumentRef-` reference.

**Returns**

`Vec<&str>` — The identifiers to double-check: a typo, or a license this crate does not list.

### `is_satisfied_by`

```rust
pub fn is_satisfied_by(&self, allowed: &[&str]) -> bool
```

Whether a policy that allows exactly the licenses in `allowed` accepts this expression:
`OR` needs one side, `AND` needs both, and a `WITH` exception never makes a license less
acceptable than the license alone.

Identifiers are compared ignoring case and exactly otherwise (`GPL-2.0+` is not
`GPL-2.0-or-later`; call [`normalize`](/rust/modules/license/normalize/) first if that matters).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `allowed` | `&[&str]` | The identifiers the policy accepts. |

**Returns**

`bool` — `true` when the expression can be satisfied with those licenses.

## Error type: ParseExpressionError

Why a string is not a valid SPDX license expression.

```rust
use helpers4::license::ParseExpressionError;

#[non_exhaustive]
pub enum ParseExpressionError {
    /// The expression is empty or only whitespace.
    Empty,
    /// The expression stops where a license or an operand is expected (`MIT OR`).
    UnexpectedEnd,
    /// A token that cannot come here: two licenses in a row, a stray `)`, an operator with
    /// nothing before it.
    UnexpectedToken {
        /// Byte offset of the token in the expression.
        index: usize,
    },
    /// A license identifier with a character outside letters, digits, `.`, `-` and `:`.
    InvalidIdentifier {
        /// Byte offset of the identifier in the expression.
        index: usize,
    },
    /// An opening parenthesis that is never closed.
    UnclosedParenthesis {
        /// Byte offset of the `(`.
        index: usize,
    },
}
```

## Source

[src/license/expression.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/license/expression.rs#L34)
