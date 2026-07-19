---
title: "Function Helpers"
sidebar:
  label: "Function"
  order: 0
---

Utility functions for working with function operations.

## Functions

| Function | Description |
|----------|-------------|
| [`compose`](./compose/) | Composes functions right\-to\-left: \`compose\(f, g\)\(x\)\` is equivalent to \`f\(g\(x\)\)\`\. |
| [`curry`](./curry/) | Transforms a multi\-argument function into a chain of single\-argument functions \(Haskell\-style currying\)\. |
| [`debounce`](./debounce/) | Creates a debounced function that delays invoking func until after delay milliseconds have elapsed since the last tim… |
| [`flip`](./flip/) | Creates a function that invokes \`fn\` with the first two arguments swapped\. |
| [`identity`](./identity/) | Returns the given value unchanged  Useful as a default transform, in function composition, or as a placeholder mapper\. |
| [`memoize`](./memoize/) | Returns a memoized version of the function that caches results\. |
| [`negate`](./negate/) | Creates a function that negates the result of \`predicate\`\. |
| [`noop`](./noop/) | A no\-operation function that does nothing and returns \`undefined\`  Useful as a default callback, placeholder, or to e… |
| [`once`](./once/) | Creates a function that is restricted to be called only once\. |
| [`partial`](./partial/) | Partially applies arguments to a function, returning a new function that accepts the remaining arguments\. |
| [`pipe`](./pipe/) | Composes functions left\-to\-right: the output of each function is passed as input to the next\. |
| [`returnOrThrowError`](./returnorthrowerror/) | Return a value or throw an error if null or undefined\. |
| [`throttle`](./throttle/) | Creates a throttled function that only invokes func at most once per every wait milliseconds |
| [`unary`](./unary/) | Creates a function that calls \`fn\` with only its first argument, discarding any others\. |

