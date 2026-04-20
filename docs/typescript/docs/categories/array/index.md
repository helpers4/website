---
sidebar_label: "Array"
sidebar_position: 0
title: "Array Helpers"
---

# Array Helpers

Utility functions for working with array operations.

## Functions

| Function | Description |
|----------|-------------|
| [`chunk`](chunk) | Chunks an array into smaller arrays of specified size |
| [`compact`](compact) | Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array. |
| [`createSortByDateFn`](createSortByDateFn) | Creates a sort function for objects by date property |
| [`createSortByNumberFn`](createSortByNumberFn) | Creates a sort function for objects by number property |
| [`createSortByStringFn`](createSortByStringFn) | Creates a sort function for objects by string property |
| [`deepEquals`](deepEquals) | Deep comparison of two arrays that only returns true or false. Arrays are considered equal if they have the same length and all elements  at corresponding positions are strictly equal. Only compares arrays, does not go into deep object comparison. |
| [`difference`](difference) | Returns the difference between two arrays (items in first array but not in second) |
| [`ensureArray`](ensureArray) | Wraps a value in an array if it is not already one. If the value is already an array, it is returned as-is. If the value is null or undefined, returns an empty array. When a depth is specified, the resulting array is flattened to that depth (like `Array.prototype.flat(depth)`). |
| [`equals`](equals) | Simple helper that checks if two lists are identical. The order of elements in the list is not important. |
| [`intersection`](intersection) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| [`oneInCommon`](oneInCommon) | Simple helper that check if two lists shared at least an item in common. |
| [`partition`](partition) | Splits an array into two groups based on a predicate function. The first group contains elements for which the predicate returns true, the second group contains the rest. |
| [`range`](range) | Generates an array of sequential numbers from start to end (exclusive). If only one argument is provided, it generates numbers from 0 to that value. |
| [`sample`](sample) | Picks one or more random elements from an array. When called without a count, returns a single element or `undefined` if the array is empty. When called with a count, returns an array of up to `count` random elements sampled without replacement. |
| [`shallowEquals`](shallowEquals) | Quick comparison of two arrays using JSON.stringify. This is a fast but simple comparison that may not work for all edge cases. |
| [`shuffle`](shuffle) | Randomly reorders elements of an array using the Fisher-Yates algorithm. Returns a new array without mutating the original. |
| [`SortFn`](SortFn) | Sort function type for arrays |
| [`sortNumberAscFn`](sortNumberAscFn) | Sort numbers in ascending order |
| [`sortNumberDescFn`](sortNumberDescFn) | Sort numbers in descending order |
| [`sortStringAscFn`](sortStringAscFn) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](sortStringAscInsensitiveFn) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](sortStringDescFn) | Sort strings in descending order |
| [`unique`](unique) | Removes duplicate values from an array |

