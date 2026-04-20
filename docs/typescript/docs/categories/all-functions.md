---
sidebar_label: "All Functions"
sidebar_position: 0
title: "All Functions"
description: "Complete list of all @helpers4 TypeScript utility functions and native alternatives, by category."
---

# All Functions

**124** implemented helpers + **33** covered by native JavaScript APIs, sorted alphabetically.

| Function | Category | Description |
|----------|----------|-------------|
| [`camelCase`](string/camelCase) | [string](string/) | Converts kebab-case to camelCase |
| [`capitalize`](string/capitalize) | [string](string/) | Capitalizes the first letter of a string |
| `ceil / floor` | [number](number/) | <span class="badge badge--secondary">native JS</span> `Math.ceil() / Math.floor()` *(ES1)* |
| [`chunk`](array/chunk) | [array](array/) | Chunks an array into smaller arrays of specified size |
| [`clamp`](number/clamp) | [number](number/) | Clamps a number between min and max values |
| [`cleanPath`](url/cleanPath) | [url](url/) | Clean an URL by removing duplicate slashes. |
| [`combine`](observable/combine) | [observable](observable/) | Combine two observables with a map function and an optional pre-treatment. |
| [`combineLatest`](observable/combineLatest) | [observable](observable/) | Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of i… |
| [`compact`](array/compact) | [array](array/) | Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array. |
| [`compact`](object/compact) | [object](object/) | Removes all entries with falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an object. |
| [`compare`](date/compare) | [date](date/) | Comparison of two dates. |
| [`compare`](version/compare) | [version](version/) | Compares two semantic version strings according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.… |
| [`consoleLogPromise`](promise/consoleLogPromise) | [promise](promise/) | Returns a function that logs data to the console and passes it through. |
| [`createSortByDateFn`](array/createSortByDateFn) | [array](array/) | Creates a sort function for objects by date property |
| [`createSortByNumberFn`](array/createSortByNumberFn) | [array](array/) | Creates a sort function for objects by number property |
| [`createSortByStringFn`](array/createSortByStringFn) | [array](array/) | Creates a sort function for objects by string property |
| [`DateCompareOptions`](date/DateCompareOptions) | [date](date/) | Options for date comparison |
| [`dateToISOString`](date/dateToISOString) | [date](date/) | Formats a date to ISO string or returns null |
| [`daysDifference`](date/daysDifference) | [date](date/) | Gets the difference in days between two dates |
| [`debounce`](function/debounce) | [function](function/) | Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last tim… |
| [`deepClone`](object/deepClone) | [object](object/) | Creates a deep copy of an object or array |
| [`deepCompare`](object/deepCompare) | [object](object/) | Deep comparison of two objects that returns detailed information about differences. |
| [`DeepCompareResult`](object/DeepCompareResult) | [object](object/) | Result type for deep comparison when objects are not identical |
| [`deepEquals`](array/deepEquals) | [array](array/) | Deep comparison of two arrays that only returns true or false. |
| [`deepMerge`](object/deepMerge) | [object](object/) | Merges two or more objects deeply |
| [`delay`](promise/delay) | [promise](promise/) | Creates a promise that resolves after specified delay |
| [`difference`](array/difference) | [array](array/) | Returns the difference between two arrays (items in first array but not in second) |
| `drop` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(n)` *(ES3)* |
| [`ensureArray`](array/ensureArray) | [array](array/) | Wraps a value in an array if it is not already one. |
| [`equals`](array/equals) | [array](array/) | Simple helper that checks if two lists are identical. |
| [`errorToReadableMessage`](string/errorToReadableMessage) | [string](string/) | Convert an error to a readable message. |
| [`extractPureURI`](url/extractPureURI) | [url](url/) | Extracts the pure URI from a URL by removing query parameters and fragments. |
| [`Falsy`](type/Falsy) | [type](type/) | Union of all falsy types in JavaScript. |
| [`falsyPromiseOrThrow`](promise/falsyPromiseOrThrow) | [promise](promise/) | Returns a function that passes through falsy data or throws an error. |
| `find / findIndex` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.find() / findIndex()` *(ES2015)* |
| `flatten / flat` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.flat(depth?)` *(ES2019)* |
| [`get`](object/get) | [object](object/) | Gets a value from an object using a dot-notated path |
| `groupBy / group` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Object.groupBy(arr, fn)` *(ES2024)* |
| [`guard`](promise/guard) | [promise](promise/) | Wraps a function so that if it throws, a default value is returned instead of propagating the error. |
| `has` | [object](object/) | <span class="badge badge--secondary">native JS</span> `Object.hasOwn(obj, key)` *(ES2022)* |
| `head / first` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(0)` *(ES2022)* |
| `includes` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.includes()` *(ES2016)* |
| [`increment`](version/increment) | [version](version/) | Increments a semantic version |
| [`intersection`](array/intersection) | [array](array/) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| [`isArray`](type/isArray) | [type](type/) | Checks if a value is an array. |
| `isArrayBuffer / isBlob / isBuffer / isFormData` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value instanceof ArrayBuffer / Blob / Buffer / FormData` *(ES2015 / Web API)* |
| [`isAsyncFunction`](type/isAsyncFunction) | [type](type/) | Checks if a value is an async function. |
| [`isBigInt`](type/isBigInt) | [type](type/) | Checks if a value is a bigint. |
| [`isBoolean`](type/isBoolean) | [type](type/) | Checks if a value is a boolean. |
| [`isDate`](type/isDate) | [type](type/) | Checks if a value is a Date instance. |
| [`isDefined`](type/isDefined) | [type](type/) | Checks if a value is defined (not undefined nor null). |
| `isDirectInstanceOf` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value.constructor === Foo` *(ES1)* |
| [`isEmpty`](type/isEmpty) | [type](type/) | Checks if a value is empty. |
| [`isError`](type/isError) | [type](type/) | Checks if a value is an Error instance. |
| [`isFalsy`](type/isFalsy) | [type](type/) | Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`). |
| `isFinite / isFiniteNumber` | [type](type/) | <span class="badge badge--secondary">native JS</span> `Number.isFinite(value)` *(ES2015)* |
| [`isFunction`](type/isFunction) | [type](type/) | Checks if a value is a function. |
| `isHtmlElement / isUrlInstance / isUrlSearchParams` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value instanceof HTMLElement / URL / URLSearchParams` *(Web API)* |
| `isInteger` | [type](type/) | <span class="badge badge--secondary">native JS</span> `Number.isInteger(value)` *(ES2015)* |
| [`isIterable`](type/isIterable) | [type](type/) | Checks if a value is iterable (has a `Symbol.iterator` method). |
| [`isMap`](type/isMap) | [type](type/) | Checks if a value is a Map instance. |
| `isNaN` | [type](type/) | <span class="badge badge--secondary">native JS</span> `Number.isNaN(value)` *(ES2015)* |
| [`isNegativeNumber`](type/isNegativeNumber) | [type](type/) | Checks if a value is a number less than 0. |
| [`isNonEmptyArray`](type/isNonEmptyArray) | [type](type/) | Checks if a value is a non-empty array (length > 0). |
| [`isNonEmptyString`](type/isNonEmptyString) | [type](type/) | Checks if a value is a non-empty string (length > 0). |
| [`isNull`](type/isNull) | [type](type/) | Checks if a value is `null`. |
| [`isNullish`](type/isNullish) | [type](type/) | Checks if a value is null or undefined (nullish). |
| [`isNumber`](type/isNumber) | [type](type/) | Checks if a value is a number. |
| [`isPlainObject`](type/isPlainObject) | [type](type/) | Checks if a value is a plain object. |
| [`isPositiveNumber`](type/isPositiveNumber) | [type](type/) | Checks if a value is a number greater than 0. |
| [`isPrimitive`](type/isPrimitive) | [type](type/) | Checks if a value is a JavaScript primitive. |
| [`isPromise`](type/isPromise) | [type](type/) | Checks if a value is a Promise or a thenable. |
| [`isRegExp`](type/isRegExp) | [type](type/) | Checks if a value is a RegExp instance. |
| `isSafeInteger` | [type](type/) | <span class="badge badge--secondary">native JS</span> `Number.isSafeInteger(value)` *(ES2015)* |
| [`isSameDay`](date/isSameDay) | [date](date/) | Checks if two dates are the same day |
| `isSet (Set data structure)` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value instanceof Set` *(ES2015)* |
| [`isSpecialObject`](type/isSpecialObject) | [type](type/) | Determines if a value is a special object that should not have its properties compared deeply. |
| [`isString`](type/isString) | [type](type/) | Checks if a value is a string. |
| [`isSymbol`](type/isSymbol) | [type](type/) | Checks if a value is a symbol. |
| [`isTimestamp`](type/isTimestamp) | [type](type/) | Checks if a value is a valid timestamp (milliseconds or Unix seconds). |
| [`isTimestampInSeconds`](date/isTimestampInSeconds) | [date](date/) | Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style) |
| [`isTruthy`](type/isTruthy) | [type](type/) | Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`). |
| [`isUndefined`](type/isUndefined) | [type](type/) | Checks if a value is `undefined`. |
| [`isValidDate`](type/isValidDate) | [type](type/) | Checks if a value is a valid Date instance (not `Invalid Date`). |
| [`isValidRegex`](type/isValidRegex) | [type](type/) | Checks if a string is a valid regex pattern. |
| `isWeakMap / isWeakSet / isWeakRef` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value instanceof WeakMap / WeakSet / WeakRef` *(ES2015 / ES2021)* |
| [`kebabCase`](string/kebabCase) | [string](string/) | Converts camelCase to kebab-case |
| `keys / values` | [object](object/) | <span class="badge badge--secondary">native JS</span> `Object.keys() / Object.values()` *(ES2017)* |
| `last` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(-1)` *(ES2022)* |
| [`Maybe`](type/Maybe) | [type](type/) | Type for values that can be T, undefined, or null. |
| [`meaningPromiseOrThrow`](promise/meaningPromiseOrThrow) | [promise](promise/) | Returns a function that passes through meaningful data or throws an error. |
| [`memoize`](function/memoize) | [function](function/) | Returns a memoized version of the function that caches results |
| `merge (shallow)` | [object](object/) | <span class="badge badge--secondary">native JS</span> `{ ...a, ...b } or Object.assign({}, a, b)` *(ES2015)* |
| `min / max` | [number](number/) | <span class="badge badge--secondary">native JS</span> `Math.min(...arr) / Math.max(...arr)` *(ES1)* |
| [`normalizeTimestamp`](date/normalizeTimestamp) | [date](date/) | Converts a timestamp to JavaScript milliseconds format |
| [`omit`](object/omit) | [object](object/) | Creates a new object without the specified keys. |
| [`oneInCommon`](array/oneInCommon) | [array](array/) | Simple helper that check if two lists shared at least an item in common. |
| [`onlyPath`](url/onlyPath) | [url](url/) | Extract only the path from an URI with optional query and fragments. |
| `padStart / padEnd` | [string](string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.padStart() / padEnd()` *(ES2017)* |
| [`parallel`](promise/parallel) | [promise](promise/) | Runs an array of async functions with a concurrency limit. |
| [`parse`](version/parse) | [version](version/) | Parses a semantic version string into its components according to SemVer 2.0.0 specification  Supports: - Core versio… |
| [`ParsedVersion`](version/ParsedVersion) | [version](version/) | Represents a parsed semantic version according to SemVer 2.0.0 specification |
| [`partition`](array/partition) | [array](array/) | Splits an array into two groups based on a predicate function. |
| [`pascalCase`](string/pascalCase) | [string](string/) | Converts a string to PascalCase. |
| [`pick`](object/pick) | [object](object/) | Creates a new object with only the specified keys. |
| [`Primitive`](type/Primitive) | [type](type/) | Union of all JavaScript primitive types. |
| [`randomBetween`](number/randomBetween) | [number](number/) | Generates a random number between min and max (inclusive) |
| [`randomIntBetween`](number/randomIntBetween) | [number](number/) | Generates a random integer between min and max (inclusive) |
| [`range`](array/range) | [array](array/) | Generates an array of sequential numbers from start to end (exclusive). |
| [`relativeURLToAbsolute`](url/relativeURLToAbsolute) | [url](url/) | Converts a relative URL to an absolute URL using the current document base URI. |
| [`removeUndefinedNull`](object/removeUndefinedNull) | [object](object/) | Remove null and undefined values from an object. |
| `repeat` | [string](string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.repeat()` *(ES2015)* |
| [`Result`](promise/Result) | [promise](promise/) | Result tuple representing either a successful value or an error. |
| [`retry`](promise/retry) | [promise](promise/) | Retries a promise-returning function up to maxAttempts times |
| [`returnOrThrowError`](function/returnOrThrowError) | [function](function/) | Return a value or throw an error if null or undefined. |
| `reverse` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.toReversed()` *(ES2023)* |
| [`roundTo`](number/roundTo) | [number](number/) | Rounds a number to specified decimal places |
| [`safeDate`](date/safeDate) | [date](date/) | Safely creates a Date object from various input types |
| [`sample`](array/sample) | [array](array/) | Picks one or more random elements from an array. |
| [`satisfiesRange`](version/satisfiesRange) | [version](version/) | Checks if a version satisfies a range (simple implementation) |
| [`set`](object/set) | [object](object/) | Sets a value in an object using a dot-notated path |
| [`shallowEquals`](array/shallowEquals) | [array](array/) | Quick comparison of two arrays using JSON.stringify. |
| [`shallowEquals`](object/shallowEquals) | [object](object/) | Quick comparison of two objects using JSON.stringify. |
| [`shuffle`](array/shuffle) | [array](array/) | Randomly reorders elements of an array using the Fisher-Yates algorithm. |
| [`slugify`](string/slugify) | [string](string/) | Converts a string into a URL-friendly slug. |
| [`snakeCase`](string/snakeCase) | [string](string/) | Converts a string to snake_case. |
| `sortBy / orderBy` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.toSorted(fn?)` *(ES2023)* |
| [`SortFn`](array/SortFn) | [array](array/) | Sort function type for arrays |
| [`sortNumberAscFn`](array/sortNumberAscFn) | [array](array/) | Sort numbers in ascending order |
| [`sortNumberDescFn`](array/sortNumberDescFn) | [array](array/) | Sort numbers in descending order |
| [`sortStringAscFn`](array/sortStringAscFn) | [array](array/) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](array/sortStringAscInsensitiveFn) | [array](array/) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](array/sortStringDescFn) | [array](array/) | Sort strings in descending order |
| `startsWith / endsWith` | [string](string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.startsWith() / endsWith()` *(ES2015)* |
| [`stripV`](version/stripV) | [version](version/) | Strip the leading "v" from a version string if it exists. |
| [`sum`](number/sum) | [number](number/) | Calculates the sum of an array of numbers. |
| `tail` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(1)` *(ES3)* |
| `take` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(0, n)` *(ES3)* |
| [`throttle`](function/throttle) | [function](function/) | Creates a throttled function that only invokes func at most once per every wait milliseconds |
| [`timeout`](promise/timeout) | [promise](promise/) | Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration. |
| [`titleCase`](string/titleCase) | [string](string/) | Converts a string to Title Case. |
| `toInt / toFloat` | [number](number/) | <span class="badge badge--secondary">native JS</span> `parseInt(str, 10) / parseFloat(str)` *(ES1)* |
| [`toISO8601`](date/toISO8601) | [date](date/) | Converts a date to ISO 8601 format Format: YYYY-MM-DDTHH:mm:ss.sssZ |
| `toPairs / fromPairs` | [object](object/) | <span class="badge badge--secondary">native JS</span> `Object.entries() / Object.fromEntries()` *(ES2019)* |
| [`toRFC2822`](date/toRFC2822) | [date](date/) | Converts a date to RFC 2822 format Format: Day, DD Mon YYYY HH:mm:ss +0000 Used in email headers (Date field) and HTT… |
| [`toRFC3339`](date/toRFC3339) | [date](date/) | Converts a date to RFC 3339 format Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm RFC 3339 is a profile of… |
| `trim / trimStart / trimEnd` | [string](string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.trim() / trimStart() / trimEnd()` *(ES2019)* |
| [`truthyPromiseOrThrow`](promise/truthyPromiseOrThrow) | [promise](promise/) | Returns a function that passes through truthy data or throws an error. |
| [`tryit`](promise/tryit) | [promise](promise/) | Wraps a function so it never throws. |
| `TypedArrays (isInt8Array, isFloat32Array, ...)` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value instanceof Int8Array / Float32Array / ...` *(ES2015)* |
| [`unique`](array/unique) | [array](array/) | Removes duplicate values from an array |
| [`uuid7`](math/uuid7) | [math](math/) | Generates a UUID v7 string (RFC 9562). |
| [`withLeadingSlash`](url/withLeadingSlash) | [url](url/) | Adds a leading slash `/` to the given URL if it is not already present. |
| [`withoutLeadingSlash`](url/withoutLeadingSlash) | [url](url/) | Removes the leading slash `/` from the given URL if it is present. |
| [`withoutTrailingSlash`](url/withoutTrailingSlash) | [url](url/) | Removes the trailing slash `/` from the given URL if it is present. |
| `withResolvers` | [promise](promise/) | <span class="badge badge--secondary">native JS</span> `Promise.withResolvers()` *(ES2024)* |
| [`withTrailingSlash`](url/withTrailingSlash) | [url](url/) | Adds a trailing slash `/` to the given URL if it is not already present. |
