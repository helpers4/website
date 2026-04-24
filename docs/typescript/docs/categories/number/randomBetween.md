---
sidebar_label: "randomBetween"
---

# randomBetween

Generates a random number between min and max (inclusive)

> Available since v1.9.0

## Import

```ts
import { randomBetween } from '@helpers4/number';
```

## Signature


```ts
randomBetween(min: number, max: number): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `min` | `number` | Minimum value |
| `max` | `number` | Maximum value |

## Returns

`number` — Random number between min and max

## Examples

### Generate a random float in range

Returns a random number between min and max (inclusive).

```ts
randomBetween(1, 10)
// => e.g. 5.327...
```

### Generate a random integer in range

Returns a random integer between min and max (inclusive).

```ts
randomIntBetween(1, 6)
// => e.g. 4
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/number/random.ts)
