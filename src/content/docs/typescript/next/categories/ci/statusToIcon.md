---
title: "statusToIcon"
sidebar:
  label: "statusToIcon"
---

Maps a CI/CD job status to an emoji icon.

| Status | Icon |
|--------|------|
| `success` | ✅ |
| `failure` | ❌ |
| `skipped` | ⏭️ |
| *(other)* | ⚠️ |

> Available since v2.0.0

## Import

```ts
import { statusToIcon } from '@helpers4/ci';
```

## Signature


```ts
statusToIcon(status: CiStatus): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | `CiStatus` | The CI/CD job status |

## Returns

`string` — An emoji representing the status

## Examples

### Map CI status to icon

Returns an emoji icon matching the given CI status.

```ts
statusToIcon('success')  // => '✅'
statusToIcon('failure')  // => '❌'
statusToIcon('skipped')  // => '⏭️'
statusToIcon('pending')  // => '⚠️'
```

## Related Types

### `CiStatus`

Canonical CI/CD job status values.
The `string & {}` intersection allows any custom status string while
still enabling IDE auto-completion for the known values.

```ts
type CiStatus = 'success' | 'failure' | 'skipped' | 'unknown' | (string & {})
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v3/helpers/ci/statusToIcon.ts)
