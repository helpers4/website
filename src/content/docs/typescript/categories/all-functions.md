---
title: "All Functions"
description: "Complete list of all @helpers4 TypeScript utility functions and native alternatives, by category."
sidebar:
  label: "All Functions"
  order: 0
---

# All Functions

**168** implemented helpers + **40** covered by native JavaScript APIs, sorted alphabetically.

| Function | Category | Description |
|----------|----------|-------------|
| `add / subtract (date arithmetic)` | [date](date/) | <span class="badge badge--secondary">native JS</span> `Temporal.PlainDate.prototype.add(duration) / .subtract(duration)` *(Temporal (Stage 3))* |
| [`addDays`](date/addDays) | [date](date/) | Adds days to a date. |
| [`addMonths`](date/addMonths) | [date](date/) | Adds months to a date. |
| [`addYears`](date/addYears) | [date](date/) | Adds years to a date. |
| [`analyzeCommits`](commit/analyzeCommits) | [commit](commit/) | Analyses a list of commits to suggest a semantic version bump. |
| [`buildConventionalCommitRegex`](commit/buildConventionalCommitRegex) | [commit](commit/) | Builds a regular expression matching the **subject line** of a Conventional Commits message. |
| [`camelCase`](string/camelCase) | [string](string/) | Converts kebab-case to camelCase |
| [`capitalize`](string/capitalize) | [string](string/) | Capitalizes the first letter of a string |
| `ceil / floor` | [number](number/) | <span class="badge badge--secondary">native JS</span> `Math.ceil() / Math.floor()` *(ES1)* |
| [`chunk`](array/chunk) | [array](array/) | Chunks an array into smaller arrays of specified size |
| [`clamp`](number/clamp) | [number](number/) | Clamps a number between min and max values |
| [`clampDate`](date/clampDate) | [date](date/) | Clamps a date to a [min, max] range. |
| [`cleanPath`](url/cleanPath) | [url](url/) | Clean an URL by removing duplicate slashes. |
| [`combine`](observable/combine) | [observable](observable/) | Combine two observables with a map function and an optional pre-treatment. |
| [`combineLatest`](observable/combineLatest) | [observable](observable/) | Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of i… |
| [`compact`](array/compact) | [array](array/) | Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array. |
| [`compact`](object/compact) | [object](object/) | Removes all entries with falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an object. |
| [`compare`](date/compare) | [date](date/) | Comparison of two dates. |
| [`compare`](version/compare) | [version](version/) | Compares two semantic version strings according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.… |
| `compare (ordering)` | [date](date/) | <span class="badge badge--secondary">native JS</span> `Temporal.PlainDate.compare(a, b) / Temporal.Instant.compare(a, b)` *(Temporal (Stage 3))* |
| [`consoleLogPromise`](promise/consoleLogPromise) | [promise](promise/) | Returns a function that logs data to the console and passes it through. |
| [`createSortByDateFn`](array/createSortByDateFn) | [array](array/) | Creates a sort function for objects by date property |
| [`createSortByNumberFn`](array/createSortByNumberFn) | [array](array/) | Creates a sort function for objects by number property |
| [`createSortByStringFn`](array/createSortByStringFn) | [array](array/) | Creates a sort function for objects by string property |
| [`dateToISOString`](date/dateToISOString) | [date](date/) | Formats a date to ISO string or returns null. |
| [`daysDifference`](date/daysDifference) | [date](date/) | Gets the difference in days between two dates. |
| [`daysInMonth`](date/daysInMonth) | [date](date/) | Returns the number of days in the given month of the given year. |
| [`debounce`](function/debounce) | [function](function/) | Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last tim… |
| [`deepClone`](object/deepClone) | [object](object/) | Creates a deep copy of an object or array |
| [`deepCompare`](object/deepCompare) | [object](object/) | Deep comparison of two objects that returns detailed information about differences. |
| [`deepEquals`](array/deepEquals) | [array](array/) | Deep comparison of two arrays that only returns true or false. |
| [`deepMerge`](object/deepMerge) | [object](object/) | Merges two or more objects deeply |
| [`delay`](promise/delay) | [promise](promise/) | Creates a promise that resolves after specified delay |
| [`difference`](array/difference) | [array](array/) | Returns the difference between two arrays (items in first array but not in second) |
| [`difference`](date/difference) | [date](date/) | Calculates the difference between two dates in the specified unit. |
| `drop` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(n)` *(ES3)* |
| [`eachDay`](date/eachDay) | [date](date/) | Returns an array of `Date` objects for each day from `start` to `end` (inclusive). |
| [`eachMonth`](date/eachMonth) | [date](date/) | Returns an array of `Date` objects for the first day of each month from `start` to `end` (inclusive). |
| [`endOf`](date/endOf) | [date](date/) | Returns a new `Date` set to the **end** of the given unit. |
| [`ensureArray`](array/ensureArray) | [array](array/) | Wraps a value in an array if it is not already one. |
| [`ensureDate`](date/ensureDate) | [date](date/) | Safely converts a date-like value to a valid `Date` object, or returns `null`. |
| [`equals`](array/equals) | [array](array/) | Simple helper that checks if two lists are identical. |
| [`extractErrorMessage`](string/extractErrorMessage) | [string](string/) | Convert an error to a readable message. |
| [`extractPureURI`](url/extractPureURI) | [url](url/) | Extracts the pure URI from a URL by removing query parameters and fragments. |
| [`falsyPromiseOrThrow`](promise/falsyPromiseOrThrow) | [promise](promise/) | Returns a function that passes through falsy data or throws an error. |
| `find / findIndex` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.find() / findIndex()` *(ES2015)* |
| `flatten / flat` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.flat(depth?)` *(ES2019)* |
| [`formatDuration`](date/formatDuration) | [date](date/) | Formats a duration in milliseconds as a compact human-readable string. |
| [`formatInTimezone`](date/formatInTimezone) | [date](date/) | Formats a date in a specific IANA timezone using `Intl.DateTimeFormat`. |
| [`formatSize`](number/formatSize) | [number](number/) | Format a byte count into a human-readable string with the appropriate unit. |
| `from (parse temporal string)` | [date](date/) | <span class="badge badge--secondary">native JS</span> `Temporal.Instant.from(str) / Temporal.PlainDate.from(str) / etc.` *(Temporal (Stage 3))* |
| [`fromMillis`](date/fromMillis) | [date](date/) | Creates a `Date` from a timestamp in **milliseconds**. |
| [`fromSeconds`](date/fromSeconds) | [date](date/) | Creates a `Date` from a timestamp in **seconds**. |
| [`get`](object/get) | [object](object/) | Gets a value from an object using a dot-notated path |
| [`getTimezoneOffset`](date/getTimezoneOffset) | [date](date/) | Returns the UTC offset **in minutes** for the given IANA timezone at a specific point in time. |
| `groupBy / group` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Object.groupBy(arr, fn)` *(ES2024)* |
| [`guard`](promise/guard) | [promise](promise/) | Wraps a function so that if it throws, a default value is returned instead of propagating the error. |
| `has` | [object](object/) | <span class="badge badge--secondary">native JS</span> `Object.hasOwn(obj, key)` *(ES2022)* |
| `head / first` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(0)` *(ES2022)* |
| [`identity`](function/identity) | [function](function/) | Returns the given value unchanged  Useful as a default transform, in function composition, or as a placeholder mapper. |
| `includes` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.includes()` *(ES2016)* |
| [`increment`](version/increment) | [version](version/) | Increments a semantic version |
| [`injectWordBreaks`](string/injectWordBreaks) | [string](string/) | Adds word-break opportunities to a string so it can wrap cleanly in narrow UI containers such as side panels or table… |
| [`intersection`](array/intersection) | [array](array/) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| [`isArray`](type/isArray) | [type](type/) | Checks if a value is an array. |
| [`isArrayBuffer`](type/isArrayBuffer) | [type](type/) | Checks if a value is an ArrayBuffer instance. |
| [`isAsyncFunction`](type/isAsyncFunction) | [type](type/) | Checks if a value is an async function. |
| [`isBigInt`](type/isBigInt) | [type](type/) | Checks if a value is a bigint. |
| [`isBlob`](type/isBlob) | [type](type/) | Checks if a value is a Blob instance. |
| [`isBoolean`](type/isBoolean) | [type](type/) | Checks if a value is a boolean. |
| [`isBuffer`](type/isBuffer) | [type](type/) | Checks if a value is a Node.js Buffer instance. |
| [`isBusinessDay`](date/isBusinessDay) | [date](date/) | Checks whether a date falls on a business day (i.e. |
| [`isConventionalCommit`](commit/isConventionalCommit) | [commit](commit/) | Checks whether a commit message's subject line follows the Conventional Commits format constrained by the given options. |
| [`isDate`](type/isDate) | [type](type/) | Checks if a value is a Date instance. |
| [`isDefined`](type/isDefined) | [type](type/) | Checks if a value is defined (not undefined nor null). |
| `isDirectInstanceOf` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value.constructor === Foo` *(ES1)* |
| [`isEmpty`](type/isEmpty) | [type](type/) | Checks if a value is empty. |
| [`isError`](type/isError) | [type](type/) | Checks if a value is an Error instance. |
| [`isFalsy`](type/isFalsy) | [type](type/) | Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`). |
| `isFinite / isFiniteNumber` | [type](type/) | <span class="badge badge--secondary">native JS</span> `Number.isFinite(value)` *(ES2015)* |
| [`isFormData`](type/isFormData) | [type](type/) | Checks if a value is a FormData instance. |
| [`isFunction`](type/isFunction) | [type](type/) | Checks if a value is a function. |
| `isHtmlElement / isUrlInstance / isUrlSearchParams` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value instanceof HTMLElement / URL / URLSearchParams` *(Web API)* |
| `isInteger` | [type](type/) | <span class="badge badge--secondary">native JS</span> `Number.isInteger(value)` *(ES2015)* |
| [`isIterable`](type/isIterable) | [type](type/) | Checks if a value is iterable (has a `Symbol.iterator` method). |
| [`isLeapYear`](date/isLeapYear) | [date](date/) | Returns `true` if the given year is a leap year. |
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
| [`isPrerelease`](version/isPrerelease) | [version](version/) | Returns `true` when the version string has a prerelease suffix (i.e. |
| [`isPrimitive`](type/isPrimitive) | [type](type/) | Checks if a value is a JavaScript primitive. |
| [`isPromise`](type/isPromise) | [type](type/) | Checks if a value is a Promise or a thenable. |
| [`isRegExp`](type/isRegExp) | [type](type/) | Checks if a value is a RegExp instance. |
| `isSafeInteger` | [type](type/) | <span class="badge badge--secondary">native JS</span> `Number.isSafeInteger(value)` *(ES2015)* |
| [`isSameDay`](date/isSameDay) | [date](date/) | Checks if two dates are the same day. |
| [`isSameMonth`](date/isSameMonth) | [date](date/) | Checks if two dates are in the same month (and year). |
| [`isSameYear`](date/isSameYear) | [date](date/) | Checks if two dates are in the same year. |
| `isSet (Set data structure)` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value instanceof Set` *(ES2015)* |
| [`isSpecialObject`](type/isSpecialObject) | [type](type/) | Determines if a value is a special object that should not have its properties compared deeply. |
| [`isString`](type/isString) | [type](type/) | Checks if a value is a string. |
| [`isSymbol`](type/isSymbol) | [type](type/) | Checks if a value is a symbol. |
| [`isTemporalDuration`](type/isTemporalDuration) | [type](type/) | Checks if a value is a `Temporal.Duration`. |
| [`isTemporalInstant`](type/isTemporalInstant) | [type](type/) | Checks if a value is a `Temporal.Instant`. |
| [`isTemporalPlainDate`](type/isTemporalPlainDate) | [type](type/) | Checks if a value is a `Temporal.PlainDate`. |
| [`isTemporalPlainDateTime`](type/isTemporalPlainDateTime) | [type](type/) | Checks if a value is a `Temporal.PlainDateTime`. |
| [`isTemporalPlainTime`](type/isTemporalPlainTime) | [type](type/) | Checks if a value is a `Temporal.PlainTime`. |
| [`isTemporalZonedDateTime`](type/isTemporalZonedDateTime) | [type](type/) | Checks if a value is a `Temporal.ZonedDateTime`. |
| [`isTimestamp`](type/isTimestamp) | [type](type/) | Checks if a value is a valid timestamp (milliseconds or Unix seconds). |
| [`isTimestampInSeconds`](date/isTimestampInSeconds) | [date](date/) | Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style) |
| [`isTruthy`](type/isTruthy) | [type](type/) | Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`). |
| [`isUndefined`](type/isUndefined) | [type](type/) | Checks if a value is `undefined`. |
| [`isValidDate`](type/isValidDate) | [type](type/) | Checks if a value is a valid Date instance (not `Invalid Date`). |
| [`isValidDateString`](date/isValidDateString) | [date](date/) | Checks whether a string can be parsed into a valid `Date`. |
| [`isValidRegex`](type/isValidRegex) | [type](type/) | Checks if a string is a valid regex pattern. |
| `isWeakMap / isWeakSet / isWeakRef` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value instanceof WeakMap / WeakSet / WeakRef` *(ES2015 / ES2021)* |
| [`isWeekend`](date/isWeekend) | [date](date/) | Checks whether a date falls on a weekend day. |
| [`isWithinRange`](date/isWithinRange) | [date](date/) | Checks whether a date falls within a range (inclusive on both ends). |
| [`kebabCase`](string/kebabCase) | [string](string/) | Converts camelCase to kebab-case |
| `keys / values` | [object](object/) | <span class="badge badge--secondary">native JS</span> `Object.keys() / Object.values()` *(ES2017)* |
| `last` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(-1)` *(ES2022)* |
| [`listTimezones`](date/listTimezones) | [date](date/) | Returns the list of IANA timezone identifiers supported by the runtime. |
| [`meaningPromiseOrThrow`](promise/meaningPromiseOrThrow) | [promise](promise/) | Returns a function that passes through meaningful data or throws an error. |
| [`memoize`](function/memoize) | [function](function/) | Returns a memoized version of the function that caches results |
| `merge (shallow)` | [object](object/) | <span class="badge badge--secondary">native JS</span> `{ ...a, ...b } or Object.assign({}, a, b)` *(ES2015)* |
| `min / max` | [number](number/) | <span class="badge badge--secondary">native JS</span> `Math.min(...arr) / Math.max(...arr)` *(ES1)* |
| [`noop`](function/noop) | [function](function/) | A no-operation function that does nothing and returns `undefined`  Useful as a default callback, placeholder, or to e… |
| [`normalizeTimestamp`](date/normalizeTimestamp) | [date](date/) | Converts a timestamp to JavaScript milliseconds format |
| `now (date/time/instant)` | [date](date/) | <span class="badge badge--secondary">native JS</span> `Temporal.Now.instant() / .zonedDateTimeISO() / .plainDateISO() / .plainTimeISO()` *(Temporal (Stage 3))* |
| [`omit`](object/omit) | [object](object/) | Creates a new object without the specified keys. |
| [`oneInCommon`](array/oneInCommon) | [array](array/) | Simple helper that check if two lists shared at least an item in common. |
| [`onlyPath`](url/onlyPath) | [url](url/) | Extract only the path from an URI with optional query and fragments. |
| [`overlaps`](date/overlaps) | [date](date/) | Checks whether two date ranges overlap. |
| `padStart / padEnd` | [string](string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.padStart() / padEnd()` *(ES2017)* |
| [`parallel`](promise/parallel) | [promise](promise/) | Runs an array of async functions with a concurrency limit. |
| [`parse`](version/parse) | [version](version/) | Parses a semantic version string into its components according to SemVer 2.0.0 specification  Supports: - Core versio… |
| [`parseConventionalCommit`](commit/parseConventionalCommit) | [commit](commit/) | Parses a Conventional Commits message into a structured object. |
| [`parsePackageRepository`](url/parsePackageRepository) | [url](url/) | Parse the `repository` field from `package.json` into a structured object. |
| [`partition`](array/partition) | [array](array/) | Splits an array into two groups based on a predicate function. |
| [`pascalCase`](string/pascalCase) | [string](string/) | Converts a string to PascalCase. |
| [`pick`](object/pick) | [object](object/) | Creates a new object with only the specified keys. |
| [`randomBetween`](number/randomBetween) | [number](number/) | Generates a random number between min and max (inclusive) |
| [`randomIntBetween`](number/randomIntBetween) | [number](number/) | Generates a random integer between min and max (inclusive) |
| [`range`](array/range) | [array](array/) | Generates an array of sequential numbers from start to end (exclusive). |
| [`relativeURLToAbsolute`](url/relativeURLToAbsolute) | [url](url/) | Converts a relative URL to an absolute URL using the current document base URI. |
| [`removeUndefinedNull`](object/removeUndefinedNull) | [object](object/) | Remove null and undefined values from an object. |
| `repeat` | [string](string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.repeat()` *(ES2015)* |
| [`retry`](promise/retry) | [promise](promise/) | Retries a promise-returning function up to maxAttempts times |
| [`returnOrThrowError`](function/returnOrThrowError) | [function](function/) | Return a value or throw an error if null or undefined. |
| `reverse` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.toReversed()` *(ES2023)* |
| [`roundTo`](number/roundTo) | [number](number/) | Rounds a number to specified decimal places |
| [`safeDate`](date/safeDate) | [date](date/) | Safely creates a Date object from various input types. |
| [`safeJsonParse`](object/safeJsonParse) | [object](object/) | Parses a JSON string, returning `null` (or a fallback) on any parse failure. |
| [`sample`](array/sample) | [array](array/) | Picks one or more random elements from an array. |
| [`satisfiesRange`](version/satisfiesRange) | [version](version/) | Checks if a version satisfies a range (simple implementation) |
| [`set`](object/set) | [object](object/) | Sets a value in an object using a dot-notated path |
| [`shallowEquals`](array/shallowEquals) | [array](array/) | Quick comparison of two arrays using JSON.stringify. |
| [`shallowEquals`](object/shallowEquals) | [object](object/) | Quick comparison of two objects using JSON.stringify. |
| [`shuffle`](array/shuffle) | [array](array/) | Randomly reorders elements of an array using the Fisher-Yates algorithm. |
| [`slugify`](string/slugify) | [string](string/) | Converts a string into a URL-friendly slug. |
| [`snakeCase`](string/snakeCase) | [string](string/) | Converts a string to snake_case. |
| `sortBy / orderBy` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.toSorted(fn?)` *(ES2023)* |
| [`sortNumberAscFn`](array/sortNumberAscFn) | [array](array/) | Sort numbers in ascending order |
| [`sortNumberDescFn`](array/sortNumberDescFn) | [array](array/) | Sort numbers in descending order |
| [`sortStringAscFn`](array/sortStringAscFn) | [array](array/) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](array/sortStringAscInsensitiveFn) | [array](array/) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](array/sortStringDescFn) | [array](array/) | Sort strings in descending order |
| [`startOf`](date/startOf) | [date](date/) | Returns a new `Date` set to the **start** of the given unit. |
| `startsWith / endsWith` | [string](string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.startsWith() / endsWith()` *(ES2015)* |
| [`stringify`](version/stringify) | [version](version/) | Reconstruct a semantic version string from a ParsedVersion object. |
| [`stripV`](version/stripV) | [version](version/) | Strip the leading "v" from a version string if it exists. |
| [`sum`](number/sum) | [number](number/) | Calculates the sum of an array of numbers. |
| `tail` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(1)` *(ES3)* |
| `take` | [array](array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(0, n)` *(ES3)* |
| [`throttle`](function/throttle) | [function](function/) | Creates a throttled function that only invokes func at most once per every wait milliseconds |
| [`timeAgo`](date/timeAgo) | [date](date/) | Formats a date as a human-readable relative time string. |
| [`timeout`](promise/timeout) | [promise](promise/) | Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration. |
| [`titleCase`](string/titleCase) | [string](string/) | Converts a string to Title Case. |
| `toInt / toFloat` | [number](number/) | <span class="badge badge--secondary">native JS</span> `parseInt(str, 10) / parseFloat(str)` *(ES1)* |
| [`toISO8601`](date/toISO8601) | [date](date/) | Converts a date to ISO 8601 format Format: YYYY-MM-DDTHH:mm:ss.sssZ |
| [`toMillis`](date/toMillis) | [date](date/) | Converts a date to a timestamp in **milliseconds** (epoch millis). |
| `toPairs / fromPairs` | [object](object/) | <span class="badge badge--secondary">native JS</span> `Object.entries() / Object.fromEntries()` *(ES2019)* |
| `toPlainDate / toPlainDateTime / toPlainTime` | [date](date/) | <span class="badge badge--secondary">native JS</span> `Temporal.ZonedDateTime.prototype.toPlainDate() / toPlainDateTime() / toPlainTime()` *(Temporal (Stage 3))* |
| [`toRFC2822`](date/toRFC2822) | [date](date/) | Converts a date to RFC 2822 format Format: Day, DD Mon YYYY HH:mm:ss +0000 Used in email headers (Date field) and HTT… |
| [`toRFC3339`](date/toRFC3339) | [date](date/) | Converts a date to RFC 3339 format Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm RFC 3339 is a profile of… |
| [`toSeconds`](date/toSeconds) | [date](date/) | Converts a date to a timestamp in **seconds** (epoch seconds). |
| `toTemporalInstant` | [date](date/) | <span class="badge badge--secondary">native JS</span> `Date.prototype.toTemporalInstant()` *(Temporal (Stage 3))* |
| `toZonedDateTime` | [date](date/) | <span class="badge badge--secondary">native JS</span> `Temporal.Instant.prototype.toZonedDateTimeISO(tz)` *(Temporal (Stage 3))* |
| `trim / trimStart / trimEnd` | [string](string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.trim() / trimStart() / trimEnd()` *(ES2019)* |
| [`truncate`](string/truncate) | [string](string/) | Truncates a string to `maxLength` characters, appending an ellipsis when cut. |
| [`truthyPromiseOrThrow`](promise/truthyPromiseOrThrow) | [promise](promise/) | Returns a function that passes through truthy data or throws an error. |
| [`tryit`](promise/tryit) | [promise](promise/) | Wraps a function so it never throws. |
| `TypedArrays (isInt8Array, isFloat32Array, ...)` | [type](type/) | <span class="badge badge--secondary">native JS</span> `value instanceof Int8Array / Float32Array / ...` *(ES2015)* |
| [`unique`](array/unique) | [array](array/) | Removes duplicate values from an array |
| `until / since (difference)` | [date](date/) | <span class="badge badge--secondary">native JS</span> `Temporal.PlainDate.prototype.until(other) / .since(other)` *(Temporal (Stage 3))* |
| [`uuid7`](math/uuid7) | [math](math/) | Generates a UUID v7 string (RFC 9562). |
| [`WeekDays`](date/WeekDays) | [date](date/) | Named day-of-week constants following the JavaScript `Date.getDay()` convention. |
| [`withLeadingSlash`](url/withLeadingSlash) | [url](url/) | Adds a leading slash `/` to the given URL if it is not already present. |
| [`withoutLeadingSlash`](url/withoutLeadingSlash) | [url](url/) | Removes the leading slash `/` from the given URL if it is present. |
| [`withoutTrailingSlash`](url/withoutTrailingSlash) | [url](url/) | Removes the trailing slash `/` from the given URL if it is present. |
| `withResolvers` | [promise](promise/) | <span class="badge badge--secondary">native JS</span> `Promise.withResolvers()` *(ES2024)* |
| [`withTrailingSlash`](url/withTrailingSlash) | [url](url/) | Adds a trailing slash `/` to the given URL if it is not already present. |
