---
title: "omit"
sidebar:
  label: "omit"
---

# omit

Creates a new object without the specified keys.

> Available since v2.0.0

## Import

```ts
import { omit } from '@helpers4/object';
```

## Signature


```ts
omit<T extends Record<string, unknown>, K extends string | number | symbol>(obj: T, keys: readonly K[]): Omit<T, K>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The source object |
| `keys` | `readonly K[]` | The keys to omit |

## Returns

`Omit<T, K>` — A new object without the omitted keys

## Examples

### Omit specific keys

Creates a new object without the specified keys.

```ts
omit({ a: 1, b: 2, c: 3 }, ['b'])
// => { a: 1, c: 3 }
```

### Remove sensitive fields

Useful to strip sensitive data before sending to client.

```ts
const user = { id: 1, name: 'Alice', password: 'secret', token: 'abc123' };
omit(user, ['password', 'token'])
// => { id: 1, name: 'Alice' }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/omit.ts)
