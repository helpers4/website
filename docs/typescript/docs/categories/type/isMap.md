---
sidebar_label: "isMap"
---

# isMap

Checks if a value is a Map instance.

> Available since v2.0.0

## Import

```ts
import { isMap } from '@helpers4/type';
```

## Signature

```ts
isMap(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a Map

## Examples

### isMap



```ts
```ts
isMap(new Map())           // => true
isMap(new Map([['a', 1]])) // => true
isMap({})                  // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isMap.ts)
