---
title: "camelCaseKeys"
sidebar:
  label: "camelCaseKeys"
---

Recursively transforms every key of a plain object (including keys nested inside arrays and
nested objects) to camelCase. Handles snake_case, kebab-case, PascalCase, and space-separated
keys. Non-plain-object values (arrays' items aside) — `Date`, `Map`, `Set`, class instances,
primitives — are left untouched, only their position is walked into. An entry whose
transformed key is a prototype-polluting string (`__proto__`, `constructor`, `prototype`) is
silently skipped, same as the rest of `@helpers4/object`.

> Available since v3.0.3

## Import

```ts
import { camelCaseKeys } from '@helpers4/object';
```

## Signature


```ts
camelCaseKeys<T>(value: T): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T` | The object \(or array of objects\) to transform |

## Returns

`T` — A new value with every plain-object key converted to camelCase

## Examples

### Convert a snake_case API response

Recursively converts every key, including nested objects, to camelCase.

```ts
camelCaseKeys({ user_name: 'Alice', home_address: { zip_code: '12345' } })
// => { userName: 'Alice', homeAddress: { zipCode: '12345' } }
```

### Arrays of objects are walked too

Each object inside an array gets its keys converted.

```ts
camelCaseKeys({ user_list: [{ first_name: 'A' }] })
// => { userList: [{ firstName: 'A' }] }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/camelCaseKeys.ts)
