---
title: "Browser Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with browser operations.

## Functions

| Function | Description |
|----------|-------------|
| [`decodeImage`](./decodeimage/) | Loads an image and waits until it is decoded, so it can be painted without a flash or a decoding pause \(e\.g\. |
| [`loadFont`](./loadfont/) | Loads a font and registers it in \`document\.fonts\`, so CSS and canvas can use \`family\` right away\. |
| [`matchesMedia`](./matchesmedia/) | Whether the document currently matches a CSS media query\. |
| [`observeIntersection`](./observeintersection/) | Calls \`callback\` each time \`element\` enters or leaves the viewport \(or \`options\.root\`\), with an \`IntersectionObserver\`… |
| [`observeResize`](./observeresize/) | Calls \`callback\` each time the size of \`element\` changes, with a \`ResizeObserver\` dedicated to it\. |
| [`onPointerIntent`](./onpointerintent/) | Tells a tap from a drag, and hover from touch, on one element: the pointer\-event logic every draggable or clickable wid… |
| [`prefersReducedMotion`](./prefersreducedmotion/) | Whether the user asked the system to reduce motion \(\`prefers\-reduced\-motion: reduce\`\)\. |
| [`preloadImages`](./preloadimages/) | Loads and decodes several images with decodeImage, a few at a time, with \`mapSettled\` from \`helpers4/array\`\. |
| [`reflectAttribute`](./reflectattribute/) | Defines a property on \`element\` that is backed by an HTML attribute — what a custom element needs for \`<my\-card heading… |
| [`watchMedia`](./watchmedia/) | Calls \`listener\` each time a CSS media query starts or stops matching\. |
| [`whenIdle`](./whenidle/) | Runs \`callback\` when the browser is idle, with \`requestIdleCallback\`, for work that can wait \(prefetching, analytics, w… |

