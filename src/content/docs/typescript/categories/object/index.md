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
| [`camelCaseKeys`](./camelcasekeys/) | Recursively transforms every key of a plain object \(including keys nested inside arrays and nested objects\) to camelC… |
| [`clone`](./clone/) | Creates a shallow copy of a value — one level deep, unlike cloneDeep\. |
| [`cloneDeep`](./clonedeep/) | Creates a deep copy of an object or array\. |
| [`compact`](./compact/) | Removes all entries with falsy values \(\`false\`, \`null\`, \`undefined\`, \`0\`, \`""\`, \`NaN\`\) from an object\. |
| [`diff`](./diff/) | Structural object diff\. |
| [`equalsDeep`](./equalsdeep/) | Recursive structural object equality\. |
| [`equalsShallow`](./equalsshallow/) | One\-level \(shallow\) object equality\. |
| [`flatten`](./flatten/) | Flattens a nested object into a single\-level object whose keys are the dot\-notation path to each leaf value\. |
| [`get`](./get/) | Gets a value from an object using a dot/bracket\-notated path or explicit key array\. |
| [`groupBy`](./groupby/) | Groups an array of items by a key derived from each item\. |
| `has` | <span class="badge badge--secondary">native JS</span> `Object.hasOwn(obj, key)` *(ES2022)* |
| [`invert`](./invert/) | Returns a new object with keys and values swapped\. |
| [`isEmpty`](./isempty/) | Checks if a plain object has no own enumerable string\-keyed properties\. |
| [`isNonEmpty`](./isnonempty/) | Checks if a plain object has at least one own enumerable string\-keyed property\. |
| [`kebabCaseKeys`](./kebabcasekeys/) | Recursively transforms every key of a plain object \(including keys nested inside arrays and nested objects\) to kebab\-… |
| `keys / values` | <span class="badge badge--secondary">native JS</span> `Object.keys() / Object.values()` *(ES2017)* |
| [`map`](./map/) | Transforms the values and/or keys of a plain object in a single pass\. |
| [`mapDeep`](./mapdeep/) | Recursively transforms the keys and/or values of a plain object — the deep counterpart to map, which only transforms … |
| `merge (shallow)` | <span class="badge badge--secondary">native JS</span> `{ ...a, ...b } or Object.assign({}, a, b)` *(ES2015)* |
| [`mergeDeep`](./mergedeep/) | Merges two or more objects deeply, returning a \*\*new\*\* object without mutating any input\. |
| [`omit`](./omit/) | Creates a new object without the specified keys\. |
| [`omitBy`](./omitby/) | Creates a new object without the own enumerable entries for which \`predicate\` returns \`true\`\. |
| [`parsePropertyPath`](./parsepropertypath/) | Parses a dot/bracket\-notation property path into an array of string/number key segments — the same notation accepted … |
| [`pascalCaseKeys`](./pascalcasekeys/) | Recursively transforms every key of a plain object \(including keys nested inside arrays and nested objects\) to Pascal… |
| [`pick`](./pick/) | Creates a new object with only the specified keys\. |
| [`pickBy`](./pickby/) | Creates a new object with only the own enumerable entries for which \`predicate\` returns \`true\`\. |
| [`removeUndefinedNull`](./removeundefinednull/) | Remove null and undefined values from an object\. |
| [`safeJsonParse`](./safejsonparse/) | Parses a JSON string, returning \`null\` \(or a fallback\) on any parse failure\. |
| [`set`](./set/) | Sets a value in an object at the given path, creating intermediate objects as needed\. |
| [`snakeCaseKeys`](./snakecasekeys/) | Recursively transforms every key of a plain object \(including keys nested inside arrays and nested objects\) to snake\_… |
| [`sortKeys`](./sortkeys/) | Creates a new object with the same entries as the input, but with its own keys sorted\. |
| [`titleCaseKeys`](./titlecasekeys/) | Recursively transforms every key of a plain object \(including keys nested inside arrays and nested objects\) to Title … |
| `toPairs / fromPairs` | <span class="badge badge--secondary">native JS</span> `Object.entries() / Object.fromEntries()` *(ES2019)* |
| [`unflatten`](./unflatten/) | Rebuilds a nested object from a single\-level object whose keys are dot\-notation paths\. |
| [`unset`](./unset/) | Removes the value at a dot/bracket\-notation path or explicit key array, mutating the object in place\. |
| [`update`](./update/) | Updates the value at a path by applying a function to its current value, creating intermediate objects as needed\. |

