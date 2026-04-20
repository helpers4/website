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
| [`Falsy`](Falsy) | Union of all falsy types in JavaScript. Note: `NaN` cannot be represented as a type in TypeScript. |
| [`isArray`](isArray) | Checks if a value is an array. |
| [`isAsyncFunction`](isAsyncFunction) | Checks if a value is an async function.  Returns `true` for any function declared with `async`. |
| [`isBigInt`](isBigInt) | Checks if a value is a bigint. |
| [`isBoolean`](isBoolean) | Checks if a value is a boolean. |
| [`isDate`](isDate) | Checks if a value is a Date instance.  Note: this only checks the type, not whether the Date is valid. Use isValidDate to also validate that the Date is not `Invalid Date`. |
| [`isDefined`](isDefined) | Checks if a value is defined (not undefined nor null). This is the inverse of isNullish.  Use as a type-safe filter callback to remove `null`/`undefined` from arrays. |
| [`isEmpty`](isEmpty) | Checks if a value is empty.  Supported types: - `null` / `undefined` → empty - `string` → length === 0 - `array` → length === 0 - `Map` / `Set` → size === 0 - plain object → no own enumerable properties |
| [`isError`](isError) | Checks if a value is an Error instance. |
| [`isFalsy`](isFalsy) | Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`). |
| [`isFunction`](isFunction) | Checks if a value is a function. |
| [`isIterable`](isIterable) | Checks if a value is iterable (has a `Symbol.iterator` method).  Returns `true` for strings, arrays, Maps, Sets, generators, and any object implementing the iterable protocol. |
| [`isMap`](isMap) | Checks if a value is a Map instance. |
| [`isNegativeNumber`](isNegativeNumber) | Checks if a value is a number less than 0.  Returns `false` for `NaN`, `0`, positive numbers, and non-number types. |
| [`isNonEmptyArray`](isNonEmptyArray) | Checks if a value is a non-empty array (length > 0). |
| [`isNonEmptyString`](isNonEmptyString) | Checks if a value is a non-empty string (length > 0). |
| [`isNull`](isNull) | Checks if a value is `null`. |
| [`isNullish`](isNullish) | Checks if a value is null or undefined (nullish). |
| [`isNumber`](isNumber) | Checks if a value is a number.  Returns `false` for `NaN`, which intentionally deviates from `typeof` behavior to increase user-friendliness. |
| [`isPlainObject`](isPlainObject) | Checks if a value is a plain object.  A plain object is created by `{}`, `new Object()`, or `Object.create(null)`. Returns `false` for arrays, Date, Map, Set, RegExp, class instances, etc. |
| [`isPositiveNumber`](isPositiveNumber) | Checks if a value is a number greater than 0.  Returns `false` for `NaN`, `0`, negative numbers, and non-number types. |
| [`isPrimitive`](isPrimitive) | Checks if a value is a JavaScript primitive.  Primitive types: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`. |
| [`isPromise`](isPromise) | Checks if a value is a Promise or a thenable.  Returns `true` for any object that has `.then()` and `.catch()` methods, including native Promises and userland implementations. |
| [`isRegExp`](isRegExp) | Checks if a value is a RegExp instance. |
| [`isSpecialObject`](isSpecialObject) | Determines if a value is a special object that should not have its properties compared deeply. Special objects include: Date, Function, Promise, Observable, RegExp, Error, Map, Set, WeakMap, WeakSet, etc. |
| [`isString`](isString) | Checks if a value is a string. |
| [`isSymbol`](isSymbol) | Checks if a value is a symbol. |
| [`isTimestamp`](isTimestamp) | Checks if a value is a valid timestamp (milliseconds or Unix seconds).  Supports: - JavaScript / Java timestamps (milliseconds since epoch) - Unix timestamps (seconds since epoch)  The function uses a heuristic to distinguish between the two: numbers ≤ ~7.26 billion are treated as seconds, larger as milliseconds. |
| [`isTruthy`](isTruthy) | Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`).  This is the type-safe alternative to `Boolean()` as a filter callback. Unlike `filter(Boolean)`, using `filter(isTruthy)` correctly narrows the resulting array type by excluding falsy values. |
| [`isUndefined`](isUndefined) | Checks if a value is `undefined`. |
| [`isValidDate`](isValidDate) | Checks if a value is a valid Date instance (not `Invalid Date`).  Unlike isDate, this also verifies that the internal timestamp is not `NaN`. |
| [`isValidRegex`](isValidRegex) | Checks if a string is a valid regex pattern. |
| [`Maybe`](Maybe) | Type for values that can be T, undefined, or null. |
| [`Primitive`](Primitive) | Union of all JavaScript primitive types. |

