---
title: "distance"
sidebar:
  label: "distance"
description: "Great-circle distance between two WGS84 points, in kilometres (haversine formula, mean Earth radius of 6371 km)."
version: "3.1.9"
---

Great-circle distance between two WGS84 points, in kilometres (haversine formula, mean Earth
radius of 6371 km). The Earth is treated as a sphere, so the result can be off by up to about
0.5% compared to an ellipsoidal model — plenty for "how far is it" and radius checks. Near
antipodal points the formula loses a little precision (well under a metre).

> Available since v3.1.8

## Import

```ts
import { distance } from '@helpers4/geography';
// or, from the all-in-one package (same code, one install):
import { distance } from 'helpers4/geography';
```

## Signature


```ts
distance(lat1: number, lon1: number, lat2: number, lon2: number): number
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `lat1` | `number` | Latitude of the first point, in degrees |
| `lon1` | `number` | Longitude of the first point, in degrees |
| `lat2` | `number` | Latitude of the second point, in degrees |
| `lon2` | `number` | Longitude of the second point, in degrees |

## Returns

`number` — The distance in kilometres

## Examples

### Distance between two cities

Great-circle distance in kilometres between two latitude/longitude points.

```ts
distance(48.8566, 2.3522, 51.5074, -0.1278)
// => about 343.6 (Paris to London)
```

### Zero for the same point

A point is at distance 0 from itself.

```ts
distance(10, 20, 10, 20) // => 0
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geography/distance.ts)
