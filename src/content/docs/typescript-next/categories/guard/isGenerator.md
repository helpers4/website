---
title: "isGenerator"
sidebar:
  label: "isGenerator"
---

Checks if a value is a generator object (the result of calling a `function*`).

Distinct from isGeneratorFunction: this predicate targets the
*instance* produced by calling a generator function, not the function itself.

> Available since v2.0.3

## Import

```ts
import { isGenerator } from '@helpers4/guard';
```

## Signature


```ts
isGenerator(value: unknown): value is Generator<unknown, unknown, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Generator<unknown, unknown, unknown>` — `true` if value is a Generator instance

## Examples

### Distinguish a generator instance from its function

isGenerator targets the object returned by calling a function*, not the function itself.

```ts
function* counter() { yield 1; yield 2; }
isGenerator(counter())  // => true   (instance)
isGenerator(counter)    // => false  (function)
isGenerator([1, 2])     // => false
```

### Type-narrow to safely call .next()

Narrows the type to Generator so you can call .next() and .return().

```ts
function* gen() { yield 1; yield 2; }
const value: unknown = gen();
if (isGenerator(value)) {
  const { value: v, done } = value.next();
  // v: unknown, done: boolean | undefined
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/guard/isGenerator.ts)
