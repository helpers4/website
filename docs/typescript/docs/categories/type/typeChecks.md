---
sidebar_label: "typeChecks"
---

# typeChecks

Type for values that can be T, undefined, or null

## Import

```ts
import { typeChecks, isSet, isString, isNumber, isBoolean, isArray, isObject, isFunction, isDate, isValidRegex } from '@helpers4/type';
```

## `typeChecks`

Type for values that can be T, undefined, or null

```ts
type Maybe<T> = T | undefined | null;
```

## `isSet`

Checks if a value is set (not undefined nor null)

```ts
function isSet<T>(value: Maybe<T>): value is T
```

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

**Returns:** True if value is not undefined nor null

## `isString`

Checks if a value is a string

```ts
function isString(value: unknown): value is string
```

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

**Returns:** True if value is a string

## `isNumber`

Checks if a value is a number

```ts
function isNumber(value: unknown): value is number
```

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

**Returns:** True if value is a number

## `isBoolean`

Checks if a value is a boolean

```ts
function isBoolean(value: unknown): value is boolean
```

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

**Returns:** True if value is a boolean

## `isArray`

Checks if a value is an array

```ts
function isArray(value: unknown): value is unknown[]
```

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

**Returns:** True if value is an array

## `isObject`

Checks if a value is a plain object

```ts
function isObject(value: unknown): value is Record<string, unknown>
```

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

**Returns:** True if value is a plain object

## `isFunction`

Checks if a value is a function

```ts
function isFunction(value: unknown): value is Function
```

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

**Returns:** True if value is a function

## `isDate`

Checks if a value is a Date

```ts
function isDate(value: unknown): value is Date
```

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

**Returns:** True if value is a Date

## `isValidRegex`

Checks if a string is a valid regex

```ts
function isValidRegex(value: string): boolean
```

| Parameter | Description |
|-----------|-------------|
| `value` | The string to check |

**Returns:** True if the string is a valid regex pattern

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/typeChecks.ts)
