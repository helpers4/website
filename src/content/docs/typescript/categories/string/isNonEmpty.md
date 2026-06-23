---
title: "isNonEmpty"
sidebar:
  label: "isNonEmpty"
---

Checks if a string is non-empty (has at least one character).
`null` and `undefined` are considered empty and return `false`.

Whitespace-only strings are considered non-empty.
Use `isNonEmpty(value?.trim())` if you need to exclude blank strings.

> Available since v2.0.3

## Import

```ts
import { isNonEmpty } from '@helpers4/string';
```

## Signature


```ts
isNonEmpty(value: string | null | undefined): value is string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `string \| null \| undefined` | The string to check |

## Returns

`value is string` — `true` if the string has at least one character; `false` for `""`, `null`, or `undefined`.
Acts as a type guard: the `if` branch narrows `string | null | undefined` to `string`.

## Examples

### Check if a string has content

Returns true for any string with at least one character, including whitespace.

```ts
isNonEmpty('hello') // => true
isNonEmpty(' ')     // => true  (whitespace is content)
isNonEmpty('')      // => false
```

### Exclude blank strings by trimming first

Compose with .trim() when whitespace-only strings should be treated as empty.

```ts
isNonEmpty('hello'.trim()) // => true
isNonEmpty('   '.trim())   // => false
isNonEmpty(''.trim())      // => false
```

:::caution[Name conflict]
A helper named `isNonEmpty` also exists in [`@helpers4/array`](../array/isnonempty/), [`@helpers4/object`](../object/isnonempty/). If you need both in the same file, rename at import with `as`:

```ts
import { isNonEmpty as isNonEmpty4string } from '@helpers4/string';
import { isNonEmpty as isNonEmpty4array } from '@helpers4/array';
import { isNonEmpty as isNonEmpty4object } from '@helpers4/object';
```

See [Name Conflicts](../../reference/naming-conflicts/) for the full resolution guide.
:::

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/isNonEmpty.ts)
