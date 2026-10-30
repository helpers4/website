---
title: "createFileStore"
sidebar:
  label: "createFileStore"
description: "Creates a file store on a named Cache API cache: keep a computed set of files (a bake, a download, extracted layers) un…"
version: "3.1.10"
---

Creates a file store on a named Cache API cache: keep a computed set of files (a bake, a
download, extracted layers) under a key and a version, and read it back later, even offline.
Cache entries are keyed by made-up URLs, so nothing is ever fetched.

Outside a browser (no `caches`), `put` stores nothing and `get` always misses, so a caller
works without a cache, only slower.

> Available since v3.1.10

## Import

```ts
import { createFileStore } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { createFileStore } from 'helpers4/browser';
```

## Signature


```ts
createFileStore(name: string): FileStore
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `string` | The name of the cache, shared by every store with that name |

## Returns

`FileStore` — The FileStore

## Examples

### Keep a bake for the next visit

Files go under a key and a version; a new version is a miss.

```ts
const store = createFileStore('bakes');
await store.put('design-1', { 'a.png': blob, 'index.json': '{}' }, 'v3');
const files = await store.get('design-1', 'v3'); // => { 'a.png': Blob, 'index.json': Blob }
```

## Related Types

### `FileStore`

A set of files kept in the browser's Cache API under a key, created by createFileStore.

```ts
interface FileStore {
  delete(key: string): Promise<boolean>;
  get(key: string, version?: string): Promise<Record<string, Blob> | undefined>;
  put(key: string, files: Record<string, FileContent>, version?: string): Promise<boolean>;
}
```

### `FileContent`

What createFileStore accepts as a file's content.

```ts
type FileContent = Blob | BufferSource | string
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/createFileStore.ts)
