---
title: "is_pull_request"
description: "Whether the current CI run was triggered by a pull request (or merge request)."
sidebar:
  label: "is_pull_request"
---

Whether the current CI run was triggered by a pull request (or merge request).

It looks at the variable each service sets for that: `GITHUB_EVENT_NAME` (`pull_request` or
`pull_request_target`), `CI_MERGE_REQUEST_IID` on GitLab, `CIRCLE_PULL_REQUEST`,
`TRAVIS_PULL_REQUEST`, `BUILDKITE_PULL_REQUEST`, `SYSTEM_PULLREQUEST_PULLREQUESTID` on Azure,
`BITBUCKET_PR_ID`, `DRONE_PULL_REQUEST`, `APPVEYOR_PULL_REQUEST_NUMBER`, `PULL_REQUEST` on
Netlify and `VERCEL_GIT_PULL_REQUEST_ID`. Services without a known variable (Jenkins,
TeamCity, ...) and any environment outside CI give `false`.

## Import

```rust
use helpers4::ci::is_pull_request;
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

## Signature

```rust
pub fn is_pull_request(get: &dyn Fn(&str) -> Option<String>) -> bool
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `get` | `&dyn Fn(&str) -> Option<String>` | Looks a variable up by name. |

## Returns

`bool` — `true` for a pull request run.

## Examples

```rust
use helpers4::ci::is_pull_request;

let env = |name: &str| match name {
    "GITHUB_ACTIONS" => Some("true".to_string()),
    "GITHUB_EVENT_NAME" => Some("pull_request".to_string()),
    _ => None,
};
assert!(is_pull_request(&env));
```

## Source

[src/ci/is_pull_request.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ci/is_pull_request.rs#L38)
