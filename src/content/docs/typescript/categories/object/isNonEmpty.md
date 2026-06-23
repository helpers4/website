---
title: "isNonEmpty"
sidebar:
  label: "isNonEmpty"
---

Checks if a plain object has at least one own enumerable string-keyed property.
`null` and `undefined` are treated as empty objects and return `false`.

Symbol-keyed properties are not counted. Use `Object.getOwnPropertySymbols`
separately if symbol keys matter for your use case.

> Available since v2.0.3

## Import

```ts
import { isNonEmpty } from '@helpers4/object';
```

## Signature


```ts
isNonEmpty(value: Record<PropertyKey, unknown> | null | undefined): value is Record<PropertyKey, unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `Record<PropertyKey, unknown> \| null \| undefined` | The object to check |

## Returns

`value is Record<PropertyKey, unknown>` — `true` if the object has at least one own enumerable string-keyed property; `false` for empty, `null`, or `undefined`.
Acts as a type guard: the `if` branch narrows `Record<PropertyKey, unknown> | null | undefined` to `Record<PropertyKey, unknown>`.

## Examples

### Check if an object has own string-keyed properties

Returns true when at least one own enumerable string key is present.

```ts
isNonEmpty({ a: 1 })        // => true
isNonEmpty({ a: undefined }) // => true  (key exists)
isNonEmpty({})              // => false
```

### Guard before iterating object keys

Use isNonEmpty before looping to avoid processing empty objects.

```ts
function processConfig(config: Record<string, unknown>): void {
  if (!isNonEmpty(config)) {
    console.warn('Config is empty');
    return;
  }
  for (const key of Object.keys(config)) {
    // process each key
  }
}
```

:::caution[Name conflict]
A helper named `isNonEmpty` also exists in [`@helpers4/array`](../array/isnonempty/), [`@helpers4/string`](../string/isnonempty/). If you need both in the same file, rename at import with `as`:

```ts
import { isNonEmpty as isNonEmpty4object } from '@helpers4/object';
import { isNonEmpty as isNonEmpty4array } from '@helpers4/array';
import { isNonEmpty as isNonEmpty4string } from '@helpers4/string';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/isNonEmpty.ts)
