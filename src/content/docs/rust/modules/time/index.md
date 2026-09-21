---
title: "time"
description: "Time helpers."
sidebar:
  label: "≡ Overview"
  order: 0
---

Time helpers. Reading the clock is explicit and fallible: a clock set before 1970 is an error, not `0`.

## Install

Cargo feature `time` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features time
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.4", default-features = false, features = ["time"] }
```

Import path: `helpers4::time`.

## Items

| Item | What it does |
| --- | --- |
| [`unix_now`](/rust/modules/time/unix_now/) | The current time as whole seconds since the Unix epoch. |
| [`unix_now_millis`](/rust/modules/time/unix_now_millis/) | The current time as milliseconds since the Unix epoch. |

## Error types

Documented on the page of the helper that returns them.

| Type | Returned by |
| --- | --- |
| [`ClockError`](/rust/modules/time/unix_now/#error-type-clockerror) | [`unix_now`](/rust/modules/time/unix_now/), [`unix_now_millis`](/rust/modules/time/unix_now_millis/) |
