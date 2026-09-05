---
title: "safeReadJsonFile"
sidebar:
  label: "safeReadJsonFile"
description: "Reads a file and parses its contents as JSON, returning `null` (or a fallback) on any failure — a missing/unreadable fi…"
version: "3.1.0"
---

Reads a file and parses its contents as JSON, returning `null` (or a
fallback) on any failure — a missing/unreadable file and invalid content
are both treated the same way.

Also tolerates JSONC (line/block comments and trailing commas — the
dialect used by `tsconfig.json`, VS Code's `settings.json`, etc.): strict
`JSON.parse` is tried first, and only on failure is the content re-parsed
with comments/trailing commas stripped, so plain JSON pays no extra cost.

Unlike `readFileSync` + `JSON.parse`, this never throws.

> Available since v3.0.6

## Import

```ts
import { safeReadJsonFile } from '@helpers4/node';
// or, from the all-in-one package (same code, one install):
import { safeReadJsonFile } from 'helpers4/node';
```

## Signature


```ts
safeReadJsonFile<T>(filePath: string): T | null
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `filePath` | `string` | Path to the JSON \(or JSONC\) file to read\. |

## Returns

`T | null` — The parsed value typed as `T`, or `fallback` on failure.

## Examples

### Read and parse a JSON file

Returns the parsed value when the file exists and contains valid JSON.

```ts
safeReadJsonFile<{ name: string }>('./package.json')
// => { name: 'my-package', ... }
```

### Return null when the file is missing

Returns null instead of throwing when the file does not exist.

```ts
safeReadJsonFile('./does-not-exist.json')
// => null
```

### Use a fallback value

Returns the provided fallback when the file is missing or invalid.

```ts
safeReadJsonFile('./does-not-exist.json', {})
// => {}
```

### Also reads JSONC (comments + trailing commas)

tsconfig.json/settings.json-style content — line/block comments and a trailing comma — parses too.

```ts
safeReadJsonFile('./tsconfig.json')
// {
//   // enable strict type-checking
//   "compilerOptions": { "strict": true },
// }
// => { compilerOptions: { strict: true } }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/node/safeReadJsonFile.ts)
