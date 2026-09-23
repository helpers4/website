---
title: "Finding"
description: "One credential found by scan."
sidebar:
  label: "Finding"
---

One credential found by [`scan`](/rust/modules/secret/scan/).

## Import

```rust
use helpers4::secret::Finding;
```

Cargo feature `secret` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features secret
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["secret"] }
```

## Definition

```rust
pub struct Finding { /* private fields */ }
```

## Examples

```rust
use helpers4::secret::{scan, TokenKind};

let text = "key=AKIAIOSFODNN7EXAMPLE";
let finding = &scan(text)[0];
assert_eq!(finding.kind(), TokenKind::AwsAccessKey);
assert_eq!(&text[finding.start()..finding.end()], "AKIAIOSFODNN7EXAMPLE");
```

## Methods

### `kind`

```rust
pub fn kind(&self) -> TokenKind
```

The kind of credential.

**Returns**

`TokenKind` — The recognized [`TokenKind`](/rust/modules/secret/tokenkind/).

### `start`

```rust
pub fn start(&self) -> usize
```

The byte offset where the credential starts in the scanned text.

**Returns**

`usize` — The start, a character boundary.

### `end`

```rust
pub fn end(&self) -> usize
```

The byte offset just past the end of the credential.

**Returns**

`usize` — The end, a character boundary.

## Source

[src/secret/scan.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/secret/scan.rs#L20)
