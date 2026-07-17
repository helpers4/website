---
title: "labelize"
sidebar:
  label: "labelize"
---

Transform a string to lowercase with capitalized first letters and spaces between words.

Splits on `-`, `_`, or existing spaces, capitalizes the first letter of each resulting word,
lowercases the rest, and joins them with a single space.

> Available since v1.0.1

## Import

```ts
import { labelize } from '@helpers4/string';
```

## Signature

```ts
labelize(str: string): string
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | The string to convert. |

## Returns

`string` — The labelized string.

## Examples

### Labelize a kebab-case string

```ts
labelize('hello-world_foo bar');
// => 'Hello World Foo Bar'
```

## Source

[View on npm](https://www.npmjs.com/package/@helpers4/string/v/1.0.1)
