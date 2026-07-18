---
title: "sample"
sidebar:
  label: "sample"
---

Picks one or more random elements from an array.
When called without a count, returns a single element or `undefined` if the array is empty.
When called with a count, returns an array of up to `count` random elements sampled without replacement.

> Available since v2.0.0

## Import

```ts
import { sample } from '@helpers4/array';
```

## Signature


```ts
sample<T>(array: readonly T[] | null | undefined): T | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly T[] \| null \| undefined` | The source array to pick from |

## Returns

`T | undefined` — A single random element (or `undefined`) when no count is given, or an array of random elements when count is given

## Examples

### Pick a single random element

Without a count, returns one random element from the array.

```ts
sample([1, 2, 3, 4, 5])
// => 3 (random element)
```

### Pick multiple random elements

With a count, returns an array of random elements sampled without replacement.

```ts
sample([1, 2, 3, 4, 5], 3)
// => [2, 5, 1] (3 random elements, without replacement)
```

### Empty array returns undefined

Returns undefined when sampling from an empty array.

```ts
sample([])
// => undefined
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/array/sample.ts)
