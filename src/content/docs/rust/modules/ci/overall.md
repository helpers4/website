---
title: "overall"
description: "The single status that sums up several: the worst one wins."
sidebar:
  label: "overall"
---

The single status that sums up several: the worst one wins.

A failure beats everything, then a cancellation, then anything still pending; when everything
that ran succeeded the result is success, skipped jobs not counting against it. A list where
every job was skipped, and an empty list, sum up to [`Status::Skipped`](/rust/modules/ci/status/) (nothing ran).

## Import

```rust
use helpers4::ci::overall;
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
pub fn overall(statuses: &[Status]) -> Status
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `statuses` | `&[Status]` | The statuses of the jobs. |

## Returns

`Status` — The overall status.

## Examples

```rust
use helpers4::ci::{overall, Status};

assert_eq!(overall(&[Status::Success, Status::Skipped]), Status::Success);
assert_eq!(overall(&[Status::Success, Status::Failure, Status::Pending]), Status::Failure);
assert_eq!(overall(&[]), Status::Skipped);
```

## Source

[src/ci/overall.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ci/overall.rs#L31)
