---
title: "isEmpty"
sidebar:
  label: "isEmpty"
---

Checks if a value is empty.

Supported types:
- `null` / `undefined` → empty
- `string` → length === 0
- `array` → length === 0
- `Map` / `Set` → size === 0
- plain object → no own enumerable properties

> Available since v2.0.0

## Import

```ts
import { isEmpty } from '@helpers4/type';
```

## Signature


```ts
isEmpty(value: unknown): value is "" | never[] | ReadonlyMap<never, never> | ReadonlySet<never> | null | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is "" | never[] | ReadonlyMap<never, never> | ReadonlySet<never> | null | undefined` — `true` if the value is considered empty, `false` otherwise.
Acts as a type guard: the `else` branch narrows away `null`, `undefined`,
empty strings, empty arrays, and empty Map/Set.
Plain empty objects (`{}`) are not representable as a distinct type in
TypeScript and are therefore not part of the predicate.

## Examples

### Check empty values

Returns true for null, undefined, empty strings, arrays, objects, Maps, and Sets.

```ts
isEmpty('')     // => true
isEmpty([])     // => true
isEmpty({})     // => true
isEmpty(null)   // => true
```

### Non-empty values

Returns false for values with content.

```ts
isEmpty('hello') // => false
isEmpty([1])     // => false
isEmpty(42)      // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isEmpty.ts)
