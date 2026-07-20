---
title: "kebabCaseKeys"
sidebar:
  label: "kebabCaseKeys"
---

Recursively transforms every key of a plain object (including keys nested inside arrays and
nested objects) to kebab-case. Handles snake_case, camelCase, PascalCase, and space-separated
keys. Non-plain-object values — `Date`, `Map`, `Set`, class instances, primitives — are left
untouched, only their position is walked into. An entry whose transformed key is a
prototype-polluting string (`__proto__`, `constructor`, `prototype`) is silently skipped,
same as the rest of `@helpers4/object`.

> Available since v3.0.3

## Import

```ts
import { kebabCaseKeys } from '@helpers4/object';
```

## Signature


```ts
kebabCaseKeys<T>(value: T): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T` | The object \(or array of objects\) to transform |

## Returns

`T` — A new value with every plain-object key converted to kebab-case

## Examples

### Convert object keys for a kebab-case config format

Recursively converts every key, including nested objects, to kebab-case.

```ts
kebabCaseKeys({ userName: 'Alice', homeAddress: { zipCode: '12345' } })
// => { 'user-name': 'Alice', 'home-address': { 'zip-code': '12345' } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/kebabCaseKeys.ts)
