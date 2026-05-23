---
title: "compact"
sidebar:
  label: "compact"
---

Removes all falsy values (`false`, `null`, `undefined`, `0`, `""`, `NaN`) from an array.

> Available since v2.0.0

## Import

```ts
import { compact } from '@helpers4/array';
```

## Signature


```ts
compact<T>(array: readonly Falsy | T[]): Exclude<T, Falsy>[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | `readonly Falsy \| T[]` | The array to compact |

## Returns

`Exclude<T, Falsy>[]` — A new array with only truthy values

## Examples

### Remove falsy values

Removes all falsy values (false, null, undefined, 0, "", NaN) from an array.

```ts
compact([0, 1, false, 2, '', 3, null, undefined, NaN])
// => [1, 2, 3]
```

### Filter nullable strings

Useful to clean up arrays with null/undefined gaps.

```ts
compact(['hello', null, 'world', undefined, ''])
// => ['hello', 'world']
```

:::caution[Name conflict]
A helper named `compact` also exists in [`@helpers4/object`](../object/compact/). If you need both in the same file, rename at import with `as`:

```ts
import { compact as compact4array } from '@helpers4/array';
import { compact as compact4object } from '@helpers4/object';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/array/compact.ts)
