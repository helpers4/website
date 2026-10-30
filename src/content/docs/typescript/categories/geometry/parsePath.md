---
title: "parsePath"
sidebar:
  label: "parsePath"
description: "Parses SVG path data (the `d` attribute) into commands, as written: the letters keep their case (absolute or relative),…"
version: "3.1.10"
---

Parses SVG path data (the `d` attribute) into commands, as written: the letters keep their case
(absolute or relative), `H`/`V`/`S`/`T`/`A` stay what they are, and a command repeated without
its letter (`L 1 2 3 4`) becomes one command per set of numbers (`M` repeats as `L`, `m` as `l`).

It follows the SVG grammar: numbers may be glued (`1-2`, `.5.5`, `1e-3`), separators are
optional, and the two arc flags may be written without any separator (`a1 1 0 011 1`).

> Available since v3.1.10

## Import

```ts
import { parsePath } from '@helpers4/geometry';
// or, from the all-in-one package (same code, one install):
import { parsePath } from 'helpers4/geometry';
```

## Signature


```ts
parsePath(d: string): PathCommand[]
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `d` | `string` | The path data |

## Returns

`PathCommand[]` — The commands, in order. Empty for an empty or blank string

## Examples

### Read path data

Letters keep their case; a repeated command becomes one command per set of numbers.

```ts
parsePath('M0 0h10v10z').map((c) => c.type) // => ['M', 'h', 'v', 'z']
```

## Related Types

### `PathCommand`

One command of SVG path data: its letter (uppercase is absolute, lowercase relative to the
current point) and its numbers, as written in the `d` attribute.

| Letter | Command | Numbers |
| --- | --- | --- |
| `M` `L` `T` | move, line, smooth quadratic | `x y` |
| `H` `V` | horizontal, vertical line | `x` or `y` |
| `C` | cubic Bézier | `x1 y1 x2 y2 x y` |
| `S` `Q` | smooth cubic, quadratic | `x2 y2 x y` or `x1 y1 x y` |
| `A` | elliptical arc | `rx ry rotation large-arc sweep x y` |
| `Z` | close the subpath | none |

```ts
interface PathCommand {
  type: string;
  values: number[];
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/geometry/parsePath.ts)
