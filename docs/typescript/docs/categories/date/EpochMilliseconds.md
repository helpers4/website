---
sidebar_label: "EpochMilliseconds"
---

# EpochMilliseconds

An object that exposes an epoch timestamp in milliseconds.

This structural type is satisfied by `Temporal.Instant` and
`Temporal.ZonedDateTime` (and any future object that carries the same
property), so callers can pass Temporal values without importing them.

> Available since v2.0.0

## Import

```ts
import { EpochMilliseconds } from '@helpers4/date';
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/types.ts)
