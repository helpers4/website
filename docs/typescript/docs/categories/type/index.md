---
sidebar_label: "Type"
sidebar_position: 0
title: "Type Helpers"
---

# Type Helpers

Utility functions for working with type operations.

## Functions

| Function | Description |
|----------|-------------|
| [`isArray`](isArray) | Checks if a value is an array |
| [`isBoolean`](isBoolean) | Checks if a value is a boolean |
| [`isDate`](isDate) | Checks if a value is a Date |
| [`isEmpty`](isEmpty) | Checks if a value is empty.  Supported types: - `null` / `undefined` → empty - `string` → length === 0 - `array` → length === 0 - `Map` / `Set` → size === 0 - plain object → no own enumerable properties |
| [`isFunction`](isFunction) | Checks if a value is a function |
| [`isNumber`](isNumber) | Checks if a value is a number |
| [`isObject`](isObject) | Checks if a value is a plain object |
| [`isSet`](isSet) | Checks if a value is set (not undefined nor null) |
| [`isSpecialObject`](isSpecialObject) | Determines if a value is a special object that should not have its properties compared deeply. Special objects include: Date, Function, Promise, Observable, RegExp, Error, Map, Set, WeakMap, WeakSet, etc. |
| [`isString`](isString) | Checks if a value is a string |
| [`isValidRegex`](isValidRegex) | Checks if a string is a valid regex |
| [`Maybe`](Maybe) | Type for values that can be T, undefined, or null |

