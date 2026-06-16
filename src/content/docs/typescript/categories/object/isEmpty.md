---
title: "isEmpty"
sidebar:
  label: "isEmpty"
---

Checks if a plain object has no own enumerable string-keyed properties.

Symbol-keyed properties are not counted. Use `Object.getOwnPropertySymbols`
separately if symbol keys matter for your use case.

> Available since v2.0.3

## Import

```ts
import { isEmpty } from '@helpers4/object';
```

## Signature


```ts
isEmpty(value: Record<PropertyKey, unknown>): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `Record<PropertyKey, unknown>` | The object to check |

## Returns

`boolean` — `true` if the object has no own enumerable string-keyed properties

## Examples

### Check if an object has no own string-keyed properties

Returns true for `{}`. Symbol-keyed properties are not counted.

```ts
isEmpty({})              // => true
isEmpty({ a: 1 })        // => false
isEmpty({ a: undefined }) // => false  (key exists even if value is undefined)
```

### Symbol keys are not counted

An object with only symbol-keyed properties is considered empty.

```ts
const sym = Symbol('x');
const obj = { [sym]: 1 };
isEmpty(obj) // => true  (only string keys are counted)
```

:::caution[Name conflict]
A helper named `isEmpty` also exists in [`@helpers4/array`](../array/isempty/), [`@helpers4/string`](../string/isempty/), [`@helpers4/type`](../type/isempty/). If you need both in the same file, rename at import with `as`:

```ts
import { isEmpty as isEmpty4object } from '@helpers4/object';
import { isEmpty as isEmpty4array } from '@helpers4/array';
import { isEmpty as isEmpty4string } from '@helpers4/string';
import { isEmpty as isEmpty4type } from '@helpers4/type';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/isEmpty.ts)
