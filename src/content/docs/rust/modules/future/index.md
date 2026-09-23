---
title: "future"
description: "Runtime-neutral helpers for Futures, built on the standard library only."
sidebar:
  label: "≡ Overview"
  order: 0
---

Runtime-neutral helpers for `Future`s, built on the standard library only.

No reactor, timer or thread pool is involved, so none of it depends on tokio, async-std or any other
runtime: `block_on` runs a future on the current thread, `join` and `join_all` combine futures on
one task, and `now_or_never` and `yield_now` are the small building blocks around them.

## Install

Cargo feature `future` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features future
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["future"] }
```

Import path: `helpers4::future`.

## Items

| Item | What it does |
| --- | --- |
| [`block_on`](/rust/modules/future/block_on/) | Runs `future` to completion on the current thread and returns its output. |
| [`join`](/rust/modules/future/join/) | Runs two futures concurrently and completes with both outputs, once both are done. |
| [`join_all`](/rust/modules/future/join_all/) | Runs any number of futures concurrently and completes with all their outputs, in the order the futures were given. |
| [`now_or_never`](/rust/modules/future/now_or_never/) | Polls `future` exactly once and returns its output if it was already ready. |
| [`yield_now`](/rust/modules/future/yield_now/) | A future that gives other tasks a turn: it is pending once, then completes. |
