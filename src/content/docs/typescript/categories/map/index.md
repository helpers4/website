---
title: "Map Helpers"
sidebar:
  label: "Map"
  order: 0
---

Utility functions for working with map operations.

## Functions

| Function | Description |
|----------|-------------|
| [`countBy`](./countby/) | Groups the entries of a Map by a derived key and counts how many fall into each group\. |
| `countBy / keyBy` | <span class="badge badge--secondary">native JS</span> `Map.groupBy(map.entries(), ([k, v]) => groupFn(v, k))` *(ES2024)* |
| [`every`](./every/) | Checks if every entry of a Map satisfies the predicate\. |
| [`filter`](./filter/) | Creates a new Map containing only the entries for which the predicate returns true\. |
| [`findKey`](./findkey/) | Returns the first key of a Map whose entry satisfies the predicate, in insertion order\. |
| `findKey / findValue` | <span class="badge badge--secondary">native JS</span> `map.entries().find(([k, v]) => pred(v, k))?.[0 or 1]` *(ES2025 (Iterator Helpers))* |
| [`findValue`](./findvalue/) | Returns the first value of a Map whose entry satisfies the predicate, in insertion order\. |
| `forEach` | <span class="badge badge--secondary">native JS</span> `Map.prototype.forEach((value, key, map) => ...)` *(ES2015)* |
| [`hasValue`](./hasvalue/) | Checks whether a value exists anywhere in a Map \(\`Map\.prototype\.has\` checks keys, not values\)\. |
| `hasValue` | <span class="badge badge--secondary">native JS</span> `map.values().some(v => Object.is(v, value))` *(ES2025 (Iterator Helpers))* |
| [`mapKeys`](./mapkeys/) | Creates a new Map with the same values but with each key transformed by a function\. |
| [`mapValues`](./mapvalues/) | Creates a new Map with the same keys but with each value transformed by a function\. |
| [`reduce`](./reduce/) | Reduces a Map to a single value by applying a function to each entry, in insertion order\. |
| `reduce / some / every` | <span class="badge badge--secondary">native JS</span> `map.entries().reduce(fn, init) / .some(fn) / .every(fn)` *(ES2025 (Iterator Helpers))* |
| [`some`](./some/) | Checks if at least one entry of a Map satisfies the predicate\. |
| [`toMapByKey`](./tomapbykey/) | Builds a Map from an iterable of items, keyed by a derived key\. |

