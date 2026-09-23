---
title: "duration"
description: "Parsing and formatting of durations as short human-readable strings (1h30m)."
sidebar:
  label: "≡ Overview"
  order: 0
---

Parsing and formatting of durations as short human-readable strings (`1h30m`).

The strings use the units `ms`, `s`, `m`, `h`, `d` and `w`. Values are `std::time::Duration`.

## Install

Cargo feature `duration` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features duration
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["duration"] }
```

Import path: `helpers4::duration`.

## Items

| Item | What it does |
| --- | --- |
| [`format`](/rust/modules/duration/format/) | Formats `duration` as a short human-readable string such as `"1h 30m 5s"`. |
| [`parse`](/rust/modules/duration/parse/) | Parses a human-written duration such as `"1h30m"`, `"2d"` or `"500ms"`. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`ParseDurationError`](/rust/modules/duration/parse/#error-type-parsedurationerror) | [`parse`](/rust/modules/duration/parse/) |
