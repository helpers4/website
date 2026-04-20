---
sidebar_label: "Changelog"
sidebar_position: 2
title: "Changelog — Helpers by version"
description: "All helpers listed by the version in which they were introduced, from newest to oldest."
---

# Changelog

All helpers listed by the version in which they were introduced, from newest to oldest.

## v2.0.0

| Function | Category | Description |
|----------|----------|-------------|
| [`compact`](../categories/array/compact) | [array](../categories/array/) | Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array. |
| [`compact`](../categories/object/compact) | [object](../categories/object/) | Removes all entries with falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an object. |
| [`compare`](../categories/date/compare) | [date](../categories/date/) | Comparison of two dates. |
| [`DateCompareOptions`](../categories/date/DateCompareOptions) | [date](../categories/date/) | Options for date comparison |
| [`daysDifference`](../categories/date/daysDifference) | [date](../categories/date/) | Gets the difference in days between two dates |
| [`deepCompare`](../categories/object/deepCompare) | [object](../categories/object/) | Deep comparison of two objects that returns detailed information about differences. |
| [`DeepCompareResult`](../categories/object/DeepCompareResult) | [object](../categories/object/) | Result type for deep comparison when objects are not identical |
| [`deepEquals`](../categories/array/deepEquals) | [array](../categories/array/) | Deep comparison of two arrays that only returns true or false. Arrays are considered equal if they have the same length and all elements  at corresponding positions are strictly equal. Only compares arrays, does not go into deep object comparison. |
| [`ensureArray`](../categories/array/ensureArray) | [array](../categories/array/) | Wraps a value in an array if it is not already one. If the value is already an array, it is returned as-is. If the value is null or undefined, returns an empty array. When a depth is specified, the resulting array is flattened to that depth (like `Array.prototype.flat(depth)`). |
| [`equals`](../categories/array/equals) | [array](../categories/array/) | Simple helper that checks if two lists are identical. The order of elements in the list is not important. |
| [`Falsy`](../categories/type/Falsy) | [type](../categories/type/) | Union of all falsy types in JavaScript. Note: `NaN` cannot be represented as a type in TypeScript. |
| [`guard`](../categories/promise/guard) | [promise](../categories/promise/) | Wraps a function so that if it throws, a default value is returned instead of propagating the error. Works with both synchronous and asynchronous functions. |
| [`isAsyncFunction`](../categories/type/isAsyncFunction) | [type](../categories/type/) | Checks if a value is an async function.  Returns `true` for any function declared with `async`. |
| [`isBigInt`](../categories/type/isBigInt) | [type](../categories/type/) | Checks if a value is a bigint. |
| [`isDate`](../categories/type/isDate) | [type](../categories/type/) | Checks if a value is a Date instance.  Note: this only checks the type, not whether the Date is valid. Use isValidDate to also validate that the Date is not `Invalid Date`. |
| [`isDefined`](../categories/type/isDefined) | [type](../categories/type/) | Checks if a value is defined (not undefined nor null). This is the inverse of isNullish.  Use as a type-safe filter callback to remove `null`/`undefined` from arrays. |
| [`isEmpty`](../categories/type/isEmpty) | [type](../categories/type/) | Checks if a value is empty.  Supported types: - `null` / `undefined` → empty - `string` → length === 0 - `array` → length === 0 - `Map` / `Set` → size === 0 - plain object → no own enumerable properties |
| [`isError`](../categories/type/isError) | [type](../categories/type/) | Checks if a value is an Error instance. |
| [`isFalsy`](../categories/type/isFalsy) | [type](../categories/type/) | Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`). |
| [`isIterable`](../categories/type/isIterable) | [type](../categories/type/) | Checks if a value is iterable (has a `Symbol.iterator` method).  Returns `true` for strings, arrays, Maps, Sets, generators, and any object implementing the iterable protocol. |
| [`isMap`](../categories/type/isMap) | [type](../categories/type/) | Checks if a value is a Map instance. |
| [`isNegativeNumber`](../categories/type/isNegativeNumber) | [type](../categories/type/) | Checks if a value is a number less than 0.  Returns `false` for `NaN`, `0`, positive numbers, and non-number types. |
| [`isNonEmptyArray`](../categories/type/isNonEmptyArray) | [type](../categories/type/) | Checks if a value is a non-empty array (length > 0). |
| [`isNonEmptyString`](../categories/type/isNonEmptyString) | [type](../categories/type/) | Checks if a value is a non-empty string (length > 0). |
| [`isNull`](../categories/type/isNull) | [type](../categories/type/) | Checks if a value is `null`. |
| [`isNullish`](../categories/type/isNullish) | [type](../categories/type/) | Checks if a value is null or undefined (nullish). |
| [`isPlainObject`](../categories/type/isPlainObject) | [type](../categories/type/) | Checks if a value is a plain object.  A plain object is created by `{}`, `new Object()`, or `Object.create(null)`. Returns `false` for arrays, Date, Map, Set, RegExp, class instances, etc. |
| [`isPositiveNumber`](../categories/type/isPositiveNumber) | [type](../categories/type/) | Checks if a value is a number greater than 0.  Returns `false` for `NaN`, `0`, negative numbers, and non-number types. |
| [`isPrimitive`](../categories/type/isPrimitive) | [type](../categories/type/) | Checks if a value is a JavaScript primitive.  Primitive types: `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`. |
| [`isPromise`](../categories/type/isPromise) | [type](../categories/type/) | Checks if a value is a Promise or a thenable.  Returns `true` for any object that has `.then()` and `.catch()` methods, including native Promises and userland implementations. |
| [`isRegExp`](../categories/type/isRegExp) | [type](../categories/type/) | Checks if a value is a RegExp instance. |
| [`isSameDay`](../categories/date/isSameDay) | [date](../categories/date/) | Checks if two dates are the same day |
| [`isSpecialObject`](../categories/type/isSpecialObject) | [type](../categories/type/) | Determines if a value is a special object that should not have its properties compared deeply. Special objects include: Date, Function, Promise, Observable, RegExp, Error, Map, Set, WeakMap, WeakSet, etc. |
| [`isSymbol`](../categories/type/isSymbol) | [type](../categories/type/) | Checks if a value is a symbol. |
| [`isTimestamp`](../categories/type/isTimestamp) | [type](../categories/type/) | Checks if a value is a valid timestamp (milliseconds or Unix seconds).  Supports: - JavaScript / Java timestamps (milliseconds since epoch) - Unix timestamps (seconds since epoch)  The function uses a heuristic to distinguish between the two: numbers ≤ ~7.26 billion are treated as seconds, larger as milliseconds. |
| [`isTruthy`](../categories/type/isTruthy) | [type](../categories/type/) | Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`).  This is the type-safe alternative to `Boolean()` as a filter callback. Unlike `filter(Boolean)`, using `filter(isTruthy)` correctly narrows the resulting array type by excluding falsy values. |
| [`isUndefined`](../categories/type/isUndefined) | [type](../categories/type/) | Checks if a value is `undefined`. |
| [`isValidDate`](../categories/type/isValidDate) | [type](../categories/type/) | Checks if a value is a valid Date instance (not `Invalid Date`).  Unlike isDate, this also verifies that the internal timestamp is not `NaN`. |
| [`omit`](../categories/object/omit) | [object](../categories/object/) | Creates a new object without the specified keys. |
| [`parallel`](../categories/promise/parallel) | [promise](../categories/promise/) | Runs an array of async functions with a concurrency limit. At most `limit` functions will be running at any time. |
| [`parse`](../categories/version/parse) | [version](../categories/version/) | Parses a semantic version string into its components according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.PATCH - Pre-release: -alpha, -beta.1, -rc.1, -0.3.7, -x.7.z.92 - Build metadata: +build, +sha.abc123, +20130313144700 - Optional 'v' prefix (commonly used in git tags) |
| [`ParsedVersion`](../categories/version/ParsedVersion) | [version](../categories/version/) | Represents a parsed semantic version according to SemVer 2.0.0 specification |
| [`partition`](../categories/array/partition) | [array](../categories/array/) | Splits an array into two groups based on a predicate function. The first group contains elements for which the predicate returns true, the second group contains the rest. |
| [`pascalCase`](../categories/string/pascalCase) | [string](../categories/string/) | Converts a string to PascalCase. Handles camelCase, kebab-case, snake_case, spaces, and mixed formats. |
| [`pick`](../categories/object/pick) | [object](../categories/object/) | Creates a new object with only the specified keys. |
| [`Primitive`](../categories/type/Primitive) | [type](../categories/type/) | Union of all JavaScript primitive types. |
| [`range`](../categories/array/range) | [array](../categories/array/) | Generates an array of sequential numbers from start to end (exclusive). If only one argument is provided, it generates numbers from 0 to that value. |
| [`sample`](../categories/array/sample) | [array](../categories/array/) | Picks one or more random elements from an array. When called without a count, returns a single element or `undefined` if the array is empty. When called with a count, returns an array of up to `count` random elements sampled without replacement. |
| [`shallowEquals`](../categories/array/shallowEquals) | [array](../categories/array/) | Quick comparison of two arrays using JSON.stringify. This is a fast but simple comparison that may not work for all edge cases. |
| [`shallowEquals`](../categories/object/shallowEquals) | [object](../categories/object/) | Quick comparison of two objects using JSON.stringify. This is a fast but simple comparison that may not work for all edge cases. |
| [`shuffle`](../categories/array/shuffle) | [array](../categories/array/) | Randomly reorders elements of an array using the Fisher-Yates algorithm. Returns a new array without mutating the original. |
| [`slugify`](../categories/string/slugify) | [string](../categories/string/) | Converts a string into a URL-friendly slug. |
| [`snakeCase`](../categories/string/snakeCase) | [string](../categories/string/) | Converts a string to snake_case. Handles camelCase, PascalCase, kebab-case, spaces, and mixed formats. |
| [`sum`](../categories/number/sum) | [number](../categories/number/) | Calculates the sum of an array of numbers. |
| [`timeout`](../categories/promise/timeout) | [promise](../categories/promise/) | Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration. |
| [`titleCase`](../categories/string/titleCase) | [string](../categories/string/) | Converts a string to Title Case. Handles camelCase, PascalCase, kebab-case, snake_case, spaces, and mixed formats. |
| [`toISO8601`](../categories/date/toISO8601) | [date](../categories/date/) | Converts a date to ISO 8601 format Format: YYYY-MM-DDTHH:mm:ss.sssZ |
| [`toRFC2822`](../categories/date/toRFC2822) | [date](../categories/date/) | Converts a date to RFC 2822 format Format: Day, DD Mon YYYY HH:mm:ss +0000 Used in email headers (Date field) and HTTP headers |
| [`toRFC3339`](../categories/date/toRFC3339) | [date](../categories/date/) | Converts a date to RFC 3339 format Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm RFC 3339 is a profile of ISO 8601, but without milliseconds by default |
| [`tryit`](../categories/promise/tryit) | [promise](../categories/promise/) | Wraps a function so it never throws. Instead, it returns a `[error, result]` tuple. Useful for avoiding try/catch blocks and handling errors in a functional style. |
| [`uuid7`](../categories/math/uuid7) | [math](../categories/math/) | Generates a UUID v7 string (RFC 9562). UUID v7 embeds a Unix timestamp in milliseconds, making it chronologically sortable while retaining randomness. |

