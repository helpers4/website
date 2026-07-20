---
title: "snakeCaseKeys"
sidebar:
  label: "snakeCaseKeys"
---

Recursively transforms every key of a plain object (including keys nested inside arrays and
nested objects) to snake_case. Handles camelCase, PascalCase, kebab-case, and space-separated
keys. Non-plain-object values — `Date`, `Map`, `Set`, class instances, primitives — are left
untouched, only their position is walked into. An entry whose transformed key is a
prototype-polluting string (`__proto__`, `constructor`, `prototype`) is silently skipped,
same as the rest of `@helpers4/object`.

> Available since v3.0.3

## Import

```ts
import { snakeCaseKeys } from '@helpers4/object';
```

## Signature


```ts
snakeCaseKeys<T>(value: T): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T` | The object \(or array of objects\) to transform |

## Returns

`T` — A new value with every plain-object key converted to snake_case

## Examples

### Convert a camelCase object for a snake_case API

Recursively converts every key, including nested objects, to snake_case.

```ts
snakeCaseKeys({ userName: 'Alice', homeAddress: { zipCode: '12345' } })
// => { user_name: 'Alice', home_address: { zip_code: '12345' } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/snakeCaseKeys.ts)
