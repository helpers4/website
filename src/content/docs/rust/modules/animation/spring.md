---
title: "Spring"
description: "A damped spring going from 0.0 to 1.0: the curve behind \"spring\" transitions of design tools, with the time it takes to settle."
sidebar:
  label: "Spring"
---

A damped spring going from `0.0` to `1.0`: the curve behind "spring" transitions of design
tools, with the time it takes to settle.

The motion is solved exactly (under-, critically or over-damped), not by stepping a
simulation, so [`at`](#at) can be called at any time, in any order.

## Import

```rust
use helpers4::animation::Spring;
```

Cargo feature `animation` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features animation
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.9", default-features = false, features = ["animation"] }
```

## Definition

```rust
pub struct Spring { /* private fields */ }
```

## Examples

```rust
use helpers4::animation::Spring;

let bouncy = Spring::new(1.0, 300.0, 15.0, 0.0).expect("valid physics");
assert_eq!(bouncy.at(0.0), 0.0);
assert_eq!(bouncy.at(bouncy.duration_ms()), 1.0); // settled
assert!(bouncy.at(bouncy.duration_ms() * 0.3) > 1.0); // overshoots on the way
```

## Methods

### `new`

```rust
pub fn new(mass: f64, stiffness: f64, damping: f64, initial_velocity: f64) -> Option<Self>
```

A spring from its physical parameters, as design tools (Figma, Framer, …) expose them.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `mass` | `f64` | Mass of the moving object, `> 0`. `1.0` is typical. |
| `stiffness` | `f64` | Stiffness of the spring, `> 0`: higher is faster. `100.0` is typical. |
| `damping` | `f64` | Friction, `> 0`: higher oscillates less. `10.0` is typical. |
| `initial_velocity` | `f64` | Starting speed toward the target, in progress per second. |

**Returns**

`Option<Self>` — The spring, or `None` when a parameter is not finite, or `mass`, `stiffness` or `damping`
is not positive, or the spring never settles within a finite time.

**Examples**

```rust
use helpers4::animation::Spring;

assert!(Spring::new(1.0, 100.0, 10.0, 0.0).is_some());
assert!(Spring::new(0.0, 100.0, 10.0, 0.0).is_none());
```

### `duration_ms`

```rust
pub fn duration_ms(&self) -> f64
```

The time until the spring settles, from which it stays within `0.001` of its target.

**Returns**

`f64` — Milliseconds, at least `1.0`.

**Examples**

```rust
use helpers4::animation::Spring;

let spring = Spring::default();
assert!(spring.duration_ms() > 1000.0 && spring.duration_ms() < 1500.0);
```

### `at`

```rust
pub fn at(&self, time_ms: f64) -> f64
```

The progress at a time: `0.0` at the start, exactly `1.0` from
[`duration_ms`](#duration_ms) on, and possibly above `1.0` while oscillating.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `time_ms` | `f64` | Milliseconds since the start. A time before the start (or `NaN`) gives `0.0`. |

**Returns**

`f64` — The progress.

**Examples**

```rust
use helpers4::animation::Spring;

let spring = Spring::default();
assert_eq!(spring.at(-5.0), 0.0);
assert_eq!(spring.at(10_000.0), 1.0);
```

### `easing`

```rust
pub fn easing(&self, t: f64) -> f64
```

The same curve as an easing over `0.0..=1.0`: the fraction of
[`duration_ms`](#duration_ms), for [`to_css_linear`](/rust/modules/animation/to_css_linear/) or any
animation that takes an easing function.

**Parameters**

| Parameter | Type | Description |
| --- | --- | --- |
| `t` | `f64` | The progress of time, `0.0..=1.0`. |

**Returns**

`f64` — The progress.

**Examples**

```rust
use helpers4::animation::Spring;

let spring = Spring::default();
assert_eq!(spring.easing(0.0), 0.0);
assert_eq!(spring.easing(1.0), 1.0);
```

## Source

[src/animation/spring.rs](https://github.com/helpers4/rust/blob/v0.0.9/src/animation/spring.rs#L25)
