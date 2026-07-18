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

:::caution[Name conflict]
A helper named `isEmpty` also exists in [`@helpers4/array`](../array/isempty/), [`@helpers4/object`](../object/isempty/), [`@helpers4/string`](../string/isempty/). If you need both in the same file, rename at import with `as`:

```ts
import { isEmpty as isEmpty4type } from '@helpers4/type';
import { isEmpty as isEmpty4array } from '@helpers4/array';
import { isEmpty as isEmpty4object } from '@helpers4/object';
import { isEmpty as isEmpty4string } from '@helpers4/string';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/type/isEmpty.ts)
