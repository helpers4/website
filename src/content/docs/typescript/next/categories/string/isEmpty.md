---
title: "isEmpty"
sidebar:
  label: "isEmpty"
---

Checks if a string is empty (`""`), `null`, or `undefined`.

This is a strict emptiness check — whitespace-only strings are **not** considered
empty. Use `isEmpty(value?.trim())` if you need to treat blank strings as empty.

> Available since v2.0.3

## Import

```ts
import { isEmpty } from '@helpers4/string';
```

## Signature


```ts
isEmpty(value: string | null | undefined): value is "" | null | undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `string \| null \| undefined` | The string to check |

## Returns

`value is "" | null | undefined` — `true` if the string is `""`, `null`, or `undefined`

## Examples

### Check if a string is empty

Returns true only for `""`. Whitespace-only strings are not considered empty.

```ts
isEmpty('')    // => true
isEmpty(' ')   // => false  (whitespace is content)
isEmpty('foo') // => false
```

### Treat blank strings as empty by trimming first

Compose with .trim() when whitespace-only should also be considered empty.

```ts
isEmpty(''.trim())   // => true
isEmpty('   '.trim()) // => true
isEmpty('hi'.trim())  // => false
```

:::caution[Name conflict]
A helper named `isEmpty` also exists in [`@helpers4/array`](../array/isempty/), [`@helpers4/object`](../object/isempty/). If you need both in the same file, rename at import with `as`:

```ts
import { isEmpty as isEmpty4string } from '@helpers4/string';
import { isEmpty as isEmpty4array } from '@helpers4/array';
import { isEmpty as isEmpty4object } from '@helpers4/object';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/string/isEmpty.ts)
