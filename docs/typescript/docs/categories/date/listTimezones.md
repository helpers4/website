---
sidebar_label: "listTimezones"
---

# listTimezones

Returns the list of IANA timezone identifiers supported by the runtime.

Wraps `Intl.supportedValuesOf('timeZone')` which is available in
Node 18+, Chrome 93+, Firefox 93+, Safari 15.4+.

> Available since v2.0.0

## Import

```ts
import { listTimezones } from '@helpers4/date';
```

## Signature


```ts
listTimezones(): string[]
```

## Returns

`string[]` — An array of IANA timezone strings (e.g. `['Africa/Abidjan', …, 'US/Pacific']`)

## Examples

### listTimezones



```ts
listTimezones() // => ['Africa/Abidjan', 'Africa/Accra', …]
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/date/timezone.ts)
