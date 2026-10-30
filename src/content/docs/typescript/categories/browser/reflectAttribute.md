---
title: "reflectAttribute"
sidebar:
  label: "reflectAttribute"
description: "Defines a property on `element` that is backed by an HTML attribute — what a custom element needs for `<my-card heading…"
version: "3.1.10"
---

Defines a property on `element` that is backed by an HTML attribute — what a custom element
needs for `<my-card heading="…" count="3" selected>`, in one line. Reading parses the attribute
by `type`; writing stores it (a boolean toggles the attribute, `null` or `undefined` removes it).
The attribute stays the single source of truth, so `setAttribute` and the property never disagree.

It defines an own property on the instance, so call it once per element (in a constructor or
`connectedCallback`). Calling it again for the same property replaces the previous definition.

> Available since v3.1.8

## Import

```ts
import { reflectAttribute } from '@helpers4/browser';
// or, from the all-in-one package (same code, one install):
import { reflectAttribute } from 'helpers4/browser';
```

## Signature


```ts
reflectAttribute(element: Element, property: string, options: ReflectAttributeOptions): function
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | `Element` | The element that gets the property |
| `property` | `string` | The property name, e\.g\. \`'heading'\` |
| `options` | `ReflectAttributeOptions` | Type, attribute name and default — see ReflectAttributeOptions |

## Returns

`function` — A function that removes the property again

## Examples

### A number property backed by an attribute

Writing the property sets the attribute, and setAttribute is seen by the property.

```ts
reflectAttribute(card, 'count', { type: 'number' });
card.count = 3;
card.getAttribute('count') // => '3'
```

### A boolean property is the presence of the attribute

Like hidden or disabled: true adds the attribute, false removes it.

```ts
reflectAttribute(card, 'selected', { type: 'boolean' });
card.selected = true;
card.hasAttribute('selected') // => true
```

## Related Types

### `ReflectAttributeOptions`

Options for reflectAttribute.

```ts
interface ReflectAttributeOptions {
  attribute?: string;
  defaultValue?: string | number;
  type?: "string" | "number" | "boolean";
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/browser/reflectAttribute.ts)
