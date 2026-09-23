---
title: "ci"
description: "Detecting CI environments and reporting pipeline status."
sidebar:
  label: "≡ Overview"
  order: 0
---

Detecting CI environments and reporting pipeline status.

`detect`, `is_ci` and `is_pull_request` take the environment as a lookup function instead of reading it,
so they are as easy to test as to use (`&|name| std::env::var(name).ok()`). [`Status`](/rust/modules/ci/status/), `overall` and
`render_report` turn job results into the Markdown summary of a PR comment.

## Install

Cargo feature `ci` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features ci
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["ci"] }
```

Import path: `helpers4::ci`.

## Items

| Item | What it does |
| --- | --- |
| [`detect`](/rust/modules/ci/detect/) | Which CI service the environment belongs to, if any. |
| [`is_ci`](/rust/modules/ci/is_ci/) | Whether the environment looks like a CI run. |
| [`is_pull_request`](/rust/modules/ci/is_pull_request/) | Whether the current CI run was triggered by a pull request (or merge request). |
| [`overall`](/rust/modules/ci/overall/) | The single status that sums up several: the worst one wins. |
| [`Provider`](/rust/modules/ci/provider/) | A continuous-integration service, as recognized by `detect`. |
| [`render_report`](/rust/modules/ci/render_report/) | A Markdown summary of a pipeline, ready for a PR comment or a job summary. |
| [`Status`](/rust/modules/ci/status/) | The outcome of a CI job or step. |
