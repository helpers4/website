---
sidebar_label: "pick"
---

# pick

Creates a new object with only the specified keys.

> Available since v2.0.0

## Import

```ts
import { pick } from '@helpers4/object';
```

## Signature

```ts
pick<T extends Record<string, unknown>, K extends string | number | symbol>(obj: T, keys: readonly K[]): Pick<T, K>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | `T` | The source object |
| `keys` | `readonly K[]` | The keys to pick |

## Returns

`Pick<T, K>` — A new object with only the picked keys

## Examples

### Pick specific keys

Creates a new object with only the specified keys.

```ts
pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])
// => { a: 1, c: 3 }
```

### Extract user fields

Useful to select only the fields you need from an object.

```ts
const user = { id: 1, name: 'Alice', email: 'alice@example.com', password: 'secret' };
pick(user, ['id', 'name', 'email'])
// => { id: 1, name: 'Alice', email: 'alice@example.com' }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/pick.ts)
