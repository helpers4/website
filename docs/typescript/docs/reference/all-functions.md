---
sidebar_label: "All Functions"
sidebar_position: 1
title: "All Functions"
description: "Complete alphabetical list of all @helpers4 TypeScript utility functions across every category."
---

# All Functions

All **85** helpers available in `@helpers4/*`, sorted alphabetically.

| Function | Category | Description |
|----------|----------|-------------|
| [`arrayEquals`](../categories/array/arrayEquals) | [array](../categories/array/) | Simple helper that checks if two lists are identical. The order of elements in the list is not important. |
| [`camelCase`](../categories/string/camelCase) | [string](../categories/string/) | Converts kebab-case to camelCase |
| [`capitalize`](../categories/string/capitalize) | [string](../categories/string/) | Capitalizes the first letter of a string |
| [`chunk`](../categories/array/chunk) | [array](../categories/array/) | Chunks an array into smaller arrays of specified size |
| [`clamp`](../categories/number/clamp) | [number](../categories/number/) | Clamps a number between min and max values |
| [`cleanPath`](../categories/url/cleanPath) | [url](../categories/url/) | Clean an URL by removing duplicate slashes. The protocol part of the URL is not modified. |
| [`combine`](../categories/observable/combine) | [observable](../categories/observable/) | Combine two observables with a map function and an optional pre-treatment.  Note: you can use the pre-treatment to add a filter, a distinctUntilChanged, any other operator that can be used in a pipe, or even an `UntilDestroy` operator. |
| [`combineLatest`](../categories/observable/combineLatest) | [observable](../categories/observable/) | Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.  This method relies on combineLatestOperator of rxjs.  The main difference with combineLatestOperator is in case of empty parameters. If the parameter is empty (empty array or empty object), the result will be also empty.  ATTENTION: this version doesn't support `scheduler` nor `mapper` as last argument like in combineLatestOperator. |
| [`compare`](../categories/date/compare) | [date](../categories/date/) | Comparison of two dates. |
| [`compare`](../categories/version/compare) | [version](../categories/version/) | Compares two semantic version strings according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.PATCH - Pre-release: -alpha, -beta.1, -rc.1, etc. - Build metadata: +build, +sha.abc123 (ignored in comparison per spec) - Optional 'v' prefix |
| [`consoleLogPromise`](../categories/promise/consoleLogPromise) | [promise](../categories/promise/) | Returns a function that logs data to the console and passes it through. |
| [`createSortByDateFn`](../categories/array/createSortByDateFn) | [array](../categories/array/) | Creates a sort function for objects by date property |
| [`createSortByNumberFn`](../categories/array/createSortByNumberFn) | [array](../categories/array/) | Creates a sort function for objects by number property |
| [`createSortByStringFn`](../categories/array/createSortByStringFn) | [array](../categories/array/) | Creates a sort function for objects by string property |
| [`DateCompareOptions`](../categories/date/DateCompareOptions) | [date](../categories/date/) | Options for date comparison |
| [`dateToISOString`](../categories/date/dateToISOString) | [date](../categories/date/) | Formats a date to ISO string or returns null |
| [`daysDifference`](../categories/date/daysDifference) | [date](../categories/date/) | Gets the difference in days between two dates |
| [`debounce`](../categories/function/debounce) | [function](../categories/function/) | Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last time the debounced function was invoked |
| [`deepClone`](../categories/object/deepClone) | [object](../categories/object/) | Creates a deep copy of an object or array |
| [`deepCompare`](../categories/array/deepCompare) | [array](../categories/array/) | Deep comparison of two arrays that only returns true or false. Arrays are considered equal if they have the same length and all elements  at corresponding positions are strictly equal. Only compares arrays, does not go into deep object comparison. |
| [`deepCompare`](../categories/object/deepCompare) | [object](../categories/object/) | Deep comparison of two objects that returns detailed information about differences. |
| [`DeepCompareResult`](../categories/object/DeepCompareResult) | [object](../categories/object/) | Result type for deep comparison when objects are not identical |
| [`deepMerge`](../categories/object/deepMerge) | [object](../categories/object/) | Merges two or more objects deeply |
| [`delay`](../categories/promise/delay) | [promise](../categories/promise/) | Creates a promise that resolves after specified delay |
| [`difference`](../categories/array/difference) | [array](../categories/array/) | Returns the difference between two arrays (items in first array but not in second) |
| [`errorToReadableMessage`](../categories/string/errorToReadableMessage) | [string](../categories/string/) | Convert an error to a readable message. |
| [`extractPureURI`](../categories/url/extractPureURI) | [url](../categories/url/) | Extracts the pure URI from a URL by removing query parameters and fragments. |
| [`falsyPromiseOrThrow`](../categories/promise/falsyPromiseOrThrow) | [promise](../categories/promise/) | Returns a function that passes through falsy data or throws an error. |
| [`get`](../categories/object/get) | [object](../categories/object/) | Gets a value from an object using a dot-notated path |
| [`increment`](../categories/version/increment) | [version](../categories/version/) | Increments a semantic version |
| [`intersection`](../categories/array/intersection) | [array](../categories/array/) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| [`isArray`](../categories/type/isArray) | [type](../categories/type/) | Checks if a value is an array |
| [`isBoolean`](../categories/type/isBoolean) | [type](../categories/type/) | Checks if a value is a boolean |
| [`isDate`](../categories/type/isDate) | [type](../categories/type/) | Checks if a value is a Date |
| [`isDefinedAndNotNull`](../categories/function/isDefinedAndNotNull) | [function](../categories/function/) | Check if a given value of unknown data type is defined and not null |
| [`isEmpty`](../categories/type/isEmpty) | [type](../categories/type/) | Checks if a value is empty.  Supported types: - `null` / `undefined` → empty - `string` → length === 0 - `array` → length === 0 - `Map` / `Set` → size === 0 - plain object → no own enumerable properties |
| [`isFunction`](../categories/type/isFunction) | [type](../categories/type/) | Checks if a value is a function |
| [`isNumber`](../categories/type/isNumber) | [type](../categories/type/) | Checks if a value is a number |
| [`isObject`](../categories/type/isObject) | [type](../categories/type/) | Checks if a value is a plain object |
| [`isSameDay`](../categories/date/isSameDay) | [date](../categories/date/) | Checks if two dates are the same day |
| [`isSet`](../categories/type/isSet) | [type](../categories/type/) | Checks if a value is set (not undefined nor null) |
| [`isSpecialObject`](../categories/type/isSpecialObject) | [type](../categories/type/) | Determines if a value is a special object that should not have its properties compared deeply. Special objects include: Date, Function, Promise, Observable, RegExp, Error, Map, Set, WeakMap, WeakSet, etc. |
| [`isString`](../categories/type/isString) | [type](../categories/type/) | Checks if a value is a string |
| [`isTimestampInSeconds`](../categories/date/isTimestampInSeconds) | [date](../categories/date/) | Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style) |
| [`isValidRegex`](../categories/type/isValidRegex) | [type](../categories/type/) | Checks if a string is a valid regex |
| [`kebabCase`](../categories/string/kebabCase) | [string](../categories/string/) | Converts camelCase to kebab-case |
| [`labelize`](../categories/string/labelize) | [string](../categories/string/) | Transform string to lowercase with capitalized first letters and with spaces between words |
| [`Maybe`](../categories/type/Maybe) | [type](../categories/type/) | Type for values that can be T, undefined, or null |
| [`meaningPromiseOrThrow`](../categories/promise/meaningPromiseOrThrow) | [promise](../categories/promise/) | Returns a function that passes through meaningful data or throws an error. Data is considered meaningless if it is null, undefined, empty string, empty object, or empty array. |
| [`memoize`](../categories/function/memoize) | [function](../categories/function/) | Returns a memoized version of the function that caches results |
| [`normalizeTimestamp`](../categories/date/normalizeTimestamp) | [date](../categories/date/) | Converts a timestamp to JavaScript milliseconds format |
| [`oneInCommon`](../categories/array/oneInCommon) | [array](../categories/array/) | Simple helper that check if two lists shared at least an item in common. |
| [`onlyPath`](../categories/url/onlyPath) | [url](../categories/url/) | Extract only the path from an URI with optional query and fragments.  For example, all these parameters will return `/path`:  - `/path`  - `/path?query=thing`  - `/path#fragment`  - `/path?query=thing#fragment` |
| [`parse`](../categories/version/parse) | [version](../categories/version/) | Parses a semantic version string into its components according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.PATCH - Pre-release: -alpha, -beta.1, -rc.1, -0.3.7, -x.7.z.92 - Build metadata: +build, +sha.abc123, +20130313144700 - Optional 'v' prefix (commonly used in git tags) |
| [`ParsedVersion`](../categories/version/ParsedVersion) | [version](../categories/version/) | Represents a parsed semantic version according to SemVer 2.0.0 specification |
| [`quickCompare`](../categories/array/quickCompare) | [array](../categories/array/) | Quick comparison of two arrays using JSON.stringify. This is a fast but simple comparison that may not work for all edge cases. |
| [`quickCompare`](../categories/object/quickCompare) | [object](../categories/object/) | Quick comparison of two objects using JSON.stringify. This is a fast but simple comparison that may not work for all edge cases. |
| [`randomBetween`](../categories/number/randomBetween) | [number](../categories/number/) | Generates a random number between min and max (inclusive) |
| [`randomIntBetween`](../categories/number/randomIntBetween) | [number](../categories/number/) | Generates a random integer between min and max (inclusive) |
| [`relativeURLToAbsolute`](../categories/url/relativeURLToAbsolute) | [url](../categories/url/) | Converts a relative URL to an absolute URL using the current document base URI. |
| [`removeUndefinedNull`](../categories/object/removeUndefinedNull) | [object](../categories/object/) | Remove null and undefined values from an object. |
| [`retry`](../categories/promise/retry) | [promise](../categories/promise/) | Retries a promise-returning function up to maxAttempts times |
| [`returnOrThrowError`](../categories/function/returnOrThrowError) | [function](../categories/function/) | Return a value or throw an error is null or undefined. |
| [`roundTo`](../categories/number/roundTo) | [number](../categories/number/) | Rounds a number to specified decimal places |
| [`safeDate`](../categories/date/safeDate) | [date](../categories/date/) | Safely creates a Date object from various input types |
| [`satisfiesRange`](../categories/version/satisfiesRange) | [version](../categories/version/) | Checks if a version satisfies a range (simple implementation) |
| [`set`](../categories/object/set) | [object](../categories/object/) | Sets a value in an object using a dot-notated path |
| [`slugify`](../categories/string/slugify) | [string](../categories/string/) | Converts a string into a URL-friendly slug. |
| [`SortFn`](../categories/array/SortFn) | [array](../categories/array/) | Sort function type for arrays |
| [`sortNumberAscFn`](../categories/array/sortNumberAscFn) | [array](../categories/array/) | Sort numbers in ascending order |
| [`sortNumberDescFn`](../categories/array/sortNumberDescFn) | [array](../categories/array/) | Sort numbers in descending order |
| [`sortStringAscFn`](../categories/array/sortStringAscFn) | [array](../categories/array/) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](../categories/array/sortStringAscInsensitiveFn) | [array](../categories/array/) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](../categories/array/sortStringDescFn) | [array](../categories/array/) | Sort strings in descending order |
| [`stripV`](../categories/version/stripV) | [version](../categories/version/) | Strip the leading "v" from a version string if it exists. |
| [`throttle`](../categories/function/throttle) | [function](../categories/function/) | Creates a throttled function that only invokes func at most once per every wait milliseconds |
| [`toISO8601`](../categories/date/toISO8601) | [date](../categories/date/) | Converts a date to ISO 8601 format Format: YYYY-MM-DDTHH:mm:ss.sssZ |
| [`toRFC2822`](../categories/date/toRFC2822) | [date](../categories/date/) | Converts a date to RFC 2822 format Format: Day, DD Mon YYYY HH:mm:ss +0000 Used in email headers (Date field) and HTTP headers |
| [`toRFC3339`](../categories/date/toRFC3339) | [date](../categories/date/) | Converts a date to RFC 3339 format Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm RFC 3339 is a profile of ISO 8601, but without milliseconds by default |
| [`truthyPromiseOrThrow`](../categories/promise/truthyPromiseOrThrow) | [promise](../categories/promise/) | Returns a function that passes through truthy data or throws an error. |
| [`unique`](../categories/array/unique) | [array](../categories/array/) | Removes duplicate values from an array |
| [`withLeadingSlash`](../categories/url/withLeadingSlash) | [url](../categories/url/) | Adds a leading slash `/` to the given URL if it is not already present.  This function is useful for ensuring that URLs are properly formatted with a leading slash, which is often required in web development for consistency and to avoid issues with relative paths. |
| [`withoutLeadingSlash`](../categories/url/withoutLeadingSlash) | [url](../categories/url/) | Removes the leading slash `/` from the given URL if it is present.  This function is useful for ensuring that URLs are properly formatted without a leading slash, which is often required in web development for consistency and to avoid issues with relative paths. |
| [`withoutTrailingSlash`](../categories/url/withoutTrailingSlash) | [url](../categories/url/) | Removes the trailing slash `/` from the given URL if it is present.  This function is useful for ensuring that URLs are properly formatted without a trailing slash, which is often required in web development for consistency and to avoid issues with relative paths. |
| [`withTrailingSlash`](../categories/url/withTrailingSlash) | [url](../categories/url/) | Adds a trailing slash `/` to the given URL if it is not already present.  This function is useful for ensuring that URLs are properly formatted with a trailing slash, which is often required in web development for consistency and to avoid issues with relative paths. |
