---
title: "paginate"
sidebar:
  label: "paginate"
description: "Collects every item of a paginated source by requesting pages one after the other, from page 1, until the source runs o…"
version: "3.1.6"
---

Collects every item of a paginated source by requesting pages one after the other, from
page 1, until the source runs out.

It stops after a page that is `null`, empty, or shorter than `pageSize`, or once `maxPages`
pages were requested. A `null` page is not added to the result. A rejection from
`fetchPage` rejects the whole call, and the items already collected are lost.

Without `maxPages`, a source that never returns a short or empty page is requested forever,
so set one for an API you do not control, or a `signal` to stop it.

> Available since v3.1.5

## Import

```ts
import { paginate } from '@helpers4/promise';
// or, from the all-in-one package (same code, one install):
import { paginate } from 'helpers4/promise';
```

## Signature


```ts
paginate<T>(fetchPage: function, options: PaginateOptions): Promise<T[]>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `fetchPage` | `function` | Returns the items of a page, given its 1\-based number, or \`null\` for no data |
| `options` | `PaginateOptions` | Page size, page limit and cancellation — see PaginateOptions |

## Returns

`Promise<T[]>` — All the items, in page order

## Examples

### Collect every page

Pages are requested in order until one is shorter than pageSize.

```ts
const all = [1, 2, 3, 4, 5];
await paginate((page) => Promise.resolve(all.slice((page - 1) * 2, page * 2)), { pageSize: 2 })
// => [1, 2, 3, 4, 5] (3 requests)
```

### Cap the number of pages

maxPages protects against a source that never runs out.

```ts
await paginate((page) => Promise.resolve([page]), { maxPages: 3 })
// => [1, 2, 3]
```

## Related Types

### `PaginateOptions`

Options for paginate.

```ts
interface PaginateOptions {
  maxPages?: number;
  pageSize?: number;
  signal?: AbortSignal;
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/promise/paginate.ts)
