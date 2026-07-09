---
title: "Type Helpers"
sidebar:
  label: "Type"
  order: 0
---

Utility functions for working with type operations.

## Functions

| Function | Description |
|----------|-------------|
| [`Brand`](./brand/) | Brands a base type `T` with a phantom tag `B` to create a nominal type. |
| [`DeepGet`](./deepget/) | Resolves the value type at a given `Path` within `T`. |
| [`DeepPartial`](./deeppartial/) | Recursively makes all properties of T optional, including nested objects and array elements. |
| [`DeepSet`](./deepset/) | Produces the type of `T` after replacing the value at `Path` with `V`. |
| [`DeepWritable`](./deepwritable/) | Recursively removes `readonly` from all properties of T, including nested objects, array elements, and tuple positions. |
| `isDirectInstanceOf` | <span class="badge badge--secondary">native JS</span> `value.constructor === Foo` *(ES1)* |
| `isFinite / isFiniteNumber` | <span class="badge badge--secondary">native JS</span> `Number.isFinite(value)` *(ES2015)* |
| `isHtmlElement / isUrlInstance / isUrlSearchParams` | <span class="badge badge--secondary">native JS</span> `value instanceof HTMLElement / URL / URLSearchParams` *(Web API)* |
| `isInfinite` | <span class="badge badge--secondary">native JS</span> `value === Infinity \|\| value === -Infinity  /  !Number.isFinite(value) && !Number.isNaN(value)` *(ES2015)* |
| `isInteger` | <span class="badge badge--secondary">native JS</span> `Number.isInteger(value)` *(ES2015)* |
| `isNaN` | <span class="badge badge--secondary">native JS</span> `Number.isNaN(value)` *(ES2015)* |
| `isSafeInteger` | <span class="badge badge--secondary">native JS</span> `Number.isSafeInteger(value)` *(ES2015)* |
| `isSet (Set data structure)` | <span class="badge badge--secondary">native JS</span> `value instanceof Set` *(ES2015)* |
| `isWeakMap / isWeakSet / isWeakRef` | <span class="badge badge--secondary">native JS</span> `value instanceof WeakMap / WeakSet / WeakRef` *(ES2015 / ES2021)* |
| [`KeysOfType`](./keysoftype/) | Extracts the keys of `T` whose values extend `V`. |
| [`Maybe`](./maybe/) | Type for values that can be T, undefined, or null. |
| [`Nullable`](./nullable/) | Adds `null` to a type (`T \| null`). |
| [`Nullish`](./nullish/) | Adds `null` and `undefined` to a type (`T \| null \| undefined`). |
| [`OmitByValue`](./omitbyvalue/) | Constructs a type by omitting all entries of `T` whose values extend `V`. |
| [`OptionalKeys`](./optionalkeys/) | Extracts the optional keys of an object type `T`. |
| [`PickByValue`](./pickbyvalue/) | Constructs a type by picking all entries of `T` whose values extend `V`. |
| [`Prettify`](./prettify/) | Flattens an intersection type into a single readable object type. |
| [`RequiredKeys`](./requiredkeys/) | Extracts the required (non-optional) keys of an object type `T`. |
| `TypedArrays (isInt8Array, isFloat32Array, ...)` | <span class="badge badge--secondary">native JS</span> `value instanceof Int8Array / Float32Array / ...` *(ES2015)* |
| [`UnionToIntersection`](./uniontointersection/) | Converts a union type to an intersection type: `A \| B \| C` → `A & B & C`. |
| [`ValueOf`](./valueof/) | Produces a union of all value types of an object type `T`. |

