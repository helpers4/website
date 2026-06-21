---
title: "Array Helpers"
sidebar:
  label: "Array"
  order: 0
---

Utility functions for working with array operations.

## Functions

| Function | Description |
|----------|-------------|
| [`cartesianProduct`](./cartesianproduct/) | Computes the Cartesian product of the provided arrays. |
| [`chunk`](./chunk/) | Chunks an array into smaller arrays of specified size |
| [`compact`](./compact/) | Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array. |
| [`countBy`](./countby/) | Groups the elements of an array by the key returned by `keyFn` and returns a record mapping each key to the number of… |
| [`createSortByDateFn`](./createsortbydatefn/) | Creates a sort function for objects by date property. |
| [`createSortByNaturalFn`](./createsortbynaturalfn/) | Creates a sort function for objects by one or more string properties using natural ordering. |
| [`createSortByNumberFn`](./createsortbynumberfn/) | Creates a sort function for objects by number property. |
| [`createSortByStringFn`](./createsortbystringfn/) | Creates a sort function for objects by one or more string properties. |
| [`difference`](./difference/) | Returns the difference between two arrays (items in first array but not in second) |
| `drop` | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(n)` *(ES3)* |
| [`ensureArray`](./ensurearray/) | Wraps a value in an array if it is not already one. |
| [`equalsDeep`](./equalsdeep/) | Recursive structural array equality. |
| [`equalsShallow`](./equalsshallow/) | Positional, one-level (shallow) array equality. |
| [`equalsUnordered`](./equalsunordered/) | Order-independent (set-style) array equality. |
| `find / findIndex` | <span class="badge badge--secondary">native JS</span> `Array.prototype.find() / findIndex()` *(ES2015)* |
| `flatten / flat` | <span class="badge badge--secondary">native JS</span> `Array.prototype.flat(depth?)` *(ES2019)* |
| `groupBy / group` | <span class="badge badge--secondary">native JS</span> `Object.groupBy(arr, fn)` *(ES2024)* |
| `head / first` | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(0)` *(ES2022)* |
| `includes` | <span class="badge badge--secondary">native JS</span> `Array.prototype.includes()` *(ES2016)* |
| [`intersection`](./intersection/) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| [`intersects`](./intersects/) | Simple helper that check if two lists shared at least an item in common. |
| [`isEmpty`](./isempty/) | Checks if an array is empty (has no elements). |
| [`isNonEmpty`](./isnonempty/) | Checks if an array is non-empty (has at least one element). |
| `last` | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(-1)` *(ES2022)* |
| [`max`](./max/) | Returns the maximum value in an array using a loop instead of spread, avoiding the call stack overflow that occurs wi… |
| [`mean`](./mean/) | Calculates the arithmetic mean (average) of an array of numbers. |
| [`min`](./min/) | Returns the minimum value in an array using a loop instead of spread, avoiding the call stack overflow that occurs wi… |
| [`partition`](./partition/) | Splits an array into two groups based on a predicate function. |
| [`range`](./range/) | Generates an array of sequential numbers from start to end (exclusive). |
| `reverse` | <span class="badge badge--secondary">native JS</span> `Array.prototype.toReversed()` *(ES2023)* |
| [`sample`](./sample/) | Picks one or more random elements from an array. |
| [`select`](./select/) | Filters and transforms an array in a single pass. |
| `select / filterMap` | <span class="badge badge--secondary">native JS</span> `Array.prototype.filter().map()` *(ES5)* |
| [`shuffle`](./shuffle/) | Randomly reorders elements of an array using the Fisher-Yates algorithm. |
| `sort (basic comparator)` | <span class="badge badge--secondary">native JS</span> `(a, b) => a - b  /  a.localeCompare(b)` *(ES1)* |
| `sortBy / orderBy` | <span class="badge badge--secondary">native JS</span> `Array.prototype.toSorted(fn?)` *(ES2023)* |
| [`sortNumberAscFn`](./sortnumberascfn/) | Sort numbers in ascending order |
| [`sortNumberDescFn`](./sortnumberdescfn/) | Sort numbers in descending order |
| [`sortStringAscFn`](./sortstringascfn/) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](./sortstringascinsensitivefn/) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](./sortstringdescfn/) | Sort strings in descending order |
| [`sortStringNaturalAscFn`](./sortstringnaturalascfn/) | Sort strings in ascending order using natural (human-friendly) ordering. |
| [`sortStringNaturalAscInsensitiveFn`](./sortstringnaturalascinsensitivefn/) | Sort strings in ascending natural order, ignoring case **and diacritics** (`Intl.Collator { sensitivity: 'base' }` — … |
| [`sortStringNaturalDescFn`](./sortstringnaturaldescfn/) | Sort strings in descending order using natural (human-friendly) ordering. |
| [`sortStringNaturalDescInsensitiveFn`](./sortstringnaturaldescinsensitivefn/) | Sort strings in descending natural order, ignoring case **and diacritics** (`Intl.Collator { sensitivity: 'base' }` —… |
| [`sum`](./sum/) | Calculates the sum of an array of numbers. |
| `tail` | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(1)` *(ES3)* |
| `take` | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(0, n)` *(ES3)* |
| `union` | <span class="badge badge--secondary">native JS</span> `unique([...a, ...b])` *(ES2015)* |
| [`unique`](./unique/) | Removes duplicate values from an array |
| [`unzip`](./unzip/) | Splits an array of tuples into separate arrays, one per position. |
| [`without`](./without/) | Returns a new array with all occurrences of the given values removed. |
| [`zip`](./zip/) | Combines multiple arrays element-by-element into an array of tuples. |

