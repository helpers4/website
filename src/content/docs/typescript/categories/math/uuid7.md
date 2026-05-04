---
title: "uuid7"
sidebar:
  label: "uuid7"
---

# uuid7

Generates a UUID v7 string (RFC 9562).
UUID v7 embeds a Unix timestamp in milliseconds, making it
chronologically sortable while retaining randomness.

> Available since v2.0.0

## Import

```ts
import { uuid7 } from '@helpers4/math';
```

## Signature


```ts
uuid7(): string
```

## Returns

`string` — A UUID v7 string in the format `xxxxxxxx-xxxx-7xxx-yxxx-xxxxxxxxxxxx`

## Examples

### Generate a UUID v7

Produces a RFC 9562 UUID v7 string with an embedded millisecond timestamp.

```ts
uuid7()
// => "019077e0-5c70-7b3a-8a1f-3e4d5b6c7d8e"
```

### UUIDs are chronologically sortable

UUID v7 values generated later are lexicographically greater, making them ideal for database primary keys.

```ts
const id1 = uuid7();
// ... later ...
const id2 = uuid7();
id1 < id2 // => true
```

### Each UUID is unique

No two calls produce the same value.

```ts
uuid7() !== uuid7() // => true
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/math/uuid7.ts)
