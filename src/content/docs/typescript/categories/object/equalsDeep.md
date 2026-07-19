---
title: "equalsDeep"
sidebar:
  label: "equalsDeep"
---

Recursive structural object equality.

Boolean wrapper around diff \u2014 returns `true` when the two values
are deeply equal according to the same rules. Use this when you only
need a yes/no answer; use diff when you also need to know
*what* differs.

For a one-level boolean check use equalsShallow.

> Available since v2.0.0

## Import

```ts
import { equalsDeep } from '@helpers4/object';
```

## Signature


```ts
equalsDeep(objA: object | null | undefined, objB: object | null | undefined): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `objA` | `object \| null \| undefined` | First value \(object, \`null\`, or \`undefined\`\)\. |
| `objB` | `object \| null \| undefined` | Second value \(object, \`null\`, or \`undefined\`\)\. |

## Returns

`boolean` — `true` if both inputs are deeply equal, `false` otherwise.

## Examples

### Compare nested objects

Recursive structural equality. Returns true when the two values are deeply equal.

```ts
equalsDeep({ a: { b: 1 } }, { a: { b: 1 } })
// => true
```

### Detect deep differences

Returns false when nested values differ.

```ts
equalsDeep({ a: { b: 1 } }, { a: { b: 2 } })
// => false
```

:::caution[Name conflict]
A helper named `equalsDeep` also exists in [`@helpers4/array`](../array/equalsdeep/). If you need both in the same file, rename at import with `as`:

```ts
import { equalsDeep as equalsDeep4object } from '@helpers4/object';
import { equalsDeep as equalsDeep4array } from '@helpers4/array';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/equalsDeep.ts)
