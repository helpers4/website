---
sidebar_label: "meaningPromiseOrThrow"
---

# meaningPromiseOrThrow

Returns a function that passes through meaningful data or throws an error.
Data is considered meaningless if it is null, undefined, empty string, empty object, or empty array.

> Available since v1.0.0

## Import

```ts
import { meaningPromiseOrThrow } from '@helpers4/promise';
```

## Signature


```ts
meaningPromiseOrThrow<T>(error: string): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `error` | `string` | The error message to throw if data is meaningless |

## Returns

`function` — A function that returns the data if meaningful, or throws

## Examples

### Pass through meaningful values

Returns the value if it is not empty (null, undefined, empty string, empty object, empty array).

```ts
Promise.resolve({ key: 'value' }).then(meaningPromiseOrThrow('No data'))
// => { key: 'value' }
```

### Throw on empty values

Throws when the value is null, undefined, empty string, empty object, or empty array.

```ts
Promise.resolve({}).then(meaningPromiseOrThrow('Empty!'))
// throws Error('Empty!')
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/meaningPromiseOrThrow.ts)
