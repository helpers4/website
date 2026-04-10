---
sidebar_label: "Observable"
sidebar_position: 0
title: "Observable Helpers"
---

# Observable Helpers

Utility functions for working with observable operations.

## Functions

| Function | Description |
|----------|-------------|
| [`combine`](combine) | Combine two observables with a map function and an optional pre-treatment.  Note: you can use the pre-treatment to add a filter, a distinctUntilChanged, any other operator that can be used in a pipe, or even an `UntilDestroy` operator. |
| [`combineLatest`](combineLatest) | Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.  This method relies on combineLatestOperator of rxjs.  The main difference with combineLatestOperator is in case of empty parameters. If the parameter is empty (empty array or empty object), the result will be also empty.  ATTENTION: this version doesn't support `scheduler` nor `mapper` as last argument like in combineLatestOperator. |

## Dependencies

| Package | License |
|---------|:-------:|
| [rxjs](https://rxjs.dev) | Apache-2.0 |

