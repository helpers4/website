---
sidebar_label: "kebabCase"
---

# kebabCase

Converts camelCase to kebab-case

> Available since v1.9.0

## Import

```ts
import { kebabCase } from '@helpers4/string';
```

## Signature


```ts
kebabCase(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The camelCase string to convert |

## Returns

`string` — String in kebab-case

## Examples

### Convert camelCase to kebab-case

Converts a camelCase string to kebab-case.

```ts
kebabCase('myComponentName')
// => 'my-component-name'
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/kebabCase.ts)
