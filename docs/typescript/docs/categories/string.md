---
sidebar_position: 8
---

# String

String manipulation helpers for case conversion, truncation and more.

## Import

```typescript
import { capitalize, kebabCase, camelCase, reverse, truncate } from '@helpers4/typescript';
```

## Available Functions

| Function | Description |
|----------|-------------|
| `capitalize` | Capitalize the first letter |
| `kebabCase` | Convert to kebab-case |
| `camelCase` | Convert to camelCase |
| `reverse` | Reverse a string |
| `truncate` | Truncate with ellipsis |

## Examples

### camelCase

```typescript
import { camelCase } from '@helpers4/typescript';

camelCase('hello-world'); // 'helloWorld'
camelCase('Hello World'); // 'helloWorld'
```

### truncate

```typescript
import { truncate } from '@helpers4/typescript';

truncate('Hello World', 8); // 'Hello...'
```

---

For full source code, visit [GitHub](https://github.com/helpers4/typescript/tree/main/helpers/string).
