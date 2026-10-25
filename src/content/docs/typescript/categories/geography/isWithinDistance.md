---
title: "isWithinDistance"
sidebar:
  label: "isWithinDistance"
description: "Whether a point lies within a radius of a center, the border included."
version: "3.1.9"
---

Whether a point lies within a radius of a center, the border included.

> Available since v3.1.8

## Import

```ts
import { isWithinDistance } from '@helpers4/geography';
// or, from the all-in-one package (same code, one install):
import { isWithinDistance } from 'helpers4/geography';
```

## Signature


```ts
isWithinDistance(centerLat: number, centerLon: number, radius: number, pointLat: number, pointLon: number): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `centerLat` | `number` | Latitude of the center, in degrees |
| `centerLon` | `number` | Longitude of the center, in degrees |
| `radius` | `number` | The radius in kilometres |
| `pointLat` | `number` | Latitude of the point, in degrees |
| `pointLon` | `number` | Longitude of the point, in degrees |

## Returns

`boolean` — `true` when the point is at most `radius` kilometres from the center

## Examples

### Is a place near me?

Radius check in kilometres, border included.

```ts
isWithinDistance(48.8566, 2.3522, 5, 48.8606, 2.3376)
// => true
```

### Far away

Paris is not within 5 km of London.

```ts
isWithinDistance(48.8566, 2.3522, 5, 51.5074, -0.1278)
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geography/isWithinDistance.ts)
