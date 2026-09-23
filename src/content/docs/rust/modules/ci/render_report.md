---
title: "render_report"
description: "A Markdown summary of a pipeline, ready for a PR comment or a job summary."
sidebar:
  label: "render_report"
---

A Markdown summary of a pipeline, ready for a PR comment or a job summary.

One heading with the overall status (the worst of the jobs, see [`overall`](/rust/modules/ci/overall/)),
then a table with one row per job in the order given: its icon, name and status. A `|` in a job
name is escaped and line breaks in the title or a name become spaces, so nothing can break the
table. There is no trailing newline.

## Import

```rust
use helpers4::ci::render_report;
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
pub fn render_report(title: &str, jobs: &[(&str, Status)]) -> String
```

## Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `title` | `&str` | The heading, such as `"Pull Request Validation"`. |
| `jobs` | `&[(&str, Status)]` | The jobs with their status, as `(name, status)`. |

## Returns

`String` — The Markdown text.

## Examples

```rust
use helpers4::ci::{render_report, Status};

let report = render_report("Validation", &[("build", Status::Success), ("tests", Status::Failure)]);
assert!(report.starts_with("### \u{274c} Validation"));
assert!(report.contains("| \u{2705} | build | `success` |"));
```

## Source

[src/ci/render_report.rs](https://github.com/helpers4/rust/blob/v0.0.6/src/ci/render_report.rs#L33)
