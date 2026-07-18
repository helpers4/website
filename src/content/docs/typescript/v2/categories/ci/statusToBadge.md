---
title: "statusToBadge"
sidebar:
  label: "statusToBadge"
---

Maps a CI/CD job status to an inline code badge string.

| Status | Badge |
|--------|-------|
| `success` | `` `passing` `` |
| `failure` | `` `failing` `` |
| `skipped` | `` `skipped` `` |
| *(other)* | `` `unknown` `` |

> Available since v2.0.0

## Import

```ts
import { statusToBadge } from '@helpers4/ci';
```

## Signature


```ts
statusToBadge(status: CiStatus): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | `CiStatus` | The CI/CD job status |

## Returns

`string` — A Markdown inline-code badge

## Examples

### Map CI status to a Markdown badge

Returns a Markdown code-span badge string for the given CI status.

```ts
statusToBadge('success')  // => '`passing`'
statusToBadge('failure')  // => '`failing`'
statusToBadge('skipped')  // => '`skipped`'
statusToBadge('pending')  // => '`unknown`'
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

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/ci/statusToBadge.ts)
