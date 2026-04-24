---
sidebar_label: "compact"
---

# compact

Removes all entries with falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an object.

> Available since v2.0.0

## Import

```ts
import { compact } from '@helpers4/object';
```

## Signature


```ts
compact<T extends Record<string, unknown>>(obj: T): Partial<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The source object |

## Returns

`Partial<T>` — A new object containing only entries with truthy values

## Examples

### Remove falsy values from object

Removes all entries with falsy values (false, null, undefined, 0, "", NaN).

```ts
compact({ a: 1, b: null, c: '', d: 0, e: 'hello' })
// => { a: 1, e: 'hello' }
```

### Clean up API response

Useful to strip empty or missing fields before sending data.

```ts
compact({ name: 'Alice', email: '', age: 0, role: 'admin' })
// => { name: 'Alice', role: 'admin' }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/compact.ts)
