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
| [`cloneDeep`](./clonedeep/) | Creates a deep copy of an object or array. |
| [`compact`](./compact/) | Removes all entries with falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an object. |
| [`diff`](./diff/) | Structural object diff. |
| [`equalsDeep`](./equalsdeep/) | Recursive structural object equality. |
| [`equalsShallow`](./equalsshallow/) | One-level (shallow) object equality. |
| [`get`](./get/) | Gets a value from an object using a dot/bracket-notated path or explicit key array. |
| [`groupBy`](./groupby/) | Groups an array of items by a key derived from each item. |
| `has` | <span class="badge badge--secondary">native JS</span> `Object.hasOwn(obj, key)` *(ES2022)* |
| [`invert`](./invert/) | Returns a new object with keys and values swapped. |
| [`isEmpty`](./isempty/) | Checks if a plain object has no own enumerable string-keyed properties. |
| [`isNonEmpty`](./isnonempty/) | Checks if a plain object has at least one own enumerable string-keyed property. |
| `keys / values` | <span class="badge badge--secondary">native JS</span> `Object.keys() / Object.values()` *(ES2017)* |
| [`map`](./map/) | Transforms the values and/or keys of a plain object in a single pass. |
| `merge (shallow)` | <span class="badge badge--secondary">native JS</span> `{ ...a, ...b } or Object.assign({}, a, b)` *(ES2015)* |
| [`mergeDeep`](./mergedeep/) | Merges two or more objects deeply, returning a **new** object without mutating any input. |
| [`omit`](./omit/) | Creates a new object without the specified keys. |
| [`pick`](./pick/) | Creates a new object with only the specified keys. |
| [`removeUndefinedNull`](./removeundefinednull/) | Remove null and undefined values from an object. |
| [`safeJsonParse`](./safejsonparse/) | Parses a JSON string, returning `null` (or a fallback) on any parse failure. |
| [`set`](./set/) | Sets a value in an object at the given path, creating intermediate objects as needed. |
| `toPairs / fromPairs` | <span class="badge badge--secondary">native JS</span> `Object.entries() / Object.fromEntries()` *(ES2019)* |

