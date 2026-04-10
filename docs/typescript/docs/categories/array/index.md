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
| [`arrayEquals`](arrayEquals) | Simple helper that checks if two lists are identical. The order of elements in the list is not important. |
| [`chunk`](chunk) | Chunks an array into smaller arrays of specified size |
| [`createSortByDateFn`](createSortByDateFn) | Creates a sort function for objects by date property |
| [`createSortByNumberFn`](createSortByNumberFn) | Creates a sort function for objects by number property |
| [`createSortByStringFn`](createSortByStringFn) | Creates a sort function for objects by string property |
| [`deepCompare`](deepCompare) | Deep comparison of two arrays that only returns true or false. Arrays are considered equal if they have the same length and all elements  at corresponding positions are strictly equal. Only compares arrays, does not go into deep object comparison. |
| [`difference`](difference) | Returns the difference between two arrays (items in first array but not in second) |
| [`intersection`](intersection) | Compute the intersection of two arrays, meaning the elements that are present in both arrays. |
| [`oneInCommon`](oneInCommon) | Simple helper that check if two lists shared at least an item in common. |
| [`quickCompare`](quickCompare) | Quick comparison of two arrays using JSON.stringify. This is a fast but simple comparison that may not work for all edge cases. |
| [`SortFn`](SortFn) | Sort function type for arrays |
| [`sortNumberAscFn`](sortNumberAscFn) | Sort numbers in ascending order |
| [`sortNumberDescFn`](sortNumberDescFn) | Sort numbers in descending order |
| [`sortStringAscFn`](sortStringAscFn) | Sort strings in ascending order |
| [`sortStringAscInsensitiveFn`](sortStringAscInsensitiveFn) | Sort strings in ascending order (case insensitive) |
| [`sortStringDescFn`](sortStringDescFn) | Sort strings in descending order |
| [`unique`](unique) | Removes duplicate values from an array |

## Dependencies

| Package | License |
|---------|:-------:|
| [radashi](https://radashi.js.org) | MIT |

