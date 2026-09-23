---
title: "TokenKind"
description: "A well-known kind of credential, as recognized by detect."
sidebar:
  label: "TokenKind"
---

A well-known kind of credential, as recognized by [`detect`](/rust/modules/secret/detect/).

## Import

```rust
use helpers4::secret::TokenKind;
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
#[non_exhaustive]
pub enum TokenKind {
    /// A GitHub token: `ghp_`, `gho_`, `ghu_`, `ghs_` or `ghr_` followed by 36 characters, or a
    /// fine-grained `github_pat_` token.
    GitHub,
    /// An AWS access key ID: `AKIA` or `ASIA` followed by 16 upper-case letters or digits.
    AwsAccessKey,
    /// A Slack token: `xoxa-`, `xoxb-`, `xoxp-`, `xoxr-` or `xoxs-` followed by a long body.
    Slack,
    /// A Stripe secret or restricted key: `sk_live_` or `rk_live_` followed by 24 or more
    /// letters and digits.
    Stripe,
    /// A Google API key: `AIza` followed by 35 characters.
    GoogleApiKey,
    /// An npm access token: `npm_` followed by 36 letters and digits.
    Npm,
    /// A JSON Web Token: three base64url parts separated by dots, the first starting `eyJ`.
    Jwt,
    /// The header line of a PEM private key: `-----BEGIN ... PRIVATE KEY-----`.
    PrivateKey,
}
```

## Examples

```rust
use helpers4::secret::{detect, TokenKind};

assert_eq!(detect("AKIAIOSFODNN7EXAMPLE"), Some(TokenKind::AwsAccessKey));
```

## Methods

### `name`

```rust
pub fn name(self) -> &'static str
```

A short human-readable name.

**Returns**

`&'static str` — For instance `"GitHub token"` or `"AWS access key"`.

## Source

[src/secret/token_kind.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/secret/token_kind.rs#L16)
