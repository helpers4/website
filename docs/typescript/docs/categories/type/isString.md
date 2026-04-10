---
sidebar_label: "isString"
---

# isString

Checks if a value is a string

> Available since v1.9.0

## Import

```ts
import { isString } from '@helpers4/type';
```

## Signature

```ts
isString(value: unknown): value
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value` — True if value is a string

## Examples

### Type guard functions

A collection of type guard functions for common types.

```ts
isString('hello')  // => true
isNumber(42)       // => true
isBoolean(false)   // => true
isArray([1, 2])    // => true
isObject({ a: 1 }) // => true
isDate(new Date()) // => true
```

### isSet checks for non-null/undefined

Returns true when the value is neither null nor undefined.

```ts
isSet(0)         // => true
isSet('')        // => true
isSet(null)      // => false
isSet(undefined) // => false
```

### Validate regex patterns

Checks whether a string is a valid regular expression.

```ts
isValidRegex('[a-z]+')  // => true
isValidRegex('[invalid') // => false
```

### isFunction type guard

Returns true for functions.

```ts
isFunction(() => {})      // => true
isFunction('not a fn')    // => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/typeChecks.ts)
