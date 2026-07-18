---
title: "isWeakMap"
sidebar:
  label: "isWeakMap"
---

Checks if a value is a WeakMap instance.

> Available since v3.0.0

## Import

```ts
import { isWeakMap } from '@helpers4/guard';
```

## Signature


```ts
isWeakMap(value: unknown): value is WeakMap<object, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is WeakMap<object, unknown>` — True if value is a WeakMap

## Examples

### Check whether a value is a WeakMap

Distinguishes WeakMap from the regular (iterable) Map.

```ts
isWeakMap(new WeakMap()) // => true
isWeakMap(new Map())     // => false
```

### Plain objects are not WeakMaps

Only real WeakMap instances pass, not objects that merely look like one.

```ts
isWeakMap({ get: () => undefined, set: () => {} })
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/guard/isWeakMap.ts)