## v1.9.0

| Function | Category | Description |
|----------|----------|-------------|
| [`camelCase`](../categories/string/camelCase) | [string](../categories/string/) | Converts kebab-case to camelCase |
| [`capitalize`](../categories/string/capitalize) | [string](../categories/string/) | Capitalizes the first letter of a string |
| [`chunk`](../categories/array/chunk) | [array](../categories/array/) | Chunks an array into smaller arrays of specified size |
| [`clamp`](../categories/number/clamp) | [number](../categories/number/) | Clamps a number between min and max values |
| [`compare`](../categories/version/compare) | [version](../categories/version/) | Compares two semantic version strings according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.PATCH - Pre-release: -alpha, -beta.1, -rc.1, etc. - Build metadata: +build, +sha.abc123 (ignored in comparison per spec) - Optional 'v' prefix |
| [`createSortByDateFn`](../categories/array/createSortByDateFn) | [array](../categories/array/) | Creates a sort function for objects by date property |
| [`createSortByNumberFn`](../categories/array/createSortByNumberFn) | [array](../categories/array/) | Creates a sort function for objects by number property |
| [`createSortByStringFn`](../categories/array/createSortByStringFn) | [array](../categories/array/) | Creates a sort function for objects by string property |
| [`dateToISOString`](../categories/date/dateToISOString) | [date](../categories/date/) | Formats a date to ISO string or returns null |
| [`debounce`](../categories/function/debounce) | [function](../categories/function/) | Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last time the debounced function was invoked |
| [`deepClone`](../categories/object/deepClone) | [object](../categories/object/) | Creates a deep copy of an object or array |
| [`deepMerge`](../categories/object/deepMerge) | [object](../categories/object/) | Merges two or more objects deeply |
| [`delay`](../categories/promise/delay) | [promise](../categories/promise/) | Creates a promise that resolves after specified delay |
| [`difference`](../categories/array/difference) | [array](../categories/array/) | Returns the difference between two arrays (items in first array but not in second) |
| [`extractPureURI`](../categories/url/extractPureURI) | [url](../categories/url/) | Extracts the pure URI from a URL by removing query parameters and fragments. |
| [`get`](../categories/object/get) | [object](../categories/object/) | Gets a value from an object using a dot-notated path |
| [`increment`](../categories/version/increment) | [version](../categories/version/) | Increments a semantic version |
| [`isArray`](../categories/type/isArray) | [type](../categories/type/) | Checks if a value is an array. |
| [`isBoolean`](../categories/type/isBoolean) | [type](../categories/type/) | Checks if a value is a boolean. |
| [`isFunction`](../categories/type/isFunction) | [type](../categories/type/) | Checks if a value is a function. |
| [`isNumber`](../categories/type/isNumber) | [type](../categories/type/) | Checks if a value is a number.  Returns `false` for `NaN`, which intentionally deviates from `typeof` behavior to increase user-friendliness. |
| [`isString`](../categories/type/isString) | [type](../categories/type/) | Checks if a value is a string. |
| [`isTimestampInSeconds`](../categories/date/isTimestampInSeconds) | [date](../categories/date/) | Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style) |
| [`isValidRegex`](../categories/type/isValidRegex) | [type](../categories/type/) | Checks if a string is a valid regex pattern. |
| [`kebabCase`](../categories/string/kebabCase) | [string](../categories/string/) | Converts camelCase to kebab-case |
| [`Maybe`](../categories/type/Maybe) | [type](../categories/type/) | Type for values that can be T, undefined, or null. |
| [`memoize`](../categories/function/memoize) | [function](../categories/function/) | Returns a memoized version of the function that caches results |
| [`normalizeTimestamp`](../categories/date/normalizeTimestamp) | [date](../categories/date/) | Converts a timestamp to JavaScript milliseconds format |
| [`randomBetween`](../categories/number/randomBetween) | [number](../categories/number/) | Generates a random number between min and max (inclusive) |
| [`randomIntBetween`](../categories/number/randomIntBetween) | [number](../categories/number/) | Generates a random integer between min and max (inclusive) |
| [`retry`](../categories/promise/retry) | [promise](../categories/promise/) | Retries a promise-returning function up to maxAttempts times |
| [`roundTo`](../categories/number/roundTo) | [number](../categories/number/) | Rounds a number to specified decimal places |
| [`safeDate`](../categories/date/safeDate) | [date](../categories/date/) | Safely creates a Date object from various input types |
| [`satisfiesRange`](../categories/version/satisfiesRange) | [version](../categories/version/) | Checks if a version satisfies a range (simple implementation) |
| [`set`](../categories/object/set) | [object](../categories/object/) | Sets a value in an object using a dot-notated path |
| [`SortFn`](../categories/array/SortFn) | [array](../categories/array/) | Sort function type for arrays |
| [`sortNumberAscFn`](../categories/array/sortNumberAscFn) | [array](../categories/array/) | Sort numbers in ascending order |
| [`sortNumberDescFn`](../categories/array/sortNumberDescFn) | [array](../categories/array/) | Sort numbers in descending order |
| [`sortStringAscFn`](../categories/array/sortStringAscFn) | [array](../categories/array/) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](../categories/array/sortStringAscInsensitiveFn) | [array](../categories/array/) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](../categories/array/sortStringDescFn) | [array](../categories/array/) | Sort strings in descending order |
| [`stripV`](../categories/version/stripV) | [version](../categories/version/) | Strip the leading "v" from a version string if it exists. |
| [`throttle`](../categories/function/throttle) | [function](../categories/function/) | Creates a throttled function that only invokes func at most once per every wait milliseconds |
| [`unique`](../categories/array/unique) | [array](../categories/array/) | Removes duplicate values from an array |

