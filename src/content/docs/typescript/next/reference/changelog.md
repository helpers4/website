---
title: "Changelog — Helpers by version"
description: "All helpers listed by the version in which they were introduced, from newest to oldest."
sidebar:
  label: "Changelog"
  order: 2
---

## *(coming in next release)*

| Function | Category | Description |
|----------|----------|-------------|
| [`argbToRgb`](../categories/color/argbtorgb/) | [color](../categories/color/) | Converts a 32-bit packed ARGB integer (as used by e.g. Chromium's `Local State` profile `background_color` field) into a CSS `rgb()` string. The alpha byte (top 8 bits) is read but discarded — the result is always opaque. |
| [`combineSortFns`](../categories/array/combinesortfns/) | [array](../categories/array/) | Chains multiple sort functions into a single comparator: the first function decides the order unless it reports a tie (`0`), in which case the next function is tried, and so on.  Lets you compose comparators of different kinds — e.g. a boolean-property comparator from createSortByBooleanFn followed by a string-property comparator from `createSortByStringFn` — which a single multi-key call cannot express, since that coerces every key to the same comparison type. |
| [`createSortByBooleanFn`](../categories/array/createsortbybooleanfn/) | [array](../categories/array/) | Creates a sort function for objects by a boolean property.  Values are coerced with `Boolean()` before comparing, so `null`, `undefined`, `0`, and `''` behave as `false`, and any other truthy value behaves as `true`. |
| [`hexToRgb`](../categories/color/hextorgb/) | [color](../categories/color/) | Parses a hex color string (`#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa` — the leading `#` is optional) into its RGB(A) channels. |
| [`hslToRgb`](../categories/color/hsltorgb/) | [color](../categories/color/) | Converts an HSL(A) color into RGB(A). |
| [`isCssColor`](../categories/guard/iscsscolor/) | [guard](../categories/guard/) | Checks whether a value is a syntactically-safe, plain CSS color: a hex color (`#rgb`, `#rgba`, `#rrggbb`, `#rrggbbaa`), a functional notation (`rgb()`, `rgba()`, `hsl()`, `hsla()`), or a single-word named color (`red`, `rebeccapurple`).  Intended to sanitize a color value before interpolating it into inline `style`/`cssText` — it does not implement the full CSS color grammar or validate named colors against the real keyword list, it only rejects characters (`{`, `}`, `;`, ``) or shapes that could smuggle extra CSS declarations into the surrounding rule. |
| [`rgbToHex`](../categories/color/rgbtohex/) | [color](../categories/color/) | Converts an RGB(A) color into a hex color string.  `r`/`g`/`b` are clamped to 0-255 and rounded to the nearest integer before formatting. The alpha channel is only appended (as `#rrggbbaa`) when it is below 1 — fully opaque colors format as the plain 6-digit `#rrggbb`. |
| [`rgbToHsl`](../categories/color/rgbtohsl/) | [color](../categories/color/) | Converts an RGB(A) color into HSL(A).  `h`/`s`/`l` are rounded to 1 decimal place to avoid floating-point noise. |
| [`settle`](../categories/promise/settle/) | [promise](../categories/promise/) | Runs an array of promises concurrently and partitions the outcomes instead of rejecting on the first failure, unlike `Promise.all`. Built on top of `Promise.allSettled`, but returns fulfilled values and rejection reasons already split apart so callers don't need to inspect `status` themselves. |

## v3.0.0

| Function | Category | Description |
|----------|----------|-------------|
| [`Brand`](../categories/type/brand/) | [type](../categories/type/) | Brands a base type `T` with a phantom tag `B` to create a nominal type.  Two `Brand<string, 'UserId'>` and `Brand<string, 'Email'>` are structurally identical strings at runtime, but TypeScript treats them as distinct types at the call site — preventing accidental mix-ups.  Use a const-assertion cast at the creation boundary: ```ts type UserId = Brand<string, 'UserId'>; const toUserId = (s: string): UserId => s as UserId; ``` |
| [`DeepGet`](../categories/type/deepget/) | [type](../categories/type/) | Resolves the value type at a given `Path` within `T`.  Returns `unknown` when any key in `Path` is not present in the corresponding level of `T`. An empty path resolves to `T` itself. A path segment that goes through an optional property keeps the result nullable (`V \| undefined`) instead of degrading to `unknown`. |
| [`DeepSet`](../categories/type/deepset/) | [type](../categories/type/) | Produces the type of `T` after replacing the value at `Path` with `V`.  When a key in `Path` is absent from the corresponding level of `T`, that level (and everything below it) is added as a new field instead of resolving to `never` — mirroring how `set()` creates intermediate objects at runtime. |
| [`KeysOfType`](../categories/type/keysoftype/) | [type](../categories/type/) | Extracts the keys of `T` whose values extend `V`.  Optional properties are matched by their non-nullable value type, so an optional `string` property still counts as a `string` key. |
| [`Nullable`](../categories/type/nullable/) | [type](../categories/type/) | Adds `null` to a type (`T \| null`).  Useful as a shorthand when explicit nullability should be expressed in function signatures or generic constraints. |
| [`Nullish`](../categories/type/nullish/) | [type](../categories/type/) | Adds `null` and `undefined` to a type (`T \| null \| undefined`).  Alias of Maybe. |
| [`OmitByValue`](../categories/type/omitbyvalue/) | [type](../categories/type/) | Constructs a type by omitting all entries of `T` whose values extend `V`.  Optional properties are matched by their non-nullable value type, so an optional `string` property is omitted the same as a required one. |
| [`OptionalKeys`](../categories/type/optionalkeys/) | [type](../categories/type/) | Extracts the optional keys of an object type `T`. |
| [`PickByValue`](../categories/type/pickbyvalue/) | [type](../categories/type/) | Constructs a type by picking all entries of `T` whose values extend `V`.  Optional properties are matched by their non-nullable value type, so an optional `string` property is picked the same as a required one. |
| [`Prettify`](../categories/type/prettify/) | [type](../categories/type/) | Flattens an intersection type into a single readable object type.  IDE tooltips for intersections like `A & B & C` often show the raw intersection instead of the resolved shape. Wrapping with `Prettify` forces TypeScript to expand and display the fully-resolved type.  Distributes over unions, so each member is prettified independently instead of collapsing to their shared keys. |
| [`RequiredKeys`](../categories/type/requiredkeys/) | [type](../categories/type/) | Extracts the required (non-optional) keys of an object type `T`. |
| [`UnionToIntersection`](../categories/type/uniontointersection/) | [type](../categories/type/) | Converts a union type to an intersection type: `A \| B \| C` → `A & B & C`.  Uses conditional-type distribution and the contravariant position of a function parameter to collapse the union into an intersection. |
| [`ValueOf`](../categories/type/valueof/) | [type](../categories/type/) | Produces a union of all value types of an object type `T`. |

---

Looking for older releases? See the [v2 changelog](/typescript/reference/changelog/).
