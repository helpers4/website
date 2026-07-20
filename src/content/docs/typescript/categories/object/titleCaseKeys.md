---
title: "titleCaseKeys"
sidebar:
  label: "titleCaseKeys"
---

Recursively transforms every key of a plain object (including keys nested inside arrays and
nested objects) to Title Case. Handles camelCase, snake_case, kebab-case, and space-separated
keys. Non-plain-object values — `Date`, `Map`, `Set`, class instances, primitives — are left
untouched, only their position is walked into. An entry whose transformed key is a
prototype-polluting string (`__proto__`, `constructor`, `prototype`) is silently skipped,
same as the rest of `@helpers4/object`.

Note: unlike the other `*CaseKeys` variants, `titleCase` joins words with spaces (e.g.
`'User Name'`) — those keys are only usable via bracket access (`obj['User Name']`), not dot
notation. Useful for display-facing structures (form labels, table headers), not wire formats.

> Available since v3.0.3

## Import

```ts
import { titleCaseKeys } from '@helpers4/object';
```

## Signature


```ts
titleCaseKeys<T>(value: T): T
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T` | The object \(or array of objects\) to transform |

## Returns

`T` — A new value with every plain-object key converted to Title Case

## Examples

### Convert object keys into display-friendly labels

Recursively converts every key to Title Case — useful for form labels or table headers.

```ts
titleCaseKeys({ user_name: 'Alice', home_address: { zip_code: '12345' } })
// => { 'User Name': 'Alice', 'Home Address': { 'Zip Code': '12345' } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/object/titleCaseKeys.ts)
