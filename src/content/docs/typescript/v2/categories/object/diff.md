---
title: "diff"
sidebar:
  label: "diff"
---

Structural object diff.

Returns `true` when both inputs are deeply equal, otherwise a
DiffResult describing the differences key by key.

Comparison rules:
- Same reference \u2192 `true`.
- Either side is `null`/`undefined` (and not both) \u2192 `false`.
- Both `Date` \u2192 epoch comparison.
- Both arrays \u2192 compared with `array/equalsDeep` (leaf, no diff drill-down).
- Special objects (Map, Set, RegExp, Promise, class instances\u2026) \u2192 reference equality.
- Plain objects \u2192 key-by-key, recursing up to `options.depth` levels.
- Mixed types (e.g. array vs object, Date vs object) \u2192 `false`.

For a boolean wrapper see equalsDeep from this category.
For a one-level boolean check see equalsShallow from this category.

> Available since v2.0.0

## Import

```ts
import { diff } from '@helpers4/object';
```

## Signature


```ts
diff(objA: object | null | undefined, objB: object | null | undefined, options: DiffOptions): boolean | DiffResult
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `objA` | `object \| null \| undefined` | First value (object, `null`, or `undefined`). |
| `objB` | `object \| null \| undefined` | Second value (object, `null`, or `undefined`). |
| `options` | `DiffOptions` | See DiffOptions. |

## Returns

`boolean | DiffResult` — `true` when equal, otherwise a DiffResult, or `false` for incompatible types.

## Examples

### Compare nested objects

Deeply compares two objects, returning true when they are structurally equal.

```ts
diff({ a: { b: 1 } }, { a: { b: 1 } })
// => true
```

### Detect deep differences

Returns a detailed diff object when nested values differ.

```ts
diff({ a: { b: 1 } }, { a: { b: 2 } })
// => { a: { b: false } }
```

## Related Types

### `DiffOptions`

Options for diff.

```ts
interface DiffOptions {
  depth?: number;
}
```

### `DiffResult`

Per-key diff result. Each entry tells what differs between the two
objects:
- `"onlyA"` \u2014 the key exists only on the first input.
- `"onlyB"` \u2014 the key exists only on the second input.
- `false`  \u2014 both inputs have the key but the values differ.
- nested `DiffResult` \u2014 plain-object values that differ deeper.

```ts
interface DiffResult {}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/object/diff.ts)
