---
title: "set"
description: "Helpers for HashSet that the standard library does not provide."
sidebar:
  label: "≡ Overview"
  order: 0
---

Helpers for `HashSet` that the standard library does not provide.

The standard library already has the pairwise operations (`union`, `intersection`, `difference`, ...);
these cover what it lacks: combining any number of sets, toggling a member, a stable order, a
similarity score and the power set. Inputs are borrowed and results are new values.

## Install

Cargo feature `set` (enabled by default). To compile only this module:

```sh
cargo add helpers4 --no-default-features --features set
```

or in `Cargo.toml`:

```toml
[dependencies]
helpers4 = { version = "0.0.6", default-features = false, features = ["set"] }
```

Import path: `helpers4::set`.

## Items

| Item | What it does |
| --- | --- |
| [`intersection_all`](/rust/modules/set/intersection_all/) | The elements that appear in every set of `sets`. |
| [`jaccard`](/rust/modules/set/jaccard/) | The Jaccard similarity of two sets: the size of their intersection over the size of their union. |
| [`MAX_SUBSET_ITEMS`](/rust/modules/set/max_subset_items/) | The most items `subsets` accepts: 2^16 = 65 536 subsets. |
| [`subsets`](/rust/modules/set/subsets/) | Every subset of `items` (the power set), including the empty one and `items` itself. |
| [`to_sorted_vec`](/rust/modules/set/to_sorted_vec/) | The elements of `set` as a sorted `Vec`. |
| [`toggle`](/rust/modules/set/toggle/) | Removes `item` from `set` if it is there, inserts it otherwise. |
| [`union_all`](/rust/modules/set/union_all/) | The union of every set in `sets`. |
