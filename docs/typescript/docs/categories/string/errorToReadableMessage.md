---
sidebar_label: "errorToReadableMessage"
---

# errorToReadableMessage

Convert an error to a readable message.

## Import

```ts
import { errorToReadableMessage } from '@helpers4/string';
```

## Signature

```ts
function errorToReadableMessage(error?: unknown, stringify?: boolean | string): string | undefined
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `error` | an error |
| `stringify` | stringifies the error if no extractable message is found |

## Returns

a readable message or a stringified error if stringify is true, otherwise undefined

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/string/errorToReadableMessage.ts)
