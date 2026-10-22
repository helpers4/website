---
title: "Animation Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with animation operations.

## Functions

| Function | Description |
|----------|-------------|
| [`cubicBezier`](./cubicbezier/) | Builds the easing function of CSS \`cubic\-bezier\(x1, y1, x2, y2\)\`: given the progress of time \(\`0\` to \`1\`\), it returns t… |
| [`frameLoop`](./frameloop/) | Calls \`onFrame\` once per animation frame with the time elapsed since the start, until it returns \`false\` or the loop is… |
| [`interpolate`](./interpolate/) | Blends two values of the same shape: every number goes from its value in \`from\` \(\`t = 0\`\) to its value in \`to\` \(\`t = 1\`… |
| [`parseEasing`](./parseeasing/) | Reads a CSS easing into an easing function, to play in JavaScript the timing a stylesheet or a design tool export descr… |
| [`spring`](./spring/) | Simulates a damped spring going from \`0\` to \`1\`, the curve behind "spring" transitions of design tools, and computes ho… |
| [`steps`](./steps/) | Builds the easing function of CSS \`steps\(count, position\)\`: progress moves by jumps instead of continuously, for frame\-… |
| [`toCssLinear`](./tocsslinear/) | Samples an easing function into a CSS \`linear\(\)\` easing, so any curve \(a spring, a custom bounce\) can be played by CSS… |
| [`tween`](./tween/) | Animates a value from \`from\` to \`to\` over \`durationMs\`, calling \`onUpdate\` with the blended value at each frame, for wh… |

