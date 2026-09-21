---
title: "array"
description: "Helpers for slices and Vecs that the standard library does not provide."
sidebar:
  order: 1
---

Helpers for slices and `Vec`s that the standard library does not provide.

Inputs are borrowed slices and results are new `Vec`s: nothing is mutated. Membership-based
helpers require `Eq + Hash`.

Cargo feature `array` (enabled by default) · import path `helpers4::array`

| Item | What it does |
| --- | --- |
| [`cartesian_product`](#cartesian_product) | Returns every pair `(x, y)` with `x` from `a` and `y` from `b`, in row-major order. |
| [`count_by`](#count_by) | Counts the elements of `items` per key returned by `key`. |
| [`difference`](#difference) | Returns the elements of `a` that are not in `b`, in `a`'s order. |
| [`equals_unordered`](#equals_unordered) | Returns `true` when `a` and `b` hold the same elements the same number of times, in any order. |
| [`group_by`](#group_by) | Groups the elements of `items` by the key returned by `key`. |
| [`intersection`](#intersection) | Returns the elements of `a` that also appear in `b`, in `a`'s order. |
| [`intersects`](#intersects) | Returns `true` when `a` and `b` share at least one element. |
| [`symmetric_difference`](#symmetric_difference) | Returns the elements present in exactly one of `a` and `b`. |
| [`unique`](#unique) | Removes duplicate values, keeping the first occurrence of each and the original order. |
| [`unique_by`](#unique_by) | Removes elements whose `key` was already seen, keeping the first of each key in order. |

## `cartesian_product`

```rust
pub fn cartesian_product<A: Clone, B: Clone>(a: &[A], b: &[B]) -> Vec<(A, B)>
```

Returns every pair `(x, y)` with `x` from `a` and `y` from `b`, in row-major order.

For more than two inputs, nest the calls.

### Examples

```rust
use helpers4::array::cartesian_product;

assert_eq!(
    cartesian_product(&[1, 2], &['a', 'b']),
    vec![(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]
);
```

## `count_by`

```rust
pub fn count_by<T, K: Eq + Hash>(items: &[T], mut key: impl FnMut(&T) -> K) -> HashMap<K, usize>
```

Counts the elements of `items` per key returned by `key`.

### Examples

```rust
use helpers4::array::count_by;

let counts = count_by(&[1, 2, 3, 4, 5], |n| if n % 2 == 0 { "even" } else { "odd" });
assert_eq!(counts["odd"], 3);
assert_eq!(counts["even"], 2);
```

## `difference`

```rust
pub fn difference<T: Clone + Eq + Hash>(a: &[T], b: &[T]) -> Vec<T>
```

Returns the elements of `a` that are not in `b`, in `a`'s order.

Duplicates in `a` are kept: only membership in `b` decides whether an element stays.

### Examples

```rust
use helpers4::array::difference;

assert_eq!(difference(&[1, 2, 3, 2], &[2]), vec![1, 3]);
assert_eq!(difference(&[1, 1, 2], &[3]), vec![1, 1, 2]);
```

## `equals_unordered`

```rust
pub fn equals_unordered<T: Eq + Hash>(a: &[T], b: &[T]) -> bool
```

Returns `true` when `a` and `b` hold the same elements the same number of times, in any order.

Use it for collections where order is meaningless (tags, ids). For positional equality,
compare the slices with `==`.

### Examples

```rust
use helpers4::array::equals_unordered;

assert!(equals_unordered(&[1, 2, 2, 3], &[3, 2, 1, 2]));
assert!(!equals_unordered(&[1, 2, 2], &[1, 1, 2]));
```

## `group_by`

```rust
pub fn group_by<T: Clone, K: Eq + Hash>(
    items: &[T],
    mut key: impl FnMut(&T) -> K,
) -> HashMap<K, Vec<T>>
```

Groups the elements of `items` by the key returned by `key`.

Within each group, elements keep their original order. The order of the groups themselves is
unspecified (`HashMap`).

### Examples

```rust
use helpers4::array::group_by;

let groups = group_by(&[1, 2, 3, 4, 5], |n| n % 2 == 0);
assert_eq!(groups[&true], vec![2, 4]);
assert_eq!(groups[&false], vec![1, 3, 5]);
```

## `intersection`

```rust
pub fn intersection<T: Clone + Eq + Hash>(a: &[T], b: &[T]) -> Vec<T>
```

Returns the elements of `a` that also appear in `b`, in `a`'s order.

Duplicates in `a` are kept: only membership in `b` decides whether an element stays.

### Examples

```rust
use helpers4::array::intersection;

assert_eq!(intersection(&[1, 2, 3, 2], &[2, 3, 4]), vec![2, 3, 2]);
assert_eq!(intersection(&[1], &[2]), Vec::<i32>::new());
```

## `intersects`

```rust
pub fn intersects<T: Eq + Hash>(a: &[T], b: &[T]) -> bool
```

Returns `true` when `a` and `b` share at least one element.

### Examples

```rust
use helpers4::array::intersects;

assert!(intersects(&[1, 2, 3], &[3, 4]));
assert!(!intersects(&[1, 2], &[3, 4]));
```

## `symmetric_difference`

```rust
pub fn symmetric_difference<T: Clone + Eq + Hash>(a: &[T], b: &[T]) -> Vec<T>
```

Returns the elements present in exactly one of `a` and `b`.

The result is the elements of `a` missing from `b` (in `a`'s order), followed by the elements
of `b` missing from `a` (in `b`'s order). Duplicates are kept.

### Examples

```rust
use helpers4::array::symmetric_difference;

assert_eq!(symmetric_difference(&[1, 2, 3], &[2, 3, 4]), vec![1, 4]);
```

## `unique`

```rust
pub fn unique<T: Clone + Eq + Hash>(items: &[T]) -> Vec<T>
```

Removes duplicate values, keeping the first occurrence of each and the original order.

### Examples

```rust
use helpers4::array::unique;

assert_eq!(unique(&[1, 2, 1, 3, 2]), vec![1, 2, 3]);
assert_eq!(unique::<i32>(&[]), Vec::<i32>::new());
```

## `unique_by`

```rust
pub fn unique_by<T: Clone, K: Eq + Hash>(items: &[T], mut key: impl FnMut(&T) -> K) -> Vec<T>
```

Removes elements whose `key` was already seen, keeping the first of each key in order.

### Examples

```rust
use helpers4::array::unique_by;

let words = ["apple", "avocado", "banana", "blueberry", "cherry"];
assert_eq!(
    unique_by(&words, |w| w.chars().next()),
    vec!["apple", "banana", "cherry"]
);
```

