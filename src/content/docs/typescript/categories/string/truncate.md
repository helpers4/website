---
title: "truncate"
sidebar:
  label: "truncate"
---

Truncates a string to `maxLength` characters, appending an ellipsis when cut.

The ellipsis counts toward `maxLength`, so the result is always at most
`maxLength` characters long. If the string is already within the limit, it
is returned unchanged (no ellipsis appended). `null` and `undefined` inputs
are returned as-is to align with other string helpers.

> Available since next

## Import

```ts
import { truncate } from '@helpers4/string';
```

## Signature


```ts
truncate(input: undefined, maxLength: number, ellipsis?: string): undefined
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | `undefined` | The string to truncate. |
| `maxLength` | `number` | Maximum number of characters in the output (including ellipsis). |
| `ellipsis` | `string` | Appended when the string is cut. Defaults to `'…'`. *(optional)* |

## Returns

`undefined` — The (possibly truncated) string, or the input itself when `null`/`undefined`.

## Examples

### Truncate with default ellipsis

Appends … when the string exceeds the limit.

```ts
truncate('Hello, world!', 8)
// => 'Hello, …'
```

### Truncate with custom ellipsis

The ellipsis counts toward the maxLength.

```ts
truncate('Hello, world!', 8, '...')
// => 'Hello...'
```

### String within limit

Returned unchanged when already short enough.

```ts
truncate('Hi', 10)
// => 'Hi'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/truncate.ts)
