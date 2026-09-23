---
title: "Provider"
description: "A continuous-integration service, as recognized by detect."
sidebar:
  label: "Provider"
---

A continuous-integration service, as recognized by [`detect`](/rust/modules/secret/detect/).

## Import

```rust
use helpers4::ci::Provider;
```

Cargo feature `ci` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features ci
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["ci"] }
```

## Definition

```rust
#[non_exhaustive]
pub enum Provider {
    /// GitHub Actions.
    GitHubActions,
    /// GitLab CI/CD.
    GitLabCi,
    /// CircleCI.
    CircleCi,
    /// Travis CI.
    TravisCi,
    /// Buildkite.
    Buildkite,
    /// Azure Pipelines.
    AzurePipelines,
    /// Bitbucket Pipelines.
    BitbucketPipelines,
    /// Drone.
    Drone,
    /// TeamCity.
    TeamCity,
    /// AppVeyor.
    AppVeyor,
    /// AWS CodeBuild.
    AwsCodeBuild,
    /// Jenkins.
    Jenkins,
    /// Netlify builds.
    Netlify,
    /// Vercel builds.
    Vercel,
    /// Cloudflare Pages builds.
    CloudflarePages,
    /// An unrecognized service that sets the conventional `CI` variable.
    Other,
}
```

## Examples

```rust
use helpers4::ci::Provider;

assert_eq!(Provider::GitHubActions.name(), "GitHub Actions");
```

## Methods

### `name`

```rust
pub fn name(self) -> &'static str
```

The service name as its vendor writes it.

**Returns**

`&'static str` — For instance `"GitHub Actions"`; `"CI"` for [`Provider::Other`](/rust/modules/ci/provider/).

## Source

[src/ci/provider.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ci/provider.rs#L16)
