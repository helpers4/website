---
sidebar_position: 2
---

# Date

Date operations for formatting, comparing and manipulating dates.

## Import

```typescript
import { compare, format, add, subtract } from '@helpers4/typescript';
```

## Available Functions

| Function | Description |
|----------|-------------|
| `compare` | Compare two dates |
| `format` | Format a date to a string |
| `add` | Add time to a date |
| `subtract` | Subtract time from a date |
| `startOfDay` | Get the start of the day |
| `endOfDay` | Get the end of the day |

## Examples

### format

```typescript
import { format } from '@helpers4/typescript';

format(new Date(2024, 0, 1), 'YYYY-MM-DD');
// '2024-01-01'
```

---

For full source code, visit [GitHub](https://github.com/helpers4/typescript/tree/main/helpers/date).
