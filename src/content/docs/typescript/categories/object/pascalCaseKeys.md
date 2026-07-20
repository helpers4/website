---
title: "pascalCaseKeys"
sidebar:
  label: "pascalCaseKeys"
---

Recursively transforms every key of a plain object (including keys nested inside arrays and
nested objects) to PascalCase. Handles camelCase, snake_case, kebab-case, and space-separated
keys. Non-plain-object values — `Date`, `Map`, `Set`, class instances, primitives — are left
untouched, only their position is walked into. An entry whose transformed key is a
prototype-polluting string (`__proto__`, `constructor`, `prototype`) is silently skipped,
same as the rest of `@helpers4/object`.

> Available since v3.0.3

## Import

```ts
import { pascalCaseKeys } from '@helpers4/object';
```

## Signature


```ts
pascalCaseKeys<T>(value: T): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T` | The object \(or array of objects\) to transform |

## Returns

`T` — A new value with every plain-object key converted to PascalCase

## Examples

### Convert object keys to PascalCase (e.g. for a C#/JSON.NET consumer)

Recursively converts every key, including nested objects, to PascalCase.

```ts
pascalCaseKeys({ user_name: 'Alice', home_address: { zip_code: '12345' } })
// => { UserName: 'Alice', HomeAddress: { ZipCode: '12345' } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/pascalCaseKeys.ts)
