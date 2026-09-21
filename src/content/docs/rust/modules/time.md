---
title: "time"
description: "Time helpers."
sidebar:
  order: 8
---

Time helpers. Reading the clock is explicit and fallible: a clock set before 1970 is an error, not `0`.

Cargo feature `time` (enabled by default) · import path `helpers4::time`

| Item | What it does |
| --- | --- |
| [`ClockError`](#clockerror) | The system clock is set before the Unix epoch (1970-01-01T00:00:00Z). |
| [`unix_now`](#unix_now) | The current time as whole seconds since the Unix epoch. |
| [`unix_now_millis`](#unix_now_millis) | The current time as milliseconds since the Unix epoch. |

## `ClockError`

```rust
pub struct ClockError { /* private fields */ }
```

The system clock is set before the Unix epoch (1970-01-01T00:00:00Z).

Returned instead of a silent `0`: an expiry comparison against `0` would treat every token as
still valid.

### Methods

#### `behind`

```rust
pub fn behind(&self) -> Duration
```

How far before the epoch the clock is.

## `unix_now`

```rust
pub fn unix_now() -> Result<u64, ClockError>
```

The current time as whole seconds since the Unix epoch.

### Errors

[`ClockError`](#clockerror) when the system clock is set before 1970. Do not turn that into `0`: a token
expiry checked against `0` would look valid forever.

### Examples

```rust
use helpers4::time::unix_now;

let now = unix_now()?;
assert!(now > 1_700_000_000); // after November 2023
```

## `unix_now_millis`

```rust
pub fn unix_now_millis() -> Result<u64, ClockError>
```

The current time as milliseconds since the Unix epoch.

The value saturates at `u64::MAX`, which is some 584 million years away.

### Errors

[`ClockError`](#clockerror) when the system clock is set before 1970 (see [`unix_now`](#unix_now)).

### Examples

```rust
use helpers4::time::unix_now_millis;

assert!(unix_now_millis()? > 1_700_000_000_000);
```

