---
sidebar_label: "isFunction"
---

# isFunction

Checks if a value is a function.

> Available since v1.9.0

## Import

```ts
import { isFunction } from '@helpers4/type';
```

## Signature

```ts
isFunction(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a function

## Examples

### isFunction



```ts
```ts
isFunction(() => {})       // => true
isFunction(function() {})  // => true
isFunction('function')     // => false
```
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isFunction.ts)