## v1.0.0

| Function | Category | Description |
|----------|----------|-------------|
| [`cleanPath`](../categories/url/cleanPath) | [url](../categories/url/) | Clean an URL by removing duplicate slashes. The protocol part of the URL is not modified. |
| [`combine`](../categories/observable/combine) | [observable](../categories/observable/) | Combine two observables with a map function and an optional pre-treatment.  Note: you can use the pre-treatment to add a filter, a distinctUntilChanged, any other operator that can be used in a pipe, or even an `UntilDestroy` operator. |
| [`combineLatest`](../categories/observable/combineLatest) | [observable](../categories/observable/) | Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.  This method relies on combineLatestOperator of rxjs.  The main difference with combineLatestOperator is in case of empty parameters. If the parameter is empty (empty array or empty object), the result will be also empty.  ATTENTION: this version doesn't support `scheduler` nor `mapper` as last argument like in combineLatestOperator. |
| [`consoleLogPromise`](../categories/promise/consoleLogPromise) | [promise](../categories/promise/) | Returns a function that logs data to the console and passes it through. |
| [`errorToReadableMessage`](../categories/string/errorToReadableMessage) | [string](../categories/string/) | Convert an error to a readable message. |
| [`falsyPromiseOrThrow`](../categories/promise/falsyPromiseOrThrow) | [promise](../categories/promise/) | Returns a function that passes through falsy data or throws an error. |
| [`intersection`](../categories/array/intersection) | [array](../categories/array/) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| [`meaningPromiseOrThrow`](../categories/promise/meaningPromiseOrThrow) | [promise](../categories/promise/) | Returns a function that passes through meaningful data or throws an error. Data is considered meaningless if it is null, undefined, empty string, empty object, or empty array. |
| [`oneInCommon`](../categories/array/oneInCommon) | [array](../categories/array/) | Simple helper that check if two lists shared at least an item in common. |
| [`onlyPath`](../categories/url/onlyPath) | [url](../categories/url/) | Extract only the path from an URI with optional query and fragments.  For example, all these parameters will return `/path`:  - `/path`  - `/path?query=thing`  - `/path#fragment`  - `/path?query=thing#fragment` |
| [`relativeURLToAbsolute`](../categories/url/relativeURLToAbsolute) | [url](../categories/url/) | Converts a relative URL to an absolute URL using the current document base URI. |
| [`removeUndefinedNull`](../categories/object/removeUndefinedNull) | [object](../categories/object/) | Remove null and undefined values from an object. |
| [`returnOrThrowError`](../categories/function/returnOrThrowError) | [function](../categories/function/) | Return a value or throw an error if null or undefined. |
| [`truthyPromiseOrThrow`](../categories/promise/truthyPromiseOrThrow) | [promise](../categories/promise/) | Returns a function that passes through truthy data or throws an error. |
| [`withLeadingSlash`](../categories/url/withLeadingSlash) | [url](../categories/url/) | Adds a leading slash `/` to the given URL if it is not already present.  This function is useful for ensuring that URLs are properly formatted with a leading slash, which is often required in web development for consistency and to avoid issues with relative paths. |
| [`withoutLeadingSlash`](../categories/url/withoutLeadingSlash) | [url](../categories/url/) | Removes the leading slash `/` from the given URL if it is present.  This function is useful for ensuring that URLs are properly formatted without a leading slash, which is often required in web development for consistency and to avoid issues with relative paths. |
| [`withoutTrailingSlash`](../categories/url/withoutTrailingSlash) | [url](../categories/url/) | Removes the trailing slash `/` from the given URL if it is present.  This function is useful for ensuring that URLs are properly formatted without a trailing slash, which is often required in web development for consistency and to avoid issues with relative paths. |
| [`withTrailingSlash`](../categories/url/withTrailingSlash) | [url](../categories/url/) | Adds a trailing slash `/` to the given URL if it is not already present.  This function is useful for ensuring that URLs are properly formatted with a trailing slash, which is often required in web development for consistency and to avoid issues with relative paths. |

## *(version unknown)*

| Function | Category | Description |
|----------|----------|-------------|
| [`Result`](../categories/promise/Result) | [promise](../categories/promise/) | Result tuple representing either a successful value or an error. On success: `[undefined, T]`. On error: `[Error, undefined]`. |

