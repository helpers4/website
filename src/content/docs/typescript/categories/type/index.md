---
title: "Type Helpers"
sidebar:
  label: "Type"
  order: 0
---

Utility functions for working with type operations.

## Functions

| Function | Description |
|----------|-------------|
| [`DeepPartial`](./deeppartial/) | Recursively makes all properties of T optional, including nested objects and array elements. |
| [`DeepWritable`](./deepwritable/) | Recursively removes `readonly` from all properties of T, including nested objects, array elements, and tuple positions. |
| [`isArray`](./isarray/) | Checks if a value is an array. |
| [`isArrayBuffer`](./isarraybuffer/) | Checks if a value is an ArrayBuffer instance. |
| [`isAsyncFunction`](./isasyncfunction/) | Checks if a value is an async function. |
| [`isBigInt`](./isbigint/) | Checks if a value is a bigint. |
| [`isBlob`](./isblob/) | Checks if a value is a Blob instance. |
| [`isBoolean`](./isboolean/) | Checks if a value is a boolean. |
| [`isDate`](./isdate/) | Checks if a value is a Date instance. |
| [`isDefined`](./isdefined/) | Checks if a value is defined (not undefined nor null). |
| `isDirectInstanceOf` | <span class="badge badge--secondary">native JS</span> `value.constructor === Foo` *(ES1)* |
| [`isEmpty`](./isempty/) | Checks if a value is empty. |
| [`isError`](./iserror/) | Checks if a value is an Error instance. |
| [`isFalsy`](./isfalsy/) | Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`). |
| `isFinite / isFiniteNumber` | <span class="badge badge--secondary">native JS</span> `Number.isFinite(value)` *(ES2015)* |
| [`isFormData`](./isformdata/) | Checks if a value is a FormData instance. |
| [`isFunction`](./isfunction/) | Checks if a value is a function. |
| `isHtmlElement / isUrlInstance / isUrlSearchParams` | <span class="badge badge--secondary">native JS</span> `value instanceof HTMLElement / URL / URLSearchParams` *(Web API)* |
| `isInteger` | <span class="badge badge--secondary">native JS</span> `Number.isInteger(value)` *(ES2015)* |
| [`isIterable`](./isiterable/) | Checks if a value is iterable (has a `Symbol.iterator` method). |
| [`isMap`](./ismap/) | Checks if a value is a Map instance. |
| `isNaN` | <span class="badge badge--secondary">native JS</span> `Number.isNaN(value)` *(ES2015)* |
| [`isNegativeNumber`](./isnegativenumber/) | Checks if a value is a number less than 0. |
| [`isNonEmptyArray`](./isnonemptyarray/) | Checks if a value is a non-empty array (length > 0). |
| [`isNonEmptyString`](./isnonemptystring/) | Checks if a value is a non-empty string (length > 0). |
| [`isNull`](./isnull/) | Checks if a value is `null`. |
| [`isNullish`](./isnullish/) | Checks if a value is null or undefined (nullish). |
| [`isNumber`](./isnumber/) | Checks if a value is a number. |
| [`isPlainObject`](./isplainobject/) | Checks if a value is a plain object. |
| [`isPositiveNumber`](./ispositivenumber/) | Checks if a value is a number greater than 0. |
| [`isPrimitive`](./isprimitive/) | Checks if a value is a JavaScript primitive. |
| [`isPromise`](./ispromise/) | Checks if a value is a Promise or a thenable. |
| [`isRegExp`](./isregexp/) | Checks if a value is a RegExp instance. |
| `isSafeInteger` | <span class="badge badge--secondary">native JS</span> `Number.isSafeInteger(value)` *(ES2015)* |
| `isSet (Set data structure)` | <span class="badge badge--secondary">native JS</span> `value instanceof Set` *(ES2015)* |
| [`isSpecialObject`](./isspecialobject/) | Determines if a value is a special object that should not have its properties compared deeply. |
| [`isString`](./isstring/) | Checks if a value is a string. |
| [`isSymbol`](./issymbol/) | Checks if a value is a symbol. |
| [`isTemporalDuration`](./istemporalduration/) | Checks if a value is a `Temporal.Duration`. |
| [`isTemporalInstant`](./istemporalinstant/) | Checks if a value is a `Temporal.Instant`. |
| [`isTemporalPlainDate`](./istemporalplaindate/) | Checks if a value is a `Temporal.PlainDate`. |
| [`isTemporalPlainDateTime`](./istemporalplaindatetime/) | Checks if a value is a `Temporal.PlainDateTime`. |
| [`isTemporalPlainTime`](./istemporalplaintime/) | Checks if a value is a `Temporal.PlainTime`. |
| [`isTemporalZonedDateTime`](./istemporalzoneddatetime/) | Checks if a value is a `Temporal.ZonedDateTime`. |
| [`isTimestamp`](./istimestamp/) | Checks if a value is a valid timestamp (milliseconds or Unix seconds). |
| [`isTruthy`](./istruthy/) | Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`). |
| [`isUndefined`](./isundefined/) | Checks if a value is `undefined`. |
| [`isValidDate`](./isvaliddate/) | Checks if a value is a valid Date instance (not `Invalid Date`). |
| [`isValidRegex`](./isvalidregex/) | Checks if a string is a valid regex pattern. |
| `isWeakMap / isWeakSet / isWeakRef` | <span class="badge badge--secondary">native JS</span> `value instanceof WeakMap / WeakSet / WeakRef` *(ES2015 / ES2021)* |
| `TypedArrays (isInt8Array, isFloat32Array, ...)` | <span class="badge badge--secondary">native JS</span> `value instanceof Int8Array / Float32Array / ...` *(ES2015)* |

