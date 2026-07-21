---
title: "Set Helpers"
sidebar:
  label: "Set"
  order: 0
---

Utility functions for working with set operations.

## Functions

| Function | Description |
|----------|-------------|
| [`countBy`](./countby/) | Groups the values of a Set by a derived key and counts how many fall into each group\. |
| `difference` | <span class="badge badge--secondary">native JS</span> `Set.prototype.difference()` *(ES2025 (Set methods))* |
| [`filter`](./filter/) | Creates a new Set containing only the values for which the predicate returns true\. |
| `forEach` | <span class="badge badge--secondary">native JS</span> `Set.prototype.forEach((value, value2, set) => ...)` *(ES2015)* |
| `groupBy` | <span class="badge badge--secondary">native JS</span> `Map.groupBy(set.values(), fn)` *(ES2024)* |
| `intersection` | <span class="badge badge--secondary">native JS</span> `Set.prototype.intersection()` *(ES2025 (Set methods))* |
| [`map`](./map/) | Creates a new Set with each value transformed by a function\. |
| `map / filter` | <span class="badge badge--secondary">native JS</span> `new Set(set.values().map(fn)) / new Set(set.values().filter(fn))` *(ES2025 (Iterator Helpers))* |
| `reduce / some / every / find` | <span class="badge badge--secondary">native JS</span> `set.values().reduce(fn, init) / .some(fn) / .every(fn) / .find(fn)` *(ES2025 (Iterator Helpers))* |
| `symmetricDifference` | <span class="badge badge--secondary">native JS</span> `Set.prototype.symmetricDifference()` *(ES2025 (Set methods))* |
| [`toMapByKey`](./tomapbykey/) | Builds a Map from a Set, keyed by a derived key\. |
| `union` | <span class="badge badge--secondary">native JS</span> `Set.prototype.union()` *(ES2025 (Set methods))* |

