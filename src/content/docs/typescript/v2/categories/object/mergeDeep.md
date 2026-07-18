---
title: "mergeDeep"
sidebar:
  label: "mergeDeep"
---

Merges two or more objects deeply, returning a **new** object without mutating any input.

Sources are applied left to right. For each key:
- If both sides are plain objects → merged recursively into a new object.
- Otherwise → **later source wins** (the earlier value is overwritten).
- `undefined` in a source **never overwrites** an existing value.
- `null` in a source **does overwrite** and prevents a later source from
  deep-merging into that key: `mergeDeep({ a: { x: 1 } }, { a: null }, { a: { y: 2 } })`
  → `{ a: { y: 2 } }` — `x: 1` is permanently lost.
- Arrays, class instances, and all non-plain-object values are **replaced**, not merged.

Own enumerable string and symbol keys of each source are processed at the top level;
inherited and non-enumerable properties are skipped. Prototype-polluting keys
(`__proto__`, `constructor`, `prototype`) are silently ignored.
**Note:** symbol keys inside nested plain-object values are not preserved — they are
lost when those values are deep-cloned. Only top-level symbol keys survive.

**TypeScript return type — intersection semantics**

The return type is `A & B & C …` (intersection of all source types). This is accurate
when keys are disjoint or share the same type:
```ts
mergeDeep({ a: 1 }, { b: 'x' })           // { a: number } & { b: string }  ✓
mergeDeep({ a: { b: 1 } }, { a: { c: 2 } }) // { a: { b: number } & { c: number } }  ✓
```
When the same key carries **incompatible types** across sources, the intersection
resolves to `never` for that key — TypeScript surfaces the conflict rather than
silently picking a type:
```ts
mergeDeep({ a: 1 }, { a: 'x' })  // { a: never }  ← type conflict detected
```
At runtime the later source always wins (`'x'`), but the `never` type signals that
the caller should align their source types. If intentional, cast the result.

> Available since v1.9.0

## Import

```ts
import { mergeDeep } from '@helpers4/object';
```

## Signature


```ts
mergeDeep<T extends [object, rest]>(sources: [rest]): MergeResult<T>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `sources` | `[rest]` | Two or more objects to merge (none are mutated) |

## Returns

`MergeResult<T>` — A new object that is the deep merge of all sources

## Examples

### Merge two objects deeply

Returns a new object — neither input is mutated.

```ts
mergeDeep({ a: 1, b: { c: 2 } }, { b: { d: 3 }, e: 4 })
// => { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/v2/helpers/object/mergeDeep.ts)
