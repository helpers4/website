---
title: "isGeneratorFunction"
sidebar:
  label: "isGeneratorFunction"
---

Checks if a value is a generator function (a `function*` declaration or expression).

Distinct from isGenerator: this predicate targets the *function* itself,
not the iterator it produces when called.

> Available since v2.0.3

## Import

```ts
import { isGeneratorFunction } from '@helpers4/type';
```

## Signature


```ts
isGeneratorFunction(value: unknown): value is GeneratorFunction
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is GeneratorFunction` — `true` if value is a GeneratorFunction

## Examples

### Detect a generator function

Returns true for function* declarations and expressions.

```ts
function* gen() { yield 1; }
isGeneratorFunction(gen)      // => true
isGeneratorFunction(gen())    // => false  (instance, not function)
isGeneratorFunction(() => {}) // => false
```

### Filter generator factories from a mixed array

Use as a predicate to select only generator functions.

```ts
const fns = [() => {}, function* () { yield 1; }, async () => {}];
fns.filter(isGeneratorFunction)
// => [function* () { yield 1; }]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isGeneratorFunction.ts)
