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
| [`addDays`](../categories/date/addDays) | [date](../categories/date/) | Adds days to a date.  Returns a **new** `Date` — the original is never mutated. Returns `null` if the input is invalid. |
| [`addMonths`](../categories/date/addMonths) | [date](../categories/date/) | Adds months to a date.  Returns a **new** `Date` — the original is never mutated. When the resulting month has fewer days, JavaScript clamps to the next month (e.g. Jan 31 + 1 month → Mar 3). Use with caution. Returns `null` if the input is invalid. |
| [`addYears`](../categories/date/addYears) | [date](../categories/date/) | Adds years to a date.  Returns a **new** `Date` — the original is never mutated. Returns `null` if the input is invalid. |
| [`clampDate`](../categories/date/clampDate) | [date](../categories/date/) | Clamps a date to a [min, max] range.  Returns a **new** `Date` — the original is never mutated. Returns `null` if any of the inputs is invalid. |
| [`compact`](../categories/array/compact) | [array](../categories/array/) | Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array. |
| [`compact`](../categories/object/compact) | [object](../categories/object/) | Removes all entries with falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an object. |
| [`compare`](../categories/date/compare) | [date](../categories/date/) | Comparison of two dates.  Accepts any DateLike input (Date, timestamp, or date string). |
| [`DateCompareOptions`](../categories/date/DateCompareOptions) | [date](../categories/date/) | Options for date comparison |
| [`DateDifferenceOptions`](../categories/date/DateDifferenceOptions) | [date](../categories/date/) | Options for date difference calculation |
| [`DateLike`](../categories/date/DateLike) | [date](../categories/date/) | A value that can be converted to a Date.  - `Date` — used as-is (validated for Invalid Date) - `number` — treated as a timestamp (seconds or milliseconds, auto-detected);   `0` is treated as invalid and produces `null` in ensureDate - `string` — parsed via `new Date(string)` - `EpochMilliseconds` — any object with a `epochMilliseconds` property   (e.g. `Temporal.Instant`, `Temporal.ZonedDateTime`)  // TODO: When the Temporal API reaches Stage 4 and is available without // flags in all major runtimes, consider narrowing the union to the // concrete Temporal types for stricter type-checking. |
| [`DateRange`](../categories/date/DateRange) | [date](../categories/date/) | A date range represented as a pair of date-like values. |
| [`DateTruncUnit`](../categories/date/DateTruncUnit) | [date](../categories/date/) | Units supported by startOf and endOf. |
| [`daysDifference`](../categories/date/daysDifference) | [date](../categories/date/) | Gets the difference in days between two dates. |
| [`daysInMonth`](../categories/date/daysInMonth) | [date](../categories/date/) | Returns the number of days in the given month of the given year.  Month is **1-based** (1 = January, 12 = December) to match human convention and ISO 8601 (unlike `Date.getMonth()` which is 0-based).  Returns `NaN` if the month is out of range. |
| [`deepCompare`](../categories/object/deepCompare) | [object](../categories/object/) | Deep comparison of two objects that returns detailed information about differences. |
| [`DeepCompareResult`](../categories/object/DeepCompareResult) | [object](../categories/object/) | Result type for deep comparison when objects are not identical |
| [`deepEquals`](../categories/array/deepEquals) | [array](../categories/array/) | Deep comparison of two arrays that only returns true or false. Arrays are considered equal if they have the same length and all elements  at corresponding positions are strictly equal. Only compares arrays, does not go into deep object comparison. |
| [`difference`](../categories/date/difference) | [date](../categories/date/) | Calculates the difference between two dates in the specified unit.  Accepts any DateLike input (Date, timestamp, or date string). |
| [`DifferenceUnit`](../categories/date/DifferenceUnit) | [date](../categories/date/) | Unit for date difference calculation |
| [`eachDay`](../categories/date/eachDay) | [date](../categories/date/) | Returns an array of `Date` objects for each day from `start` to `end` (inclusive).  Both boundaries are included. If `start > end`, an empty array is returned. Returns an empty array if either input is invalid. |
| [`eachMonth`](../categories/date/eachMonth) | [date](../categories/date/) | Returns an array of `Date` objects for the first day of each month from `start` to `end` (inclusive).  Each returned Date is normalized to the 1st of the month at 00:00:00.000. If `start > end`, an empty array is returned. Returns an empty array if either input is invalid. |
| [`endOf`](../categories/date/endOf) | [date](../categories/date/) | Returns a new `Date` set to the **end** of the given unit.  - `'day'`   — 23:59:59.999 - `'month'` — last day of the month, 23:59:59.999 - `'year'`  — December 31st, 23:59:59.999  Returns `null` if the input is invalid. |
| [`ensureArray`](../categories/array/ensureArray) | [array](../categories/array/) | Wraps a value in an array if it is not already one. If the value is already an array, it is returned as-is. If the value is null or undefined, returns an empty array. When a depth is specified, the resulting array is flattened to that depth (like `Array.prototype.flat(depth)`). |
| [`ensureDate`](../categories/date/ensureDate) | [date](../categories/date/) | Safely converts a date-like value to a valid `Date` object, or returns `null`.  Accepts `Date`, timestamps (seconds or milliseconds, auto-detected), date strings, and objects with an `epochMilliseconds` property (e.g. `Temporal.Instant`, `Temporal.ZonedDateTime`). Returns `null` for `null`, `undefined`, empty strings, `0`, and any value that produces an invalid `Date`.  This is the date equivalent of ensureArray — it normalizes flexible input into a guaranteed type (or a safe fallback). |
| [`EpochMilliseconds`](../categories/date/EpochMilliseconds) | [date](../categories/date/) | An object that exposes an epoch timestamp in milliseconds.  This structural type is satisfied by `Temporal.Instant` and `Temporal.ZonedDateTime` (and any future object that carries the same property), so callers can pass Temporal values without importing them. |
| [`equals`](../categories/array/equals) | [array](../categories/array/) | Simple helper that checks if two lists are identical. The order of elements in the list is not important. |
| [`formatDuration`](../categories/date/formatDuration) | [date](../categories/date/) | Formats a duration in milliseconds as a compact human-readable string.  Produces output like `"1h 23m 45s"`. Zero-valued leading units are omitted (e.g. `"23m 45s"` instead of `"0h 23m 45s"`), but trailing zeros are kept up to the minimum unit (`"1h 0m 0s"` when `minUnit` is `'seconds'`).  Negative durations are prefixed with `"-"`. A zero duration returns `"0s"` (or `"0m"` / `"0h"` depending on `minUnit`). |
| [`FormatDurationOptions`](../categories/date/FormatDurationOptions) | [date](../categories/date/) | Options for formatDuration. |
| [`formatInTimezone`](../categories/date/formatInTimezone) | [date](../categories/date/) | Formats a date in a specific IANA timezone using `Intl.DateTimeFormat`.  Returns `null` if the date or timezone is invalid. |
| [`FormatInTimezoneOptions`](../categories/date/FormatInTimezoneOptions) | [date](../categories/date/) | Options for formatInTimezone. |
| [`fromMillis`](../categories/date/fromMillis) | [date](../categories/date/) | Creates a `Date` from a timestamp in **milliseconds**.  Use this when receiving a timestamp from a JS-native source (e.g. `Date.now()`, `performance.timeOrigin`). No heuristic — the input is always treated as milliseconds. |
| [`fromSeconds`](../categories/date/fromSeconds) | [date](../categories/date/) | Creates a `Date` from a timestamp in **seconds**.  Use this when receiving a timestamp from a backend that sends seconds (e.g. Java `Instant.getEpochSecond()`). No heuristic — the input is always treated as seconds. |
| [`getTimezoneOffset`](../categories/date/getTimezoneOffset) | [date](../categories/date/) | Returns the UTC offset **in minutes** for the given IANA timezone at a specific point in time.  A positive value means the timezone is **ahead** of UTC (e.g. `+60` for CET). Returns `null` if the timezone is invalid or the date cannot be parsed.  The implementation uses `Intl.DateTimeFormat` to extract the local representation in the target timezone, then computes the delta from UTC. |
| [`guard`](../categories/promise/guard) | [promise](../categories/promise/) | Wraps a function so that if it throws, a default value is returned instead of propagating the error. Works with both synchronous and asynchronous functions. |
| [`identity`](../categories/function/identity) | [function](../categories/function/) | Returns the given value unchanged  Useful as a default transform, in function composition, or as a placeholder mapper. |
| [`isAsyncFunction`](../categories/type/isAsyncFunction) | [type](../categories/type/) | Checks if a value is an async function.  Returns `true` for any function declared with `async`. |
| [`isBigInt`](../categories/type/isBigInt) | [type](../categories/type/) | Checks if a value is a bigint. |
| [`isBusinessDay`](../categories/date/isBusinessDay) | [date](../categories/date/) | Checks whether a date falls on a business day (i.e. **not** a weekend day).  This is the logical inverse of isWeekend. By default, business days are Monday through Friday. Pass a custom `weekendDays` to adapt to other calendars.  > **Note:** This helper does **not** account for public holidays — those are > country- and region-specific. Use it in combination with your own holiday > list if needed.  Returns `false` if the input is invalid. |
| [`isDate`](../categories/type/isDate) | [type](../categories/type/) | Checks if a value is a Date instance.  Note: this only checks the type, not whether the Date is valid. Use isValidDate to also validate that the Date is not `Invalid Date`. |
| [`isDefined`](../categories/type/isDefined) | [type](../categories/type/) | Checks if a value is defined (not undefined nor null). This is the inverse of isNullish.  Use as a type-safe filter callback to remove `null`/`undefined` from arrays. |
| [`isEmpty`](../categories/type/isEmpty) | [type](../categories/type/) | Checks if a value is empty.  Supported types: - `null` / `undefined` → empty - `string` → length === 0 - `array` → length === 0 - `Map` / `Set` → size === 0 - plain object → no own enumerable properties |
| [`isError`](../categories/type/isError) | [type](../categories/type/) | Checks if a value is an Error instance. |
| [`isFalsy`](../categories/type/isFalsy) | [type](../categories/type/) | Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`). |
| [`isIterable`](../categories/type/isIterable) | [type](../categories/type/) | Checks if a value is iterable (has a `Symbol.iterator` method).  Returns `true` for strings, arrays, Maps, Sets, generators, and any object implementing the iterable protocol. |
| [`isLeapYear`](../categories/date/isLeapYear) | [date](../categories/date/) | Returns `true` if the given year is a leap year.  A year is a leap year when it is divisible by 4, **except** century years which must also be divisible by 400. |
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
| [`isSameDay`](../categories/date/isSameDay) | [date](../categories/date/) | Checks if two dates are the same day.  Accepts any DateLike input (Date, timestamp, or date string). |
| [`isSameMonth`](../categories/date/isSameMonth) | [date](../categories/date/) | Checks if two dates are in the same month (and year).  Accepts any DateLike input (Date, timestamp, or date string). |
| [`isSameYear`](../categories/date/isSameYear) | [date](../categories/date/) | Checks if two dates are in the same year.  Accepts any DateLike input (Date, timestamp, or date string). |
| [`isSpecialObject`](../categories/type/isSpecialObject) | [type](../categories/type/) | Determines if a value is a special object that should not have its properties compared deeply. Special objects include: Date, Function, Promise, Observable, RegExp, Error, Map, Set, WeakMap, WeakSet, etc. |
| [`isSymbol`](../categories/type/isSymbol) | [type](../categories/type/) | Checks if a value is a symbol. |
| [`isTemporalDuration`](../categories/type/isTemporalDuration) | [type](../categories/type/) | Checks if a value is a `Temporal.Duration`.  Uses `instanceof` when `Temporal` is available globally, and falls back to `Symbol.toStringTag` for environments without Temporal (e.g. browsers). |
| [`isTemporalInstant`](../categories/type/isTemporalInstant) | [type](../categories/type/) | Checks if a value is a `Temporal.Instant`.  Uses `instanceof` when `Temporal` is available globally, and falls back to `Symbol.toStringTag` for environments without Temporal (e.g. browsers). |
| [`isTemporalPlainDate`](../categories/type/isTemporalPlainDate) | [type](../categories/type/) | Checks if a value is a `Temporal.PlainDate`.  Uses `instanceof` when `Temporal` is available globally, and falls back to `Symbol.toStringTag` for environments without Temporal (e.g. browsers). |
| [`isTemporalPlainDateTime`](../categories/type/isTemporalPlainDateTime) | [type](../categories/type/) | Checks if a value is a `Temporal.PlainDateTime`.  Uses `instanceof` when `Temporal` is available globally, and falls back to `Symbol.toStringTag` for environments without Temporal (e.g. browsers). |
| [`isTemporalPlainTime`](../categories/type/isTemporalPlainTime) | [type](../categories/type/) | Checks if a value is a `Temporal.PlainTime`.  Uses `instanceof` when `Temporal` is available globally, and falls back to `Symbol.toStringTag` for environments without Temporal (e.g. browsers). |
| [`isTemporalZonedDateTime`](../categories/type/isTemporalZonedDateTime) | [type](../categories/type/) | Checks if a value is a `Temporal.ZonedDateTime`.  Uses `instanceof` when `Temporal` is available globally, and falls back to `Symbol.toStringTag` for environments without Temporal (e.g. browsers). |
| [`isTimestamp`](../categories/type/isTimestamp) | [type](../categories/type/) | Checks if a value is a valid timestamp (milliseconds or Unix seconds).  Supports: - JavaScript / Java timestamps (milliseconds since epoch) - Unix timestamps (seconds since epoch)  The function uses a heuristic to distinguish between the two: numbers ≤ ~7.26 billion are treated as seconds, larger as milliseconds. |
| [`isTruthy`](../categories/type/isTruthy) | [type](../categories/type/) | Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`).  This is the type-safe alternative to `Boolean()` as a filter callback. Unlike `filter(Boolean)`, using `filter(isTruthy)` correctly narrows the resulting array type by excluding falsy values. |
| [`isUndefined`](../categories/type/isUndefined) | [type](../categories/type/) | Checks if a value is `undefined`. |
| [`isValidDate`](../categories/type/isValidDate) | [type](../categories/type/) | Checks if a value is a valid Date instance (not `Invalid Date`).  Unlike isDate, this also verifies that the internal timestamp is not `NaN`. |
| [`isValidDateString`](../categories/date/isValidDateString) | [date](../categories/date/) | Checks whether a string can be parsed into a valid `Date`.  Uses the native `Date` constructor. Returns `false` for empty strings and any string that produces an Invalid Date.  > **Caveat:** The native parser is lenient and implementation-dependent > for non-ISO formats. For strict format validation, prefer a dedicated > library or manual regex checks. |
| [`isWeekend`](../categories/date/isWeekend) | [date](../categories/date/) | Checks whether a date falls on a weekend day.  By default, weekend days are **Saturday** and **Sunday** (Western convention). Pass a custom `weekendDays` tuple to adapt to other calendars (e.g. `[5, 6]` for Friday/Saturday in many Middle-Eastern countries).  Returns `false` if the input is invalid. |
| [`isWithinRange`](../categories/date/isWithinRange) | [date](../categories/date/) | Checks whether a date falls within a range (inclusive on both ends).  Returns `false` if any of the inputs is invalid. |
| [`listTimezones`](../categories/date/listTimezones) | [date](../categories/date/) | Returns the list of IANA timezone identifiers supported by the runtime.  Wraps `Intl.supportedValuesOf('timeZone')` which is available in Node 18+, Chrome 93+, Firefox 93+, Safari 15.4+. |
| [`noop`](../categories/function/noop) | [function](../categories/function/) | A no-operation function that does nothing and returns `undefined`  Useful as a default callback, placeholder, or to explicitly ignore a value. |
| [`omit`](../categories/object/omit) | [object](../categories/object/) | Creates a new object without the specified keys. |
| [`overlaps`](../categories/date/overlaps) | [date](../categories/date/) | Checks whether two date ranges overlap.  Two ranges overlap when `rangeA.start <= rangeB.end` AND `rangeB.start <= rangeA.end` (inclusive on both ends). Returns `false` if any date is invalid. |
| [`parallel`](../categories/promise/parallel) | [promise](../categories/promise/) | Runs an array of async functions with a concurrency limit. At most `limit` functions will be running at any time. |
| [`parse`](../categories/version/parse) | [version](../categories/version/) | Parses a semantic version string into its components according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.PATCH - Pre-release: -alpha, -beta.1, -rc.1, -0.3.7, -x.7.z.92 - Build metadata: +build, +sha.abc123, +20130313144700 - Optional 'v' prefix (commonly used in git tags) |
| [`ParsedVersion`](../categories/version/ParsedVersion) | [version](../categories/version/) | Represents a parsed semantic version according to SemVer 2.0.0 specification |
| [`partition`](../categories/array/partition) | [array](../categories/array/) | Splits an array into two groups based on a predicate function. The first group contains elements for which the predicate returns true, the second group contains the rest. |
| [`pascalCase`](../categories/string/pascalCase) | [string](../categories/string/) | Converts a string to PascalCase. Handles camelCase, kebab-case, snake_case, spaces, and mixed formats. |
| [`pick`](../categories/object/pick) | [object](../categories/object/) | Creates a new object with only the specified keys. |
| [`range`](../categories/array/range) | [array](../categories/array/) | Generates an array of sequential numbers from start to end (exclusive). If only one argument is provided, it generates numbers from 0 to that value. |
| [`sample`](../categories/array/sample) | [array](../categories/array/) | Picks one or more random elements from an array. When called without a count, returns a single element or `undefined` if the array is empty. When called with a count, returns an array of up to `count` random elements sampled without replacement. |
| [`shallowEquals`](../categories/array/shallowEquals) | [array](../categories/array/) | Quick comparison of two arrays using JSON.stringify. This is a fast but simple comparison that may not work for all edge cases. |
| [`shallowEquals`](../categories/object/shallowEquals) | [object](../categories/object/) | Quick comparison of two objects using JSON.stringify. This is a fast but simple comparison that may not work for all edge cases. |
| [`shuffle`](../categories/array/shuffle) | [array](../categories/array/) | Randomly reorders elements of an array using the Fisher-Yates algorithm. Returns a new array without mutating the original. |
| [`slugify`](../categories/string/slugify) | [string](../categories/string/) | Converts a string into a URL-friendly slug. |
| [`snakeCase`](../categories/string/snakeCase) | [string](../categories/string/) | Converts a string to snake_case. Handles camelCase, PascalCase, kebab-case, spaces, and mixed formats. |
| [`startOf`](../categories/date/startOf) | [date](../categories/date/) | Returns a new `Date` set to the **start** of the given unit.  - `'day'`   — 00:00:00.000 - `'month'` — 1st of the month, 00:00:00.000 - `'year'`  — January 1st, 00:00:00.000  Returns `null` if the input is invalid. |
| [`sum`](../categories/number/sum) | [number](../categories/number/) | Calculates the sum of an array of numbers. |
| [`timeAgo`](../categories/date/timeAgo) | [date](../categories/date/) | Formats a date as a human-readable relative time string.  Uses `Intl.RelativeTimeFormat` under the hood, making the output locale-aware (e.g. "il y a 3 jours" in French).  Returns `null` if the input date is invalid. |
| [`TimeAgoOptions`](../categories/date/TimeAgoOptions) | [date](../categories/date/) | Options for timeAgo. |
| [`timeout`](../categories/promise/timeout) | [promise](../categories/promise/) | Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration. |
| [`titleCase`](../categories/string/titleCase) | [string](../categories/string/) | Converts a string to Title Case. Handles camelCase, PascalCase, kebab-case, snake_case, spaces, and mixed formats. |
| [`toISO8601`](../categories/date/toISO8601) | [date](../categories/date/) | Converts a date to ISO 8601 format Format: YYYY-MM-DDTHH:mm:ss.sssZ |
| [`toMillis`](../categories/date/toMillis) | [date](../categories/date/) | Converts a date to a timestamp in **milliseconds** (epoch millis).  Use this when you need a plain number from a `DateLike` value (e.g. for `Date.now()` comparisons, localStorage, or JS-native APIs). |
| [`toRFC2822`](../categories/date/toRFC2822) | [date](../categories/date/) | Converts a date to RFC 2822 format Format: Day, DD Mon YYYY HH:mm:ss +0000 Used in email headers (Date field) and HTTP headers |
| [`toRFC3339`](../categories/date/toRFC3339) | [date](../categories/date/) | Converts a date to RFC 3339 format Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm RFC 3339 is a profile of ISO 8601, but without milliseconds by default |
| [`toSeconds`](../categories/date/toSeconds) | [date](../categories/date/) | Converts a date to a timestamp in **seconds** (epoch seconds).  Use this when sending a date to a backend API that expects seconds (e.g. Java `Instant.getEpochSecond()`, Python `time.time()`). |
| [`tryit`](../categories/promise/tryit) | [promise](../categories/promise/) | Wraps a function so it never throws. Instead, it returns a `[error, result]` tuple. Useful for avoiding try/catch blocks and handling errors in a functional style. |
| [`uuid7`](../categories/math/uuid7) | [math](../categories/math/) | Generates a UUID v7 string (RFC 9562). UUID v7 embeds a Unix timestamp in milliseconds, making it chronologically sortable while retaining randomness. |
| [`WeekDay`](../categories/date/WeekDay) | [date](../categories/date/) | A day-of-week number following the JavaScript `Date.getDay()` convention: 0 = Sunday, 1 = Monday, … 6 = Saturday.  Prefer using WeekDays named constants for readability: `WeekDays.Monday` instead of `1`. |
| [`WeekDays`](../categories/date/WeekDays) | [date](../categories/date/) | Named day-of-week constants following the JavaScript `Date.getDay()` convention. Use these instead of raw numbers for readability. |

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
| [`dateToISOString`](../categories/date/dateToISOString) | [date](../categories/date/) | Formats a date to ISO string or returns null. |
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
| [`memoize`](../categories/function/memoize) | [function](../categories/function/) | Returns a memoized version of the function that caches results |
| [`normalizeTimestamp`](../categories/date/normalizeTimestamp) | [date](../categories/date/) | Converts a timestamp to JavaScript milliseconds format |
| [`randomBetween`](../categories/number/randomBetween) | [number](../categories/number/) | Generates a random number between min and max (inclusive) |
| [`randomIntBetween`](../categories/number/randomIntBetween) | [number](../categories/number/) | Generates a random integer between min and max (inclusive) |
| [`retry`](../categories/promise/retry) | [promise](../categories/promise/) | Retries a promise-returning function up to maxAttempts times |
| [`roundTo`](../categories/number/roundTo) | [number](../categories/number/) | Rounds a number to specified decimal places |
| [`safeDate`](../categories/date/safeDate) | [date](../categories/date/) | Safely creates a Date object from various input types. |
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

