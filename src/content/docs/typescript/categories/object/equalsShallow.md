---
title: "equalsShallow"
sidebar:
  label: "equalsShallow"
---

One-level (shallow) object equality.

Two objects are equal when they share the exact same set of own
enumerable string keys and each pair of values satisfies strict equality
(`===`). No recursion: nested objects/arrays are compared by reference.

Falls back to strict equality when either input is `null`, `undefined`
or not an object \u2014 so primitives match if and only if they are `===`.
Arrays are not supported; they always return `false` (unless identical
references). Use `array/equalsShallow` instead.

For recursive structural comparison use equalsDeep. For a diff
structure use diff.

> Available since v2.0.0

## Import

```ts
import { equalsShallow } from '@helpers4/object';
```

## Signature


```ts
equalsShallow(objA: unknown, objB: unknown): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `objA` | `unknown` | First value to compare |
| `objB` | `unknown` | Second value to compare |

## Returns

`boolean` — `true` if values are shallowly equal, `false` otherwise.

## Examples

### Compare two equal objects

Uses JSON.stringify for a fast comparison.

```ts
equalsShallow({ a: 1, b: 2 }, { a: 1, b: 2 })
// => true
```

:::caution[Name conflict]
A helper named `equalsShallow` also exists in [`@helpers4/array`](../array/equalsshallow/). If you need both in the same file, rename at import with `as`:

```ts
import { equalsShallow as equalsShallow4object } from '@helpers4/object';
import { equalsShallow as equalsShallow4array } from '@helpers4/array';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/equalsShallow.ts)
