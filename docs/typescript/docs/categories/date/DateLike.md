---
sidebar_label: "DateLike"
---

# DateLike

A value that can be converted to a Date.

- `Date` — used as-is (validated for Invalid Date)
- `number` — treated as a timestamp (seconds or milliseconds, auto-detected);
  `0` is treated as invalid and produces `null` in ensureDate
- `string` — parsed via `new Date(string)`
- `EpochMilliseconds` — any object with a `epochMilliseconds` property
  (e.g. `Temporal.Instant`, `Temporal.ZonedDateTime`)

// TODO: When the Temporal API reaches Stage 4 and is available without
// flags in all major runtimes, consider narrowing the union to the
// concrete Temporal types for stricter type-checking.

> Available since v2.0.0

## Import

```ts
import { DateLike } from '@helpers4/date';
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/types.ts)
