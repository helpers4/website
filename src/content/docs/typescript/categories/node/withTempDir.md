---
title: "withTempDir"
sidebar:
  label: "withTempDir"
description: "Creates a fresh temporary directory under the OS temp root, runs `fn` with its path, and always removes it (recursively…"
version: "3.1.1"
---

Creates a fresh temporary directory under the OS temp root, runs `fn` with its path, and
always removes it (recursively) afterward — including when `fn` throws.

> Available since v3.1.1

## Import

```ts
import { withTempDir } from '@helpers4/node';
// or, from the all-in-one package (same code, one install):
import { withTempDir } from 'helpers4/node';
```

## Signature


```ts
withTempDir<T>(prefix: string, fn: function): Promise<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `prefix` | `string` | Prepended to the generated directory name, to make it identifiable |
| `fn` | `function` | Receives the temp directory's absolute path; its \(possibly synchronous\) return value is returned |

## Returns

`Promise<T>` — Whatever `fn` returns or resolves to

## Examples

### Do work in a scratch directory that always gets cleaned up

The directory is removed once fn resolves, even if fn throws.

```ts
await withTempDir('my-tool', async (dir) => {
  await writeFile(`${dir}/output.txt`, 'data');
  return readFile(`${dir}/output.txt`, 'utf-8');
});
// => 'data' (the directory no longer exists once this resolves)
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/node/withTempDir.ts)
