---
title: "Object Helpers"
sidebar:
  label: "Object"
  order: 0
---

Utility functions for working with object operations.

## Functions

| Function | Description |
|----------|-------------|
| [`compact`](./compact/) | Removes all entries with falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an object. |
| [`deepClone`](./deepclone/) | Creates a deep copy of an object or array |
| [`deepMerge`](./deepmerge/) | Merges two or more objects deeply |
| [`diff`](./diff/) | Structural object diff. |
| [`equalsDeep`](./equalsdeep/) | Recursive structural object equality. |
| [`equalsShallow`](./equalsshallow/) | One-level (shallow) object equality. |
| [`get`](./get/) | Gets a value from an object using a dot-notated path |
| [`groupBy`](./groupby/) | Groups an array of items by a key derived from each item. |
| `has` | <span class="badge badge--secondary">native JS</span> `Object.hasOwn(obj, key)` *(ES2022)* |
| [`invert`](./invert/) | Returns a new object with keys and values swapped. |
| `keys / values` | <span class="badge badge--secondary">native JS</span> `Object.keys() / Object.values()` *(ES2017)* |
| [`map`](./map/) | Transforms the values and/or keys of a plain object in a single pass. |
| `merge (shallow)` | <span class="badge badge--secondary">native JS</span> `{ ...a, ...b } or Object.assign({}, a, b)` *(ES2015)* |
| [`omit`](./omit/) | Creates a new object without the specified keys. |
| [`pick`](./pick/) | Creates a new object with only the specified keys. |
| [`removeUndefinedNull`](./removeundefinednull/) | Remove null and undefined values from an object. |
| [`safeJsonParse`](./safejsonparse/) | Parses a JSON string, returning `null` (or a fallback) on any parse failure. |
| [`set`](./set/) | Sets a value in an object using a dot-notated path |
| `toPairs / fromPairs` | <span class="badge badge--secondary">native JS</span> `Object.entries() / Object.fromEntries()` *(ES2019)* |

