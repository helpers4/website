---
sidebar_label: "satisfiesRange"
---

# satisfiesRange

Checks if a version satisfies a range (simple implementation)

> Available since v1.9.0

## Import

```ts
import { satisfiesRange } from '@helpers4/version';
```

## Signature

```ts
satisfiesRange(version: string, range: string): boolean
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `version` | `string` | Version to check |
| `range` | `string` | Range pattern (e.g., ">=1.0.0", "~1.2.0", "^1.0.0") |

## Returns

`boolean` — True if version satisfies the range

## Examples

### Check caret range

Caret (^) allows patch and minor updates within the same major.

```ts
satisfiesRange('1.2.3', '^1.0.0')
// => true
```

### Check greater-than-or-equal range

The >= operator checks if the version is at least the specified value.

```ts
satisfiesRange('2.0.0', '>=1.5.0')
// => true
```

### Out of range

Returns false when the version does not satisfy the range.

```ts
satisfiesRange('0.9.0', '>=1.0.0')
// => false
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/version/satisfiesRange.ts)
