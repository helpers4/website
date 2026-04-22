---
sidebar_label: "Type"
sidebar_position: 0
title: "Type Helpers"
---

# Type Helpers

Utility functions for working with type operations.

## Functions

| Function | Description |
|----------|-------------|
| [`isArray`](isArray) | Checks if a value is an array. |
| `isArrayBuffer / isBlob / isBuffer / isFormData` | <span class="badge badge--secondary">native JS</span> `value instanceof ArrayBuffer / Blob / Buffer / FormData` *(ES2015 / Web API)* |
| [`isAsyncFunction`](isAsyncFunction) | Checks if a value is an async function. |
| [`isBigInt`](isBigInt) | Checks if a value is a bigint. |
| [`isBoolean`](isBoolean) | Checks if a value is a boolean. |
| [`isDate`](isDate) | Checks if a value is a Date instance. |
| [`isDefined`](isDefined) | Checks if a value is defined (not undefined nor null). |
| `isDirectInstanceOf` | <span class="badge badge--secondary">native JS</span> `value.constructor === Foo` *(ES1)* |
| [`isEmpty`](isEmpty) | Checks if a value is empty. |
| [`isError`](isError) | Checks if a value is an Error instance. |
| [`isFalsy`](isFalsy) | Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`). |
| `isFinite / isFiniteNumber` | <span class="badge badge--secondary">native JS</span> `Number.isFinite(value)` *(ES2015)* |
| [`isFunction`](isFunction) | Checks if a value is a function. |
| `isHtmlElement / isUrlInstance / isUrlSearchParams` | <span class="badge badge--secondary">native JS</span> `value instanceof HTMLElement / URL / URLSearchParams` *(Web API)* |
| `isInteger` | <span class="badge badge--secondary">native JS</span> `Number.isInteger(value)` *(ES2015)* |
| [`isIterable`](isIterable) | Checks if a value is iterable (has a `Symbol.iterator` method). |
| [`isMap`](isMap) | Checks if a value is a Map instance. |
| `isNaN` | <span class="badge badge--secondary">native JS</span> `Number.isNaN(value)` *(ES2015)* |
| [`isNegativeNumber`](isNegativeNumber) | Checks if a value is a number less than 0. |
| [`isNonEmptyArray`](isNonEmptyArray) | Checks if a value is a non-empty array (length > 0). |
| [`isNonEmptyString`](isNonEmptyString) | Checks if a value is a non-empty string (length > 0). |
| [`isNull`](isNull) | Checks if a value is `null`. |
| [`isNullish`](isNullish) | Checks if a value is null or undefined (nullish). |
| [`isNumber`](isNumber) | Checks if a value is a number. |
| [`isPlainObject`](isPlainObject) | Checks if a value is a plain object. |
| [`isPositiveNumber`](isPositiveNumber) | Checks if a value is a number greater than 0. |
| [`isPrimitive`](isPrimitive) | Checks if a value is a JavaScript primitive. |
| [`isPromise`](isPromise) | Checks if a value is a Promise or a thenable. |
| [`isRegExp`](isRegExp) | Checks if a value is a RegExp instance. |
| `isSafeInteger` | <span class="badge badge--secondary">native JS</span> `Number.isSafeInteger(value)` *(ES2015)* |
| `isSet (Set data structure)` | <span class="badge badge--secondary">native JS</span> `value instanceof Set` *(ES2015)* |
| [`isSpecialObject`](isSpecialObject) | Determines if a value is a special object that should not have its properties compared deeply. |
| [`isString`](isString) | Checks if a value is a string. |
| [`isSymbol`](isSymbol) | Checks if a value is a symbol. |
| [`isTemporalDuration`](isTemporalDuration) | Checks if a value is a `Temporal.Duration`. |
| [`isTemporalInstant`](isTemporalInstant) | Checks if a value is a `Temporal.Instant`. |
| [`isTemporalPlainDate`](isTemporalPlainDate) | Checks if a value is a `Temporal.PlainDate`. |
| [`isTemporalPlainDateTime`](isTemporalPlainDateTime) | Checks if a value is a `Temporal.PlainDateTime`. |
| [`isTemporalPlainTime`](isTemporalPlainTime) | Checks if a value is a `Temporal.PlainTime`. |
| [`isTemporalZonedDateTime`](isTemporalZonedDateTime) | Checks if a value is a `Temporal.ZonedDateTime`. |
| [`isTimestamp`](isTimestamp) | Checks if a value is a valid timestamp (milliseconds or Unix seconds). |
| [`isTruthy`](isTruthy) | Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`). |
| [`isUndefined`](isUndefined) | Checks if a value is `undefined`. |
| [`isValidDate`](isValidDate) | Checks if a value is a valid Date instance (not `Invalid Date`). |
| [`isValidRegex`](isValidRegex) | Checks if a string is a valid regex pattern. |
| `isWeakMap / isWeakSet / isWeakRef` | <span class="badge badge--secondary">native JS</span> `value instanceof WeakMap / WeakSet / WeakRef` *(ES2015 / ES2021)* |
| `TypedArrays (isInt8Array, isFloat32Array, ...)` | <span class="badge badge--secondary">native JS</span> `value instanceof Int8Array / Float32Array / ...` *(ES2015)* |

