---
title: "Geometry Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with geometry operations.

## Functions

| Function | Description |
|----------|-------------|
| [`applyToPoint`](./applytopoint/) | Transforms a point by a matrix\. |
| [`applyToRect`](./applytorect/) | Transforms a rectangle by a matrix and returns its bounding box: the smallest axis\-aligned rectangle that contains it\. |
| [`contains`](./contains/) | Whether a point or a rectangle is inside a rectangle\. |
| [`ellipsePath`](./ellipsepath/) | The path of the ellipse that fills a box, as SVG path data: two half\-turn arcs\. |
| [`fit`](./fit/) | Places content in a box like CSS \`object\-fit\` and \`object\-position\`, e\.g\. |
| [`fitContain`](./fitcontain/) | Places content in a box, as large as possible while staying entirely inside the box \(CSS \`object\-fit: contain\`\)\. |
| [`fitCover`](./fitcover/) | Places content in a box, as small as possible while covering the whole box \(CSS \`object\-fit: cover\`\)\. |
| [`fitFill`](./fitfill/) | Places content in a box, stretched to the box on each axis, without keeping its proportions \(CSS \`object\-fit: fill\`\)\. |
| [`fitNone`](./fitnone/) | Places content in a box, at its own size, only positioned \(CSS \`object\-fit: none\`\)\. |
| [`fitScaleDown`](./fitscaledown/) | Places content in a box, like fitContain, but never enlarged \(CSS \`object\-fit: scale\-down\`\)\. |
| [`formatPath`](./formatpath/) | Writes path commands back as SVG path data: letters and numbers separated by single spaces, numbers rounded to \`precisi… |
| [`identity`](./identity/) | The matrix that changes nothing\. |
| [`intersection`](./intersection/) | The area two rectangles have in common\. |
| [`intersects`](./intersects/) | Whether two rectangles have an area in common, exactly when intersection returns a rectangle: rectangles that only touc… |
| [`invert`](./invert/) | The matrix that undoes \`m\`, e\.g\. |
| [`matrixToCss`](./matrixtocss/) | Writes a matrix as a CSS \`transform\` or SVG \`transform\` value\. |
| [`multiply`](./multiply/) | Multiplies matrices, in the mathematical order: the last one applies first\. |
| [`parsePath`](./parsepath/) | Parses SVG path data \(the \`d\` attribute\) into commands, as written: the letters keep their case \(absolute or relative\),… |
| [`rectToRect`](./recttorect/) | The translation and scale that put one rectangle exactly on another, for animating or fitting between two boxes\. |
| [`rotate`](./rotate/) | A matrix that rotates points around the origin\. |
| [`roundedRectPath`](./roundedrectpath/) | The path of a rectangle with a radius per corner, as SVG path data\. |
| [`scale`](./scale/) | A matrix that scales points from the origin\. |
| [`simplifyPolyline`](./simplifypolyline/) | Removes the points of a polyline that change its shape by less than \`tolerance\`, with the Ramer–Douglas–Peucker algorit… |
| [`transformPath`](./transformpath/) | Transforms SVG path data by a matrix\. |
| [`translate`](./translate/) | A matrix that moves points by \`\(tx, ty\)\`\. |
| [`union`](./union/) | The smallest rectangle that contains all the given rectangles, e\.g\. |

