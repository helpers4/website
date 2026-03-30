---
sidebar_label: "isEmpty"
---

# isEmpty

Checks if a value is empty.

Supported types:
- `null` / `undefined` → empty
- `string` → length === 0
- `array` → length === 0
- `Map` / `Set` → size === 0
- plain object → no own enumerable properties

## Import

```ts
import { isEmpty } from '@helpers4/type';
```

## Signature

```ts
function isEmpty(value: unknown): boolean
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `value` | The value to check |

## Returns

`true` if the value is considered empty, `false` otherwise

## Example

```ts
isEmpty('') // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty('foo') // false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/type/isEmpty.ts)
