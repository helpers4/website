---
sidebar_position: 4
---

# Number

Number helpers for clamping, rounding and range operations.

## Import

```typescript
import { clamp, random, roundTo, between } from '@helpers4/typescript';
```

## Available Functions

| Function | Description |
|----------|-------------|
| `clamp` | Restrict a number to a range |
| `random` | Generate a random number in a range |
| `roundTo` | Round to a specified number of decimals |
| `between` | Check if a number is within a range |
| `isInteger` | Check if a value is an integer |

## Examples

### clamp

```typescript
import { clamp } from '@helpers4/typescript';

clamp(15, 0, 10); // 10
clamp(-5, 0, 10); // 0
```

---

For full source code, visit [GitHub](https://github.com/helpers4/typescript/tree/main/helpers/number).
