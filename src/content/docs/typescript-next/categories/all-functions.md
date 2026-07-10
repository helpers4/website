---
title: "All Functions"
description: "Complete list of all @helpers4 TypeScript utility functions and native alternatives, by category."
sidebar:
  label: "All Functions"
  order: 0
---

# All Functions

**249** implemented helpers + **47** covered by native JavaScript APIs, sorted alphabetically.

| Function | Category | Description |
|----------|----------|-------------|
| `add / subtract (date arithmetic)` | [date](../date/) | <span class="badge badge--secondary">native JS</span> `Temporal.PlainDate.prototype.add(duration) / .subtract(duration)` *(Temporal (Stage 3))* |
| [`addDays`](../date/adddays/) | [date](../date/) | Adds days to a date. |
| [`addMonths`](../date/addmonths/) | [date](../date/) | Adds months to a date. |
| [`addYears`](../date/addyears/) | [date](../date/) | Adds years to a date. |
| [`analyzeCommits`](../commit/analyzecommits/) | [commit](../commit/) | Analyses a list of commits to suggest a semantic version bump. |
| [`argbToRgb`](../color/argbtorgb/) | [color](../color/) | Converts a 32-bit packed ARGB integer (as used by e.g. |
| [`Brand`](../type/brand/) | [type](../type/) | Brands a base type `T` with a phantom tag `B` to create a nominal type. |
| [`buildConventionalCommitRegex`](../commit/buildconventionalcommitregex/) | [commit](../commit/) | Builds a regular expression matching the **subject line** of a Conventional Commits message. |
| [`buildStatusTable`](../ci/buildstatustable/) | [ci](../ci/) | Builds a Markdown table body from a map of job names to CI/CD statuses. |
| [`camelCase`](../string/camelcase/) | [string](../string/) | Converts kebab-case to camelCase |
| [`capitalize`](../string/capitalize/) | [string](../string/) | Capitalizes the first letter of a string. |
| [`cartesianProduct`](../array/cartesianproduct/) | [array](../array/) | Computes the Cartesian product of the provided arrays. |
| `ceil / floor` | [number](../number/) | <span class="badge badge--secondary">native JS</span> `Math.ceil() / Math.floor()` *(ES1)* |
| [`chunk`](../array/chunk/) | [array](../array/) | Chunks an array into smaller arrays of specified size. |
| [`clamp`](../number/clamp/) | [number](../number/) | Clamps a number between min and max values |
| [`clampDate`](../date/clampdate/) | [date](../date/) | Clamps a date to a [min, max] range. |
| [`cleanPath`](../url/cleanpath/) | [url](../url/) | Clean an URL by removing duplicate slashes. |
| [`cloneDeep`](../object/clonedeep/) | [object](../object/) | Creates a deep copy of an object or array. |
| [`combine`](../observable/combine/) | [observable](../observable/) | Combine two observables with a map function and an optional pre-treatment. |
| [`combineLatest`](../observable/combinelatest/) | [observable](../observable/) | Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of i… |
| [`combineSortFns`](../array/combinesortfns/) | [array](../array/) | Chains multiple sort functions into a single comparator: the first function decides the order unless it reports a tie… |
| [`compact`](../array/compact/) | [array](../array/) | Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array. |
| [`compact`](../object/compact/) | [object](../object/) | Removes all entries with falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an object. |
| [`compare`](../date/compare/) | [date](../date/) | Comparison of two dates. |
| [`compare`](../version/compare/) | [version](../version/) | Compares two semantic version strings according to SemVer 2.0.0 specification  Supports: - Core version: MAJOR.MINOR.… |
| `compare (ordering)` | [date](../date/) | <span class="badge badge--secondary">native JS</span> `Temporal.PlainDate.compare(a, b) / Temporal.Instant.compare(a, b)` *(Temporal (Stage 3))* |
| [`compose`](../function/compose/) | [function](../function/) | Composes functions right-to-left: `compose(f, g)(x)` is equivalent to `f(g(x))`. |
| [`consoleLogPromise`](../promise/consolelogpromise/) | [promise](../promise/) | Returns a function that logs data to the console and passes it through. |
| [`correctFloat`](../number/correctfloat/) | [number](../number/) | Corrects floating-point arithmetic errors by rounding to a given number of significant digits. |
| [`countBy`](../array/countby/) | [array](../array/) | Groups the elements of an array by the key returned by `keyFn` and returns a record mapping each key to the number of… |
| [`createSortByBooleanFn`](../array/createsortbybooleanfn/) | [array](../array/) | Creates a sort function for objects by a boolean property. |
| [`createSortByDateFn`](../array/createsortbydatefn/) | [array](../array/) | Creates a sort function for objects by date property. |
| [`createSortByNaturalFn`](../array/createsortbynaturalfn/) | [array](../array/) | Creates a sort function for objects by one or more string properties using natural ordering. |
| [`createSortByNumberFn`](../array/createsortbynumberfn/) | [array](../array/) | Creates a sort function for objects by number property. |
| [`createSortByStringFn`](../array/createsortbystringfn/) | [array](../array/) | Creates a sort function for objects by one or more string properties. |
| [`curry`](../function/curry/) | [function](../function/) | Transforms a multi-argument function into a chain of single-argument functions (Haskell-style currying). |
| [`daysInMonth`](../date/daysinmonth/) | [date](../date/) | Returns the number of days in the given month of the given year. |
| [`debounce`](../function/debounce/) | [function](../function/) | Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last tim… |
| [`DeepGet`](../type/deepget/) | [type](../type/) | Resolves the value type at a given `Path` within `T`. |
| [`DeepPartial`](../type/deeppartial/) | [type](../type/) | Recursively makes all properties of T optional, including nested objects and array elements. |
| [`DeepSet`](../type/deepset/) | [type](../type/) | Produces the type of `T` after replacing the value at `Path` with `V`. |
| [`DeepWritable`](../type/deepwritable/) | [type](../type/) | Recursively removes `readonly` from all properties of T, including nested objects, array elements, and tuple positions. |
| [`defer`](../promise/defer/) | [promise](../promise/) | Runs an async function and guarantees that all deferred callbacks are executed afterwards, in LIFO order (last regist… |
| [`delay`](../promise/delay/) | [promise](../promise/) | Creates a promise that resolves after specified delay |
| [`diff`](../object/diff/) | [object](../object/) | Structural object diff. |
| [`difference`](../array/difference/) | [array](../array/) | Returns the difference between two arrays (items in first array but not in second). |
| [`difference`](../date/difference/) | [date](../date/) | Calculates the difference between two dates in the specified unit. |
| `drop` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(n)` *(ES3)* |
| [`eachDay`](../date/eachday/) | [date](../date/) | Returns an array of `Date` objects for each day from `start` to `end` (inclusive). |
| [`eachMonth`](../date/eachmonth/) | [date](../date/) | Returns an array of `Date` objects for the first day of each month from `start` to `end` (inclusive). |
| [`endOf`](../date/endof/) | [date](../date/) | Returns a new `Date` set to the **end** of the given unit. |
| [`ensureArray`](../array/ensurearray/) | [array](../array/) | Wraps a value in an array if it is not already one. |
| [`ensureDate`](../date/ensuredate/) | [date](../date/) | Safely converts a date-like value to a valid `Date` object, or returns `null`. |
| [`equalsDeep`](../array/equalsdeep/) | [array](../array/) | Recursive structural array equality. |
| [`equalsDeep`](../object/equalsdeep/) | [object](../object/) | Recursive structural object equality. |
| [`equalsShallow`](../array/equalsshallow/) | [array](../array/) | Positional, one-level (shallow) array equality. |
| [`equalsShallow`](../object/equalsshallow/) | [object](../object/) | One-level (shallow) object equality. |
| [`equalsUnordered`](../array/equalsunordered/) | [array](../array/) | Order-independent (set-style) array equality. |
| [`escape`](../markdown/escape/) | [markdown](../markdown/) | Escapes all Markdown special characters in a string so they render as literal text rather than formatting syntax. |
| [`escapeHtml`](../string/escapehtml/) | [string](../string/) | Escapes the HTML special characters `&`, `<`, `>`, `"`, and `'` in a string. |
| [`extractErrorMessage`](../string/extracterrormessage/) | [string](../string/) | Convert an error to a readable message. |
| [`extractNumber`](../number/extractnumber/) | [number](../number/) | Extracts the first number embedded anywhere in a string, or passes through a `number`. |
| [`extractPureURI`](../url/extractpureuri/) | [url](../url/) | Extracts the pure URI from a URL by removing query parameters and fragments. |
| [`falsyPromiseOrThrow`](../promise/falsypromiseorthrow/) | [promise](../promise/) | Returns a function that passes through falsy data or throws an error. |
| `find / findIndex` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.find() / findIndex()` *(ES2015)* |
| `flatten / flat` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.flat(depth?)` *(ES2019)* |
| [`flip`](../function/flip/) | [function](../function/) | Creates a function that invokes `fn` with the first two arguments swapped. |
| [`formatCompact`](../number/formatcompact/) | [number](../number/) | Formats a number using compact notation (e.g. |
| [`formatDuration`](../date/formatduration/) | [date](../date/) | Formats a duration in milliseconds as a compact human-readable string. |
| [`formatInTimezone`](../date/formatintimezone/) | [date](../date/) | Formats a date in a specific IANA timezone using `Intl.DateTimeFormat`. |
| [`formatSize`](../number/formatsize/) | [number](../number/) | Format a byte count into a human-readable string with the appropriate unit. |
| `from (parse temporal string)` | [date](../date/) | <span class="badge badge--secondary">native JS</span> `Temporal.Instant.from(str) / Temporal.PlainDate.from(str) / etc.` *(Temporal (Stage 3))* |
| [`fromMillis`](../date/frommillis/) | [date](../date/) | Creates a `Date` from a timestamp in **milliseconds**. |
| [`fromSeconds`](../date/fromseconds/) | [date](../date/) | Creates a `Date` from a timestamp in **seconds**. |
| [`get`](../object/get/) | [object](../object/) | Gets a value from an object using a dot/bracket-notated path or explicit key array. |
| [`getTimezoneOffset`](../date/gettimezoneoffset/) | [date](../date/) | Returns the UTC offset **in minutes** for the given IANA timezone at a specific point in time. |
| [`groupBy`](../object/groupby/) | [object](../object/) | Groups an array of items by a key derived from each item. |
| `groupBy / group` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Object.groupBy(arr, fn)` *(ES2024)* |
| [`guard`](../promise/guard/) | [promise](../promise/) | Wraps a function so that if it throws, a default value is returned instead of propagating the error. |
| `has` | [object](../object/) | <span class="badge badge--secondary">native JS</span> `Object.hasOwn(obj, key)` *(ES2022)* |
| `head / first` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(0)` *(ES2022)* |
| [`hexToRgb`](../color/hextorgb/) | [color](../color/) | Parses a hex color string (`#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` — the leading `#` is optional) into its RGB(A) cha… |
| [`hslToRgb`](../color/hsltorgb/) | [color](../color/) | Converts an HSL(A) color into RGB(A). |
| [`identity`](../function/identity/) | [function](../function/) | Returns the given value unchanged  Useful as a default transform, in function composition, or as a placeholder mapper. |
| `includes` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.includes()` *(ES2016)* |
| [`increment`](../version/increment/) | [version](../version/) | Increments a semantic version |
| [`injectWordBreaks`](../string/injectwordbreaks/) | [string](../string/) | Adds word-break opportunities to a string so it can wrap cleanly in narrow UI containers such as side panels or table… |
| [`inRange`](../number/inrange/) | [number](../number/) | Checks whether a number falls within `[min, max]` (both inclusive by default). |
| [`intersection`](../array/intersection/) | [array](../array/) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| [`intersects`](../array/intersects/) | [array](../array/) | Simple helper that check if two lists shared at least an item in common. |
| [`invert`](../object/invert/) | [object](../object/) | Returns a new object with keys and values swapped. |
| [`isArray`](../guard/isarray/) | [guard](../guard/) | Checks if a value is an array. |
| [`isArrayBuffer`](../guard/isarraybuffer/) | [guard](../guard/) | Checks if a value is an ArrayBuffer instance. |
| [`isArrayLike`](../guard/isarraylike/) | [guard](../guard/) | Checks if a value is array-like: has a non-negative integer `length` property. |
| [`isAsyncFunction`](../guard/isasyncfunction/) | [guard](../guard/) | Checks if a value is an async function. |
| [`isAsyncGenerator`](../guard/isasyncgenerator/) | [guard](../guard/) | Checks if a value is an async generator object (the result of calling an `async function*`). |
| [`isAsyncGeneratorFunction`](../guard/isasyncgeneratorfunction/) | [guard](../guard/) | Checks if a value is an async generator function (an `async function*` declaration or expression). |
| [`isAsyncIterable`](../guard/isasynciterable/) | [guard](../guard/) | Checks if a value implements the async iterable protocol. |
| [`isBigInt`](../guard/isbigint/) | [guard](../guard/) | Checks if a value is a bigint. |
| [`isBlank`](../string/isblank/) | [string](../string/) | Checks if a string is blank — empty or contains only whitespace characters. |
| [`isBlob`](../guard/isblob/) | [guard](../guard/) | Checks if a value is a Blob instance. |
| [`isBoolean`](../guard/isboolean/) | [guard](../guard/) | Checks if a value is a boolean. |
| [`isBuffer`](../node/isbuffer/) | [node](../node/) | Checks if a value is a Node.js Buffer instance. |
| [`isBusinessDay`](../date/isbusinessday/) | [date](../date/) | Checks whether a date falls on a business day (i.e. |
| [`isConventionalCommit`](../commit/isconventionalcommit/) | [commit](../commit/) | Checks whether a commit message's subject line follows the Conventional Commits format constrained by the given options. |
| [`isCssColor`](../guard/iscsscolor/) | [guard](../guard/) | Checks whether a value is a syntactically-safe, plain CSS color: a hex color (`#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa`… |
| [`isDate`](../guard/isdate/) | [guard](../guard/) | Checks if a value is a Date instance. |
| [`isDefined`](../guard/isdefined/) | [guard](../guard/) | Checks if a value is defined (not undefined nor null). |
| `isDirectInstanceOf` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `value.constructor === Foo` *(ES1)* |
| [`isEmpty`](../array/isempty/) | [array](../array/) | Checks if an array is empty (has no elements). |
| [`isEmpty`](../object/isempty/) | [object](../object/) | Checks if a plain object has no own enumerable string-keyed properties. |
| [`isEmpty`](../string/isempty/) | [string](../string/) | Checks if a string is empty (`""`), `null`, or `undefined`. |
| [`isError`](../guard/iserror/) | [guard](../guard/) | Checks if a value is an Error instance. |
| [`isEven`](../number/iseven/) | [number](../number/) | Checks if a value is an even integer. |
| [`isFalsy`](../guard/isfalsy/) | [guard](../guard/) | Checks if a value is falsy (`false`, `null`, `undefined`, `0`, `""`, `NaN`). |
| `isFinite / isFiniteNumber` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `Number.isFinite(value)` *(ES2015)* |
| [`isFormData`](../guard/isformdata/) | [guard](../guard/) | Checks if a value is a FormData instance. |
| [`isFunction`](../guard/isfunction/) | [guard](../guard/) | Checks if a value is a function. |
| [`isGenerator`](../guard/isgenerator/) | [guard](../guard/) | Checks if a value is a generator object (the result of calling a `function*`). |
| [`isGeneratorFunction`](../guard/isgeneratorfunction/) | [guard](../guard/) | Checks if a value is a generator function (a `function*` declaration or expression). |
| `isHtmlElement / isUrlInstance / isUrlSearchParams` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `value instanceof HTMLElement / URL / URLSearchParams` *(Web API)* |
| `isInfinite` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `value === Infinity \|\| value === -Infinity  /  !Number.isFinite(value) && !Number.isNaN(value)` *(ES2015)* |
| `isInteger` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `Number.isInteger(value)` *(ES2015)* |
| [`isIterable`](../guard/isiterable/) | [guard](../guard/) | Checks if a value is iterable (has a `Symbol.iterator` method). |
| [`isLeapYear`](../date/isleapyear/) | [date](../date/) | Returns `true` if the given year is a leap year. |
| `isLight / isDark (pick a readable text color)` | [color](../color/) | <span class="badge badge--secondary">native JS</span> `contrast-color(<color>)` *(CSS Color 6 (Baseline newly available since April 2026 — Chrome 147, Firefox 146, Safari 26.0))* |
| [`isMap`](../guard/ismap/) | [guard](../guard/) | Checks if a value is a Map instance. |
| `isNaN` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `Number.isNaN(value)` *(ES2015)* |
| [`isNegative`](../number/isnegative/) | [number](../number/) | Checks if a value is a number less than 0. |
| [`isNodeStream`](../node/isnodestream/) | [node](../node/) | Checks if a value is a Node.js stream (has a `.pipe()` method). |
| [`isNonEmpty`](../array/isnonempty/) | [array](../array/) | Checks if an array is non-empty (has at least one element). |
| [`isNonEmpty`](../object/isnonempty/) | [object](../object/) | Checks if a plain object has at least one own enumerable string-keyed property. |
| [`isNonEmpty`](../string/isnonempty/) | [string](../string/) | Checks if a string is non-empty (has at least one character). |
| [`isNotBlank`](../string/isnotblank/) | [string](../string/) | Checks if a string is not blank — non-empty and contains at least one non-whitespace character. |
| [`isNull`](../guard/isnull/) | [guard](../guard/) | Checks if a value is `null`. |
| [`isNullish`](../guard/isnullish/) | [guard](../guard/) | Checks if a value is null or undefined (nullish). |
| [`isNumber`](../guard/isnumber/) | [guard](../guard/) | Checks if a value is a number. |
| [`isObservable`](../observable/isobservable/) | [observable](../observable/) | Checks if a value is an RxJS Observable or any compatible observable. |
| [`isOdd`](../number/isodd/) | [number](../number/) | Checks if a value is an odd integer. |
| [`isPlainObject`](../guard/isplainobject/) | [guard](../guard/) | Checks if a value is a plain object. |
| [`isPositive`](../number/ispositive/) | [number](../number/) | Checks if a value is a number greater than 0. |
| [`isPrerelease`](../version/isprerelease/) | [version](../version/) | Returns `true` when the version string has a prerelease suffix (i.e. |
| [`isPrimitive`](../guard/isprimitive/) | [guard](../guard/) | Checks if a value is a JavaScript primitive. |
| [`isPromise`](../guard/ispromise/) | [guard](../guard/) | Checks if a value is a Promise or a thenable. |
| [`isPromiseLike`](../guard/ispromiselike/) | [guard](../guard/) | Checks if a value is a thenable (has a `.then()` method). |
| [`isPropertyKey`](../guard/ispropertykey/) | [guard](../guard/) | Checks if a value is a valid property key: `string`, `number`, or `symbol`. |
| [`isRegExp`](../guard/isregexp/) | [guard](../guard/) | Checks if a value is a RegExp instance. |
| `isSafeInteger` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `Number.isSafeInteger(value)` *(ES2015)* |
| [`isSameDay`](../date/issameday/) | [date](../date/) | Checks if two dates are the same day. |
| [`isSameMonth`](../date/issamemonth/) | [date](../date/) | Checks if two dates are in the same month (and year). |
| [`isSameYear`](../date/issameyear/) | [date](../date/) | Checks if two dates are in the same year. |
| `isSet (Set data structure)` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `value instanceof Set` *(ES2015)* |
| [`isSharedArrayBuffer`](../node/issharedarraybuffer/) | [node](../node/) | Checks if a value is a `SharedArrayBuffer` instance. |
| [`isSpecialObject`](../guard/isspecialobject/) | [guard](../guard/) | Determines if a value is a special object that should not have its properties compared deeply. |
| [`isString`](../guard/isstring/) | [guard](../guard/) | Checks if a value is a string. |
| [`isSymbol`](../guard/issymbol/) | [guard](../guard/) | Checks if a value is a symbol. |
| [`isTemporalDuration`](../guard/istemporalduration/) | [guard](../guard/) | Checks if a value is a `Temporal.Duration`. |
| [`isTemporalInstant`](../guard/istemporalinstant/) | [guard](../guard/) | Checks if a value is a `Temporal.Instant`. |
| [`isTemporalPlainDate`](../guard/istemporalplaindate/) | [guard](../guard/) | Checks if a value is a `Temporal.PlainDate`. |
| [`isTemporalPlainDateTime`](../guard/istemporalplaindatetime/) | [guard](../guard/) | Checks if a value is a `Temporal.PlainDateTime`. |
| [`isTemporalPlainTime`](../guard/istemporalplaintime/) | [guard](../guard/) | Checks if a value is a `Temporal.PlainTime`. |
| [`isTemporalZonedDateTime`](../guard/istemporalzoneddatetime/) | [guard](../guard/) | Checks if a value is a `Temporal.ZonedDateTime`. |
| [`isTimestamp`](../guard/istimestamp/) | [guard](../guard/) | Checks if a value is a valid timestamp (milliseconds or Unix seconds). |
| [`isTimestampInSeconds`](../date/istimestampinseconds/) | [date](../date/) | Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style) |
| [`isTruthy`](../guard/istruthy/) | [guard](../guard/) | Checks if a value is truthy (not `false`, `null`, `undefined`, `0`, `""`, or `NaN`). |
| [`isUndefined`](../guard/isundefined/) | [guard](../guard/) | Checks if a value is `undefined`. |
| [`isValid`](../date/isvalid/) | [date](../date/) | Checks if a value is a valid Date instance (not `Invalid Date`). |
| [`isValidDateString`](../date/isvaliddatestring/) | [date](../date/) | Checks whether a string can be parsed into a valid `Date`. |
| [`isValidRegex`](../guard/isvalidregex/) | [guard](../guard/) | Checks if a string is a valid regex pattern. |
| `isWeakMap / isWeakSet / isWeakRef` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `value instanceof WeakMap / WeakSet / WeakRef` *(ES2015 / ES2021)* |
| [`isWeekend`](../date/isweekend/) | [date](../date/) | Checks whether a date falls on a weekend day. |
| [`isWithinRange`](../date/iswithinrange/) | [date](../date/) | Checks whether a date falls within a range (inclusive on both ends). |
| [`kebabCase`](../string/kebabcase/) | [string](../string/) | Converts camelCase to kebab-case |
| `keys / values` | [object](../object/) | <span class="badge badge--secondary">native JS</span> `Object.keys() / Object.values()` *(ES2017)* |
| [`KeysOfType`](../type/keysoftype/) | [type](../type/) | Extracts the keys of `T` whose values extend `V`. |
| `last` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(-1)` *(ES2022)* |
| [`leadingSentence`](../string/leadingsentence/) | [string](../string/) | Extracts the leading sentence from a string. |
| [`lerp`](../number/lerp/) | [number](../number/) | Linearly interpolates between `start` and `end` by the factor `t`. |
| `lighten / darken` | [color](../color/) | <span class="badge badge--secondary">native JS</span> `color-mix(in oklch, <color> <percent>, white\|black)` *(CSS Color 5 (Baseline widely available since 2023 — Chrome 111, Firefox 113, Safari 16.2))* |
| [`listTimezones`](../date/listtimezones/) | [date](../date/) | Returns the list of IANA timezone identifiers supported by the runtime. |
| [`map`](../object/map/) | [object](../object/) | Transforms the values and/or keys of a plain object in a single pass. |
| [`max`](../array/max/) | [array](../array/) | Returns the maximum value in an array using a loop instead of spread, avoiding the call stack overflow that occurs wi… |
| [`Maybe`](../type/maybe/) | [type](../type/) | Type for values that can be T, undefined, or null. |
| [`mean`](../array/mean/) | [array](../array/) | Calculates the arithmetic mean (average) of an array of numbers. |
| [`meaningPromiseOrThrow`](../promise/meaningpromiseorthrow/) | [promise](../promise/) | Returns a function that passes through meaningful data or throws an error. |
| [`memoize`](../function/memoize/) | [function](../function/) | Returns a memoized version of the function that caches results. |
| `merge (shallow)` | [object](../object/) | <span class="badge badge--secondary">native JS</span> `{ ...a, ...b } or Object.assign({}, a, b)` *(ES2015)* |
| [`mergeDeep`](../object/mergedeep/) | [object](../object/) | Merges two or more objects deeply, returning a **new** object without mutating any input. |
| [`min`](../array/min/) | [array](../array/) | Returns the minimum value in an array using a loop instead of spread, avoiding the call stack overflow that occurs wi… |
| `min / max` | [number](../number/) | <span class="badge badge--secondary">native JS</span> `Math.min(...arr) / Math.max(...arr)` *(ES1)* |
| [`negate`](../function/negate/) | [function](../function/) | Creates a function that negates the result of `predicate`. |
| [`noop`](../function/noop/) | [function](../function/) | A no-operation function that does nothing and returns `undefined`  Useful as a default callback, placeholder, or to e… |
| [`normalizeTimestamp`](../date/normalizetimestamp/) | [date](../date/) | Converts a timestamp to JavaScript milliseconds format |
| `now (date/time/instant)` | [date](../date/) | <span class="badge badge--secondary">native JS</span> `Temporal.Now.instant() / .zonedDateTimeISO() / .plainDateISO() / .plainTimeISO()` *(Temporal (Stage 3))* |
| [`Nullable`](../type/nullable/) | [type](../type/) | Adds `null` to a type (`T \| null`). |
| [`Nullish`](../type/nullish/) | [type](../type/) | Adds `null` and `undefined` to a type (`T \| null \| undefined`). |
| [`omit`](../object/omit/) | [object](../object/) | Creates a new object without the specified keys. |
| [`OmitByValue`](../type/omitbyvalue/) | [type](../type/) | Constructs a type by omitting all entries of `T` whose values extend `V`. |
| [`once`](../function/once/) | [function](../function/) | Creates a function that is restricted to be called only once. |
| [`onlyPath`](../url/onlypath/) | [url](../url/) | Extract only the path from an URI with optional query and fragments. |
| [`OptionalKeys`](../type/optionalkeys/) | [type](../type/) | Extracts the optional keys of an object type `T`. |
| [`overlaps`](../date/overlaps/) | [date](../date/) | Checks whether two date ranges overlap. |
| `padStart / padEnd` | [string](../string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.padStart() / padEnd()` *(ES2017)* |
| [`parallel`](../promise/parallel/) | [promise](../promise/) | Runs an array of async functions with a concurrency limit. |
| [`parse`](../version/parse/) | [version](../version/) | Parses a semantic version string into its components according to SemVer 2.0.0 specification  Supports: - Core versio… |
| [`parseConventionalCommit`](../commit/parseconventionalcommit/) | [commit](../commit/) | Parses a Conventional Commits message into a structured object. |
| [`parsePackageRepository`](../url/parsepackagerepository/) | [url](../url/) | Parse the `repository` field from `package.json` into a structured object. |
| [`partial`](../function/partial/) | [function](../function/) | Partially applies arguments to a function, returning a new function that accepts the remaining arguments. |
| [`partition`](../array/partition/) | [array](../array/) | Splits an array into two groups based on a predicate function. |
| [`pascalCase`](../string/pascalcase/) | [string](../string/) | Converts a string to PascalCase. |
| [`pick`](../object/pick/) | [object](../object/) | Creates a new object with only the specified keys. |
| [`PickByValue`](../type/pickbyvalue/) | [type](../type/) | Constructs a type by picking all entries of `T` whose values extend `V`. |
| [`pipe`](../function/pipe/) | [function](../function/) | Composes functions left-to-right: the output of each function is passed as input to the next. |
| [`Prettify`](../type/prettify/) | [type](../type/) | Flattens an intersection type into a single readable object type. |
| [`randomBetween`](../number/randombetween/) | [number](../number/) | Generates a random number between min and max (inclusive) |
| [`randomIntBetween`](../number/randomintbetween/) | [number](../number/) | Generates a random integer between min and max (inclusive) |
| [`range`](../array/range/) | [array](../array/) | Generates an array of sequential numbers from start to end (exclusive). |
| [`relativeURLToAbsolute`](../url/relativeurltoabsolute/) | [url](../url/) | Converts a relative URL to an absolute URL using the current document base URI. |
| [`removeUndefinedNull`](../object/removeundefinednull/) | [object](../object/) | Remove null and undefined values from an object. |
| `repeat` | [string](../string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.repeat()` *(ES2015)* |
| [`RequiredKeys`](../type/requiredkeys/) | [type](../type/) | Extracts the required (non-optional) keys of an object type `T`. |
| [`resolveRecord`](../promise/resolverecord/) | [promise](../promise/) | Resolves an array of keys into a record by calling an async mapper for each key. |
| [`retry`](../promise/retry/) | [promise](../promise/) | Retries a promise-returning function up to maxAttempts times |
| [`returnOrThrowError`](../function/returnorthrowerror/) | [function](../function/) | Return a value or throw an error if null or undefined. |
| `reverse` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.toReversed()` *(ES2023)* |
| [`rgbToHex`](../color/rgbtohex/) | [color](../color/) | Converts an RGB(A) color into a hex color string. |
| [`rgbToHsl`](../color/rgbtohsl/) | [color](../color/) | Converts an RGB(A) color into HSL(A). |
| [`roundTo`](../number/roundto/) | [number](../number/) | Rounds a number to specified decimal places |
| [`safeFetch`](../promise/safefetch/) | [promise](../promise/) | Wraps `fetch` with built-in error handling: returns `null` when the request fails (network error, non-OK status, or p… |
| [`safeJsonParse`](../object/safejsonparse/) | [object](../object/) | Parses a JSON string, returning `null` (or a fallback) on any parse failure. |
| [`sample`](../array/sample/) | [array](../array/) | Picks one or more random elements from an array. |
| [`satisfiesRange`](../version/satisfiesrange/) | [version](../version/) | Checks if a version satisfies a range (simple implementation) |
| [`select`](../array/select/) | [array](../array/) | Filters and transforms an array in a single pass. |
| `select / filterMap` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.filter().map()` *(ES5)* |
| [`set`](../object/set/) | [object](../object/) | Sets a value in an object at the given path, creating intermediate objects as needed. |
| [`settle`](../promise/settle/) | [promise](../promise/) | Runs an array of promises concurrently and partitions the outcomes instead of rejecting on the first failure, unlike … |
| [`shuffle`](../array/shuffle/) | [array](../array/) | Randomly reorders elements of an array using the Fisher-Yates algorithm. |
| [`slugify`](../string/slugify/) | [string](../string/) | Converts a string into a URL-friendly slug. |
| [`snakeCase`](../string/snakecase/) | [string](../string/) | Converts a string to snake_case. |
| `sort (immutable)` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.toSorted(compareFn?)` *(ES2023)* |
| `sortBy / orderBy` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.toSorted(fn?)` *(ES2023)* |
| [`sortNumberAscFn`](../array/sortnumberascfn/) | [array](../array/) | Sort numbers in ascending order |
| [`sortNumberDescFn`](../array/sortnumberdescfn/) | [array](../array/) | Sort numbers in descending order |
| [`sortStringAscFn`](../array/sortstringascfn/) | [array](../array/) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](../array/sortstringascinsensitivefn/) | [array](../array/) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](../array/sortstringdescfn/) | [array](../array/) | Sort strings in descending order |
| [`sortStringNaturalAscFn`](../array/sortstringnaturalascfn/) | [array](../array/) | Sort strings in ascending order using natural (human-friendly) ordering. |
| [`sortStringNaturalAscInsensitiveFn`](../array/sortstringnaturalascinsensitivefn/) | [array](../array/) | Sort strings in ascending natural order, ignoring case **and diacritics** (`Intl.Collator { sensitivity: 'base' }` — … |
| [`sortStringNaturalDescFn`](../array/sortstringnaturaldescfn/) | [array](../array/) | Sort strings in descending order using natural (human-friendly) ordering. |
| [`sortStringNaturalDescInsensitiveFn`](../array/sortstringnaturaldescinsensitivefn/) | [array](../array/) | Sort strings in descending natural order, ignoring case **and diacritics** (`Intl.Collator { sensitivity: 'base' }` —… |
| [`startOf`](../date/startof/) | [date](../date/) | Returns a new `Date` set to the **start** of the given unit. |
| `startsWith / endsWith` | [string](../string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.startsWith() / endsWith()` *(ES2015)* |
| [`statusToBadge`](../ci/statustobadge/) | [ci](../ci/) | Maps a CI/CD job status to an inline code badge string. |
| [`statusToIcon`](../ci/statustoicon/) | [ci](../ci/) | Maps a CI/CD job status to an emoji icon. |
| [`stringify`](../version/stringify/) | [version](../version/) | Reconstruct a semantic version string from a ParsedVersion object. |
| [`stripV`](../version/stripv/) | [version](../version/) | Strip the leading "v" from a version string if it exists. |
| [`sum`](../array/sum/) | [array](../array/) | Calculates the sum of an array of numbers. |
| `tail` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(1)` *(ES3)* |
| `take` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(0, n)` *(ES3)* |
| [`template`](../string/template/) | [string](../string/) | Interpolates `{{key}}` placeholders in a template string with values from a data record. |
| [`throttle`](../function/throttle/) | [function](../function/) | Creates a throttled function that only invokes func at most once per every wait milliseconds |
| [`timeAgo`](../date/timeago/) | [date](../date/) | Formats a date as a human-readable relative time string. |
| [`timeout`](../promise/timeout/) | [promise](../promise/) | Wraps a promise to reject with a `TimeoutError` if it does not resolve within the specified duration. |
| [`titleCase`](../string/titlecase/) | [string](../string/) | Converts a string to Title Case. |
| `toInt / toFloat` | [number](../number/) | <span class="badge badge--secondary">native JS</span> `parseInt(str, 10) / parseFloat(str)` *(ES1)* |
| [`toISO8601`](../date/toiso8601/) | [date](../date/) | Converts a date to ISO 8601 format Format: YYYY-MM-DDTHH:mm:ss.sssZ |
| [`toMillis`](../date/tomillis/) | [date](../date/) | Converts a date to a timestamp in **milliseconds** (epoch millis). |
| `toPairs / fromPairs` | [object](../object/) | <span class="badge badge--secondary">native JS</span> `Object.entries() / Object.fromEntries()` *(ES2019)* |
| `toPlainDate / toPlainDateTime / toPlainTime` | [date](../date/) | <span class="badge badge--secondary">native JS</span> `Temporal.ZonedDateTime.prototype.toPlainDate() / toPlainDateTime() / toPlainTime()` *(Temporal (Stage 3))* |
| [`toRFC2822`](../date/torfc2822/) | [date](../date/) | Converts a date to RFC 2822 format Format: Day, DD Mon YYYY HH:mm:ss +0000 Used in email headers (Date field) and HTT… |
| [`toRFC3339`](../date/torfc3339/) | [date](../date/) | Converts a date to RFC 3339 format Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm RFC 3339 is a profile of… |
| [`toSeconds`](../date/toseconds/) | [date](../date/) | Converts a date to a timestamp in **seconds** (epoch seconds). |
| `toTemporalInstant` | [date](../date/) | <span class="badge badge--secondary">native JS</span> `Date.prototype.toTemporalInstant()` *(Temporal (Stage 3))* |
| `toZonedDateTime` | [date](../date/) | <span class="badge badge--secondary">native JS</span> `Temporal.Instant.prototype.toZonedDateTimeISO(tz)` *(Temporal (Stage 3))* |
| `trim / trimStart / trimEnd` | [string](../string/) | <span class="badge badge--secondary">native JS</span> `String.prototype.trim() / trimStart() / trimEnd()` *(ES2019)* |
| [`truncate`](../string/truncate/) | [string](../string/) | Truncates a string to `maxLength` characters, appending an ellipsis when cut. |
| [`truthyPromiseOrThrow`](../promise/truthypromiseorthrow/) | [promise](../promise/) | Returns a function that passes through truthy data or throws an error. |
| [`tryit`](../promise/tryit/) | [promise](../promise/) | Wraps a function so it never throws. |
| `TypedArrays (isInt8Array, isFloat32Array, ...)` | [type](../type/) | <span class="badge badge--secondary">native JS</span> `value instanceof Int8Array / Float32Array / ...` *(ES2015)* |
| `union` | [array](../array/) | <span class="badge badge--secondary">native JS</span> `unique([...a, ...b])` *(ES2015)* |
| [`UnionToIntersection`](../type/uniontointersection/) | [type](../type/) | Converts a union type to an intersection type: `A \| B \| C` → `A & B & C`. |
| [`unique`](../array/unique/) | [array](../array/) | Removes duplicate values from an array. |
| `until / since (difference)` | [date](../date/) | <span class="badge badge--secondary">native JS</span> `Temporal.PlainDate.prototype.until(other) / .since(other)` *(Temporal (Stage 3))* |
| [`unzip`](../array/unzip/) | [array](../array/) | Splits an array of tuples into separate arrays, one per position. |
| [`uuid7`](../id/uuid7/) | [id](../id/) | Generates a UUID v7 string (RFC 9562). |
| [`ValueOf`](../type/valueof/) | [type](../type/) | Produces a union of all value types of an object type `T`. |
| [`WeekDays`](../date/weekdays/) | [date](../date/) | Named day-of-week constants following the JavaScript `Date.getDay()` convention. |
| `withAlpha (change the alpha channel of an existing color)` | [color](../color/) | <span class="badge badge--secondary">native JS</span> `rgb(from <color> r g b / <alpha>)` *(CSS Color 5 relative color syntax (Baseline widely available since September 2024 — Chrome 119+))* |
| [`withLeadingSlash`](../url/withleadingslash/) | [url](../url/) | Adds a leading slash `/` to the given URL if it is not already present. |
| [`without`](../array/without/) | [array](../array/) | Returns a new array with all occurrences of the given values removed. |
| [`withoutLeadingSlash`](../url/withoutleadingslash/) | [url](../url/) | Removes the leading slash `/` from the given URL if it is present. |
| [`withoutTrailingSlash`](../url/withouttrailingslash/) | [url](../url/) | Removes the trailing slash `/` from the given URL if it is present. |
| `withResolvers` | [promise](../promise/) | <span class="badge badge--secondary">native JS</span> `Promise.withResolvers()` *(ES2024)* |
| [`withTrailingSlash`](../url/withtrailingslash/) | [url](../url/) | Adds a trailing slash `/` to the given URL if it is not already present. |
| [`words`](../string/words/) | [string](../string/) | Splits a string into an array of words. |
| [`zip`](../array/zip/) | [array](../array/) | Combines multiple arrays element-by-element into an array of tuples. |
