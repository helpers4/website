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
| [`chunk`](chunk) | Chunks an array into smaller arrays of specified size |
| [`compact`](compact) | Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array. |
| [`createSortByDateFn`](createSortByDateFn) | Creates a sort function for objects by date property |
| [`createSortByNumberFn`](createSortByNumberFn) | Creates a sort function for objects by number property |
| [`createSortByStringFn`](createSortByStringFn) | Creates a sort function for objects by string property |
| [`deepEquals`](deepEquals) | Deep comparison of two arrays that only returns true or false. |
| [`difference`](difference) | Returns the difference between two arrays (items in first array but not in second) |
| `drop` | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(n)` *(ES3)* |
| [`ensureArray`](ensureArray) | Wraps a value in an array if it is not already one. |
| [`equals`](equals) | Simple helper that checks if two lists are identical. |
| `find / findIndex` | <span class="badge badge--secondary">native JS</span> `Array.prototype.find() / findIndex()` *(ES2015)* |
| `flatten / flat` | <span class="badge badge--secondary">native JS</span> `Array.prototype.flat(depth?)` *(ES2019)* |
| `groupBy / group` | <span class="badge badge--secondary">native JS</span> `Object.groupBy(arr, fn)` *(ES2024)* |
| `head / first` | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(0)` *(ES2022)* |
| `includes` | <span class="badge badge--secondary">native JS</span> `Array.prototype.includes()` *(ES2016)* |
| [`intersection`](intersection) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| `last` | <span class="badge badge--secondary">native JS</span> `Array.prototype.at(-1)` *(ES2022)* |
| [`oneInCommon`](oneInCommon) | Simple helper that check if two lists shared at least an item in common. |
| [`partition`](partition) | Splits an array into two groups based on a predicate function. |
| [`range`](range) | Generates an array of sequential numbers from start to end (exclusive). |
| `reverse` | <span class="badge badge--secondary">native JS</span> `Array.prototype.toReversed()` *(ES2023)* |
| [`sample`](sample) | Picks one or more random elements from an array. |
| [`shallowEquals`](shallowEquals) | Quick comparison of two arrays using JSON.stringify. |
| [`shuffle`](shuffle) | Randomly reorders elements of an array using the Fisher-Yates algorithm. |
| `sortBy / orderBy` | <span class="badge badge--secondary">native JS</span> `Array.prototype.toSorted(fn?)` *(ES2023)* |
| [`sortNumberAscFn`](sortNumberAscFn) | Sort numbers in ascending order |
| [`sortNumberDescFn`](sortNumberDescFn) | Sort numbers in descending order |
| [`sortStringAscFn`](sortStringAscFn) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](sortStringAscInsensitiveFn) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](sortStringDescFn) | Sort strings in descending order |
| `tail` | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(1)` *(ES3)* |
| `take` | <span class="badge badge--secondary">native JS</span> `Array.prototype.slice(0, n)` *(ES3)* |
| [`unique`](unique) | Removes duplicate values from an array |

