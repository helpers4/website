---
sidebar_label: "All Functions"
sidebar_position: 1
title: "All Functions"
description: "Complete list of all @helpers4 TypeScript utility functions and native alternatives, by category."
---

# All Functions

**124** implemented helpers + **33** covered by native JavaScript APIs, sorted alphabetically.

| Function | Category | Description |
|----------|----------|-------------|
| [`camelCase`](../categories/string/camelCase) | [string](../categories/string/) | Converts kebab-case to camelCase |
| [`capitalize`](../categories/string/capitalize) | [string](../categories/string/) | Capitalizes the first letter of a string |
| `ceil / floor` | [number](../categories/number/) | Use native: `Math.ceil() / Math.floor()` *(ES1)* |
| [`chunk`](../categories/array/chunk) | [array](../categories/array/) | Chunks an array into smaller arrays of specified size |
| [`clamp`](../categories/number/clamp) | [number](../categories/number/) | Clamps a number between min and max values |
| [`cleanPath`](../categories/url/cleanPath) | [url](../categories/url/) | Clean an URL by removing duplicate slashes. |
| [`combine`](../categories/observable/combine) | [observable](../categories/observable/) | Combine two observables with a map function and an optional pre-treatment. |
| [`combineLatest`](../categories/observable/combineLatest) | [observable](../categories/observable/) | Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of i… |
| [`compact`](../categories/array/compact) | [array](../categories/array/) | Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array. |
| [`compact`](../categories/object/compact) | [object](../categories/object/) | Removes all entries with falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an object. |
| [`compare`](../categories/date/compare) | [date](../categories/date/) | Comparison of two dates. |
| [`compare`](../categories/version/compare) | [version](../categories/version/) | Compares two semantic version strings according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.… |
| [`consoleLogPromise`](../categories/promise/consoleLogPromise) | [promise](../categories/promise/) | Returns a function that logs data to the console and passes it through. |
| [`createSortByDateFn`](../categories/array/createSortByDateFn) | [array](../categories/array/) | Creates a sort function for objects by date property |
| [`createSortByNumberFn`](../categories/array/createSortByNumberFn) | [array](../categories/array/) | Creates a sort function for objects by number property |
| [`createSortByStringFn`](../categories/array/createSortByStringFn) | [array](../categories/array/) | Creates a sort function for objects by string property |
| [`DateCompareOptions`](../categories/date/DateCompareOptions) | [date](../categories/date/) | Options for date comparison |
| [`dateToISOString`](../categories/date/dateToISOString) | [date](../categories/date/) | Formats a date to ISO string or returns null |
| [`daysDifference`](../categories/date/daysDifference) | [date](../categories/date/) | Gets the difference in days between two dates |
| [`debounce`](../categories/function/debounce) | [function](../categories/function/) | Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last tim… |
| [`deepClone`](../categories/object/deepClone) | [object](../categories/object/) | Creates a deep copy of an object or array |
| [`deepCompare`](../categories/object/deepCompare) | [object](../categories/object/) | Deep comparison of two objects that returns detailed information about differences. |
| [`DeepCompareResult`](../categories/object/DeepCompareResult) | [object](../categories/object/) | Result type for deep comparison when objects are not identical |
| [`deepEquals`](../categories/array/deepEquals) | [array](../categories/array/) | Deep comparison of two arrays that only returns true or false. |
| [`deepMerge`](../categories/object/deepMerge) | [object](../categories/object/) | Merges two or more objects deeply |
| [`delay`](../categories/promise/delay) | [promise](../categories/promise/) | Creates a promise that resolves after specified delay |
| [`difference`](../categories/array/difference) | [array](../categories/array/) | Returns the difference between two arrays (items in first array but not in second) |
| `drop` | [array](../categories/array/) | Use native: `Array.prototype.slice(n)` *(ES3)* |
| [`ensureArray`](../categories/array/ensureArray) | [array](../categories/array/) | Wraps a value in an array if it is not already one. |
| [`equals`](../categories/array/equals) | [array](../categories/array/) | Simple helper that checks if two lists are identical. |
| [`errorToReadableMessage`](../categories/string/errorToReadableMessage) | [string](../categories/string/) | Convert an error to a readable message. |
| [`extractPureURI`](../categories/url/extractPureURI) | [url](../categories/url/) | Extracts the pure URI from a URL by removing query parameters and fragments. |
| [`Falsy`](../categories/type/Falsy) | [type](../categories/type/) | Union of all falsy types in JavaScript. |
| [`falsyPromiseOrThrow`](../categories/promise/falsyPromiseOrThrow) | [promise](../categories/promise/) | Returns a function that passes through falsy data or throws an error. |
| `find / findIndex` | [array](../categories/array/) | Use native: `Array.prototype.find() / findIndex()` *(ES2015)* |
| `flatten / flat` | [array](../categories/array/) | Use native: `Array.prototype.flat(depth?)` *(ES2019)* |
| [`get`](../categories/object/get) | [object](../categories/object/) | Gets a value from an object using a dot-notated path |
| `groupBy / group` | [array](../categories/array/) | Use native: `Object.groupBy(arr, fn)` *(ES2024)* |
| [`guard`](../categories/promise/guard) | [promise](../categories/promise/) | Wraps a function so that if it throws, a default value is returned instead of propagating the error. |
| `has` | [object](../categories/object/) | Use native: `Object.hasOwn(obj, key)` *(ES2022)* |
| `head / first` | [array](../categories/array/) | Use native: `Array.prototype.at(0)` *(ES2022)* |
| `includes` | [array](../categories/array/) | Use native: `Array.prototype.includes()` *(ES2016)* |
| [`increment`](../categories/version/increment) | [version](../categories/version/) | Increments a semantic version |
| [`intersection`](../categories/array/intersection) | [array](../categories/array/) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| [`isArray`](../categories/type/isArray) | [type](../categories/type/) | Checks if a value is an array. |
| `isArrayBuffer / isBlob / isBuffer / isFormData` | [type](../categories/type/) | Use native: `value instanceof ArrayBuffer / Blob / Buffer / FormData` *(ES2015 / Web API)* |
| [`isAsyncFunction`](../categories/type/isAsyncFunction) | [type](../categories/type/) | Checks if a value is an async function. |
| [`isBigInt`](../categories/type/isBigInt) | [type](../categories/type/) | Checks if a value is a bigint. |
| [`isBoolean`](../categories/type/isBoolean) | [type](../categories/type/) | Checks if a value is a boolean. |
| [`isDate`](../categories/type/isDate) | [type](../categories/type/) | Checks if a value is a Date instance. |
| [`isDefined`](../categories/type/isDefined) | [type](../categories/type/) | Checks if a value is defined (not undefined nor null). |
| `isDirectInstanceOf` | [type](../categories/type/) | Use native: `value.constructor === Foo` *(ES1)* |
| [`isEmpty`](../categories/type/isEmpty) | [type](../categories/type/) | Checks if a value is empty. |
| [`isError`](../categories/type/isError) | [type](../categories/type/) | Checks if a value is an Error instance. |
| [`isFalsy`](../categories/type/isFalsy) | [type](../categories/type/) | Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`). |
| `isFinite / isFiniteNumber` | [type](../categories/type/) | Use native: `Number.isFinite(value)` *(ES2015)* |
| [`isFunction`](../categories/type/isFunction) | [type](../categories/type/) | Checks if a value is a function. |
| `isHtmlElement / isUrlInstance / isUrlSearchParams` | [type](../categories/type/) | Use native: `value instanceof HTMLElement / URL / URLSearchParams` *(Web API)* |
| `isInteger` | [type](../categories/type/) | Use native: `Number.isInteger(value)` *(ES2015)* |
| [`isIterable`](../categories/type/isIterable) | [type](../categories/type/) | Checks if a value is iterable (has a `Symbol.iterator` method). |
| [`isMap`](../categories/type/isMap) | [type](../categories/type/) | Checks if a value is a Map instance. |
| `isNaN` | [type](../categories/type/) | Use native: `Number.isNaN(value)` *(ES2015)* |
| [`isNegativeNumber`](../categories/type/isNegativeNumber) | [type](../categories/type/) | Checks if a value is a number less than 0. |
| [`isNonEmptyArray`](../categories/type/isNonEmptyArray) | [type](../categories/type/) | Checks if a value is a non-empty array (length > 0). |
| [`isNonEmptyString`](../categories/type/isNonEmptyString) | [type](../categories/type/) | Checks if a value is a non-empty string (length > 0). |
| [`isNull`](../categories/type/isNull) | [type](../categories/type/) | Checks if a value is `null`. |
| [`isNullish`](../categories/type/isNullish) | [type](../categories/type/) | Checks if a value is null or undefined (nullish). |
| [`isNumber`](../categories/type/isNumber) | [type](../categories/type/) | Checks if a value is a number. |
| [`isPlainObject`](../categories/type/isPlainObject) | [type](../categories/type/) | Checks if a value is a plain object. |
| [`isPositiveNumber`](../categories/type/isPositiveNumber) | [type](../categories/type/) | Checks if a value is a number greater than 0. |
| [`isPrimitive`](../categories/type/isPrimitive) | [type](../categories/type/) | Checks if a value is a JavaScript primitive. |
| [`isPromise`](../categories/type/isPromise) | [type](../categories/type/) | Checks if a value is a Promise or a thenable. |
| [`isRegExp`](../categories/type/isRegExp) | [type](../categories/type/) | Checks if a value is a RegExp instance. |
| `isSafeInteger` | [type](../categories/type/) | Use native: `Number.isSafeInteger(value)` *(ES2015)* |
| [`isSameDay`](../categories/date/isSameDay) | [date](../categories/date/) | Checks if two dates are the same day |
| `isSet (Set data structure)` | [type](../categories/type/) | Use native: `value instanceof Set` *(ES2015)* |
| [`isSpecialObject`](../categories/type/isSpecialObject) | [type](../categories/type/) | Determines if a value is a special object that should not have its properties compared deeply. |
| [`isString`](../categories/type/isString) | [type](../categories/type/) | Checks if a value is a string. |
| [`isSymbol`](../categories/type/isSymbol) | [type](../categories/type/) | Checks if a value is a symbol. |
| [`isTimestamp`](../categories/type/isTimestamp) | [type](../categories/type/) | Checks if a value is a valid timestamp (milliseconds or Unix seconds). |
| [`isTimestampInSeconds`](../categories/date/isTimestampInSeconds) | [date](../categories/date/) | Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style) |
| [`isTruthy`](../categories/type/isTruthy) | [type](../categories/type/) | Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`). |
| [`isUndefined`](../categories/type/isUndefined) | [type](../categories/type/) | Checks if a value is `undefined`. |
| [`isValidDate`](../categories/type/isValidDate) | [type](../categories/type/) | Checks if a value is a valid Date instance (not `Invalid Date`). |
| [`isValidRegex`](../categories/type/isValidRegex) | [type](../categories/type/) | Checks if a string is a valid regex pattern. |
| `isWeakMap / isWeakSet / isWeakRef` | [type](../categories/type/) | Use native: `value instanceof WeakMap / WeakSet / WeakRef` *(ES2015 / ES2021)* |
| [`kebabCase`](../categories/string/kebabCase) | [string](../categories/string/) | Converts camelCase to kebab-case |
| `keys / values` | [object](../categories/object/) | Use native: `Object.keys() / Object.values()` *(ES2017)* |
| `last` | [array](../categories/array/) | Use native: `Array.prototype.at(-1)` *(ES2022)* |
| [`Maybe`](../categories/type/Maybe) | [type](../categories/type/) | Type for values that can be T, undefined, or null. |
| [`meaningPromiseOrThrow`](../categories/promise/meaningPromiseOrThrow) | [promise](../categories/promise/) | Returns a function that passes through meaningful data or throws an error. |
| [`memoize`](../categories/function/memoize) | [function](../categories/function/) | Returns a memoized version of the function that caches results |
| `merge (shallow)` | [object](../categories/object/) | Use native: `{ ...a, ...b } or Object.assign({}, a, b)` *(ES2015)* |
| `min / max` | [number](../categories/number/) | Use native: `Math.min(...arr) / Math.max(...arr)` *(ES1)* |
| [`normalizeTimestamp`](../categories/date/normalizeTimestamp) | [date](../categories/date/) | Converts a timestamp to JavaScript milliseconds format |
| [`omit`](../categories/object/omit) | [object](../categories/object/) | Creates a new object without the specified keys. |
| [`oneInCommon`](../categories/array/oneInCommon) | [array](../categories/array/) | Simple helper that check if two lists shared at least an item in common. |
| [`onlyPath`](../categories/url/onlyPath) | [url](../categories/url/) | Extract only the path from an URI with optional query and fragments. |
| `padStart / padEnd` | [string](../categories/string/) | Use native: `String.prototype.padStart() / padEnd()` *(ES2017)* |
| [`parallel`](../categories/promise/parallel) | [promise](../categories/promise/) | Runs an array of async functions with a concurrency limit. |
| [`parse`](../categories/version/parse) | [version](../categories/version/) | Parses a semantic version string into its components according to SemVer 2.0.0 specification  Supports: - Core versio… |
| [`ParsedVersion`](../categories/version/ParsedVersion) | [version](../categories/version/) | Represents a parsed semantic version according to SemVer 2.0.0 specification |
| [`partition`](../categories/array/partition) | [array](../categories/array/) | Splits an array into two groups based on a predicate function. |
| [`pascalCase`](../categories/string/pascalCase) | [string](../categories/string/) | Converts a string to PascalCase. |
| [`pick`](../categories/object/pick) | [object](../categories/object/) | Creates a new object with only the specified keys. |
| [`Primitive`](../categories/type/Primitive) | [type](../categories/type/) | Union of all JavaScript primitive types. |
| [`randomBetween`](../categories/number/randomBetween) | [number](../categories/number/) | Generates a random number between min and max (inclusive) |
| [`randomIntBetween`](../categories/number/randomIntBetween) | [number](../categories/number/) | Generates a random integer between min and max (inclusive) |
| [`range`](../categories/array/range) | [array](../categories/array/) | Generates an array of sequential numbers from start to end (exclusive). |
| [`relativeURLToAbsolute`](../categories/url/relativeURLToAbsolute) | [url](../categories/url/) | Converts a relative URL to an absolute URL using the current document base URI. |
| [`removeUndefinedNull`](../categories/object/removeUndefinedNull) | [object](../categories/object/) | Remove null and undefined values from an object. |
| `repeat` | [string](../categories/string/) | Use native: `String.prototype.repeat()` *(ES2015)* |
| [`Result`](../categories/promise/Result) | [promise](../categories/promise/) | Result tuple representing either a successful value or an error. |
| [`retry`](../categories/promise/retry) | [promise](../categories/promise/) | Retries a promise-returning function up to maxAttempts times |
| [`returnOrThrowError`](../categories/function/returnOrThrowError) | [function](../categories/function/) | Return a value or throw an error if null or undefined. |
| `reverse` | [array](../categories/array/) | Use native: `Array.prototype.toReversed()` *(ES2023)* |
| [`roundTo`](../categories/number/roundTo) | [number](../categories/number/) | Rounds a number to specified decimal places |
| [`safeDate`](../categories/date/safeDate) | [date](../categories/date/) | Safely creates a Date object from various input types |
| [`sample`](../categories/array/sample) | [array](../categories/array/) | Picks one or more random elements from an array. |
| [`satisfiesRange`](../categories/version/satisfiesRange) | [version](../categories/version/) | Checks if a version satisfies a range (simple implementation) |
| [`set`](../categories/object/set) | [object](../categories/object/) | Sets a value in an object using a dot-notated path |
| [`shallowEquals`](../categories/array/shallowEquals) | [array](../categories/array/) | Quick comparison of two arrays using JSON.stringify. |
| [`shallowEquals`](../categories/object/shallowEquals) | [object](../categories/object/) | Quick comparison of two objects using JSON.stringify. |
| [`shuffle`](../categories/array/shuffle) | [array](../categories/array/) | Randomly reorders elements of an array using the Fisher-Yates algorithm. |
| [`slugify`](../categories/string/slugify) | [string](../categories/string/) | Converts a string into a URL-friendly slug. |
| [`snakeCase`](../categories/string/snakeCase) | [string](../categories/string/) | Converts a string to snake_case. |
| `sortBy / orderBy` | [array](../categories/array/) | Use native: `Array.prototype.toSorted(fn?)` *(ES2023)* |
| [`SortFn`](../categories/array/SortFn) | [array](../categories/array/) | Sort function type for arrays |
| [`sortNumberAscFn`](../categories/array/sortNumberAscFn) | [array](../categories/array/) | Sort numbers in ascending order |
| [`sortNumberDescFn`](../categories/array/sortNumberDescFn) | [array](../categories/array/) | Sort numbers in descending order |
| [`sortStringAscFn`](../categories/array/sortStringAscFn) | [array](../categories/array/) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](../categories/array/sortStringAscInsensitiveFn) | [array](../categories/array/) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](../categories/array/sortStringDescFn) | [array](../categories/array/) | Sort strings in descending order |
| `startsWith / endsWith` | [string](../categories/string/) | Use native: `String.prototype.startsWith() / endsWith()` *(ES2015)* |
| [`stripV`](../categories/version/stripV) | [version](../categories/version/) | Strip the leading "v" from a version string if it exists. |
| [`sum`](../categories/number/sum) | [number](../categories/number/) | Calculates the sum of an array of numbers. |
| `tail` | [array](../categories/array/) | Use native: `Array.prototype.slice(1)` *(ES3)* |
| `take` | [array](../categories/array/) | Use native: `Array.prototype.slice(0, n)` *(ES3)* |
| [`throttle`](../categories/function/throttle) | [function](../categories/function/) | Creates a throttled function that only invokes func at most once per every wait milliseconds |
| [`timeout`](../categories/promise/timeout) | [promise](../categories/promise/) | Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration. |
| [`titleCase`](../categories/string/titleCase) | [string](../categories/string/) | Converts a string to Title Case. |
| `toInt / toFloat` | [number](../categories/number/) | Use native: `parseInt(str, 10) / parseFloat(str)` *(ES1)* |
| [`toISO8601`](../categories/date/toISO8601) | [date](../categories/date/) | Converts a date to ISO 8601 format Format: YYYY-MM-DDTHH:mm:ss.sssZ |
| `toPairs / fromPairs` | [object](../categories/object/) | Use native: `Object.entries() / Object.fromEntries()` *(ES2019)* |
| [`toRFC2822`](../categories/date/toRFC2822) | [date](../categories/date/) | Converts a date to RFC 2822 format Format: Day, DD Mon YYYY HH:mm:ss +0000 Used in email headers (Date field) and HTT… |
| [`toRFC3339`](../categories/date/toRFC3339) | [date](../categories/date/) | Converts a date to RFC 3339 format Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm RFC 3339 is a profile of… |
| `trim / trimStart / trimEnd` | [string](../categories/string/) | Use native: `String.prototype.trim() / trimStart() / trimEnd()` *(ES2019)* |
| [`truthyPromiseOrThrow`](../categories/promise/truthyPromiseOrThrow) | [promise](../categories/promise/) | Returns a function that passes through truthy data or throws an error. |
| [`tryit`](../categories/promise/tryit) | [promise](../categories/promise/) | Wraps a function so it never throws. |
| `TypedArrays (isInt8Array, isFloat32Array, ...)` | [type](../categories/type/) | Use native: `value instanceof Int8Array / Float32Array / ...` *(ES2015)* |
| [`unique`](../categories/array/unique) | [array](../categories/array/) | Removes duplicate values from an array |
| [`uuid7`](../categories/math/uuid7) | [math](../categories/math/) | Generates a UUID v7 string (RFC 9562). |
| [`withLeadingSlash`](../categories/url/withLeadingSlash) | [url](../categories/url/) | Adds a leading slash `/` to the given URL if it is not already present. |
| [`withoutLeadingSlash`](../categories/url/withoutLeadingSlash) | [url](../categories/url/) | Removes the leading slash `/` from the given URL if it is present. |
| [`withoutTrailingSlash`](../categories/url/withoutTrailingSlash) | [url](../categories/url/) | Removes the trailing slash `/` from the given URL if it is present. |
| `withResolvers` | [promise](../categories/promise/) | Use native: `Promise.withResolvers()` *(ES2024)* |
| [`withTrailingSlash`](../categories/url/withTrailingSlash) | [url](../categories/url/) | Adds a trailing slash `/` to the given URL if it is not already present. |
