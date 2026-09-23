---
title: "Status"
description: "The outcome of a CI job or step."
sidebar:
  label: "Status"
---

The outcome of a CI job or step.

## Import

```rust
use helpers4::ci::Status;
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
pub enum Status {
    /// Finished without errors.
    Success,
    /// Finished with an error, or timed out.
    Failure,
    /// Stopped before it finished.
    Cancelled,
    /// Not run.
    Skipped,
    /// Queued or still running.
    Pending,
}
```

## Examples

```rust
use helpers4::ci::Status;

assert_eq!(Status::from_conclusion("failure"), Some(Status::Failure));
assert_eq!(Status::Success.icon(), "\u{2705}");
assert_eq!(Status::Success.label(), "success");
```

## Methods

### `from_conclusion`

```rust
pub fn from_conclusion(conclusion: &str) -> Option<Self>
```

Reads the conclusion names CI services use, ignoring case.

`success`, `passed` and `pass` are [`Status::Success`](/rust/modules/ci/status/); `failure`, `failed`, `error` and
`timed_out` are [`Status::Failure`](/rust/modules/ci/status/); `cancelled` and `canceled` are [`Status::Cancelled`](/rust/modules/ci/status/);
`skipped` is [`Status::Skipped`](/rust/modules/ci/status/); `pending`, `queued`, `in_progress` and `running` are
[`Status::Pending`](/rust/modules/ci/status/).

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `conclusion` | `&str` | The name, such as `"success"` or `"cancelled"`. |

**Returns**

`Option<Self>` — The status, or `None` for a name that is not one of those.

### `icon`

```rust
pub fn icon(self) -> &'static str
```

An emoji for the status, for a report or a PR comment.

**Returns**

`&'static str` — `\u{2705}` for success, `\u{274c}` for failure, `\u{1f6ab}` for cancelled, `\u{23ed}\u{fe0f}` for skipped
and `\u{23f3}` for pending.

### `label`

```rust
pub fn label(self) -> &'static str
```

The lower-case name of the status.

**Returns**

`&'static str` — `"success"`, `"failure"`, `"cancelled"`, `"skipped"` or `"pending"`.

## Source

[src/ci/status.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ci/status.rs#L19)
