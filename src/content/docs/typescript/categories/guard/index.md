---
title: "Guard Helpers"
sidebar:
  label: "Guard"
  order: 0
---

Utility functions for working with guard operations.

## Functions

| Function | Description |
|----------|-------------|
| [`isArray`](./isarray/) | Checks if a value is an array\. |
| [`isArrayBuffer`](./isarraybuffer/) | Checks if a value is an ArrayBuffer instance\. |
| [`isArrayLike`](./isarraylike/) | Checks if a value is array\-like: has a non\-negative integer \`length\` property\. |
| [`isAsyncFunction`](./isasyncfunction/) | Checks if a value is an async function\. |
| [`isAsyncGenerator`](./isasyncgenerator/) | Checks if a value is an async generator object \(the result of calling an \`async function\*\`\)\. |
| [`isAsyncGeneratorFunction`](./isasyncgeneratorfunction/) | Checks if a value is an async generator function \(an \`async function\*\` declaration or expression\)\. |
| [`isAsyncIterable`](./isasynciterable/) | Checks if a value implements the async iterable protocol\. |
| [`isBigInt`](./isbigint/) | Checks if a value is a bigint\. |
| [`isBlob`](./isblob/) | Checks if a value is a Blob instance\. |
| [`isBoolean`](./isboolean/) | Checks if a value is a boolean\. |
| [`isBrowser`](./isbrowser/) | Checks whether the code is currently running in a browser\-like environment \(\`window\` and \`window\.document\` both defin… |
| [`isCssColor`](./iscsscolor/) | Checks whether a value is a syntactically\-safe, plain CSS color: a hex color \(\`\#rgb\`, \`\#rgba\`, \`\#rrggbb\`, \`\#rrggbbaa\`… |
| [`isDate`](./isdate/) | Checks if a value is a Date instance\. |
| [`isDefined`](./isdefined/) | Checks if a value is defined \(not undefined nor null\)\. |
| [`isError`](./iserror/) | Checks if a value is an Error instance\. |
| [`isFalsy`](./isfalsy/) | Checks if a value is falsy \(\`false\`, \`null\`, \`undefined\`, \`0\`, \`""\`, \`NaN\`\)\. |
| [`isFormData`](./isformdata/) | Checks if a value is a FormData instance\. |
| [`isFunction`](./isfunction/) | Checks if a value is a function\. |
| [`isGenerator`](./isgenerator/) | Checks if a value is a generator object \(the result of calling a \`function\*\`\)\. |
| [`isGeneratorFunction`](./isgeneratorfunction/) | Checks if a value is a generator function \(a \`function\*\` declaration or expression\)\. |
| [`isIterable`](./isiterable/) | Checks if a value is iterable \(has a \`Symbol\.iterator\` method\)\. |
| [`isJSON`](./isjson/) | Checks whether a value is a string containing valid, parseable JSON text\. |
| [`isJSONArray`](./isjsonarray/) | Checks whether a value is an array whose every element is a valid JSON value \(see isJSONValue\)\. |
| [`isJSONObject`](./isjsonobject/) | Checks whether a value is a plain object whose every own value is a valid JSON value \(see isJSONValue\)\. |
| [`isJSONValue`](./isjsonvalue/) | Checks whether a value is composed entirely of JSON\-representable types: \`string\`, finite \`number\`, \`boolean\`, \`null\`… |
| [`isLength`](./islength/) | Checks whether a value is a valid array\-like \`length\`: a non\-negative safe integer \(\`0 <= value <= Number\.MAX\_SAFE\_IN… |
| [`isMap`](./ismap/) | Checks if a value is a Map instance\. |
| [`isNode`](./isnode/) | Checks whether the code is currently running in a Node\.js\-like environment \(\`process\.versions\.node\` is defined — also… |
| [`isNull`](./isnull/) | Checks if a value is \`null\`\. |
| [`isNullish`](./isnullish/) | Checks if a value is null or undefined \(nullish\)\. |
| [`isNumber`](./isnumber/) | Checks if a value is a number\. |
| [`isPlainObject`](./isplainobject/) | Checks if a value is a plain object\. |
| [`isPrimitive`](./isprimitive/) | Checks if a value is a JavaScript primitive\. |
| [`isPromise`](./ispromise/) | Checks if a value is a Promise or a thenable\. |
| [`isPromiseLike`](./ispromiselike/) | Checks if a value is a thenable \(has a \`\.then\(\)\` method\)\. |
| [`isPropertyKey`](./ispropertykey/) | Checks if a value is a valid property key: \`string\`, \`number\`, or \`symbol\`\. |
| [`isRegExp`](./isregexp/) | Checks if a value is a RegExp instance\. |
| [`isSet`](./isset/) | Checks if a value is a Set instance\. |
| [`isSpecialObject`](./isspecialobject/) | Determines if a value is a special object that should not have its properties compared deeply\. |
| [`isString`](./isstring/) | Checks if a value is a string\. |
| [`isSymbol`](./issymbol/) | Checks if a value is a symbol\. |
| [`isTemporalDuration`](./istemporalduration/) | Checks if a value is a \`Temporal\.Duration\`\. |
| [`isTemporalInstant`](./istemporalinstant/) | Checks if a value is a \`Temporal\.Instant\`\. |
| [`isTemporalPlainDate`](./istemporalplaindate/) | Checks if a value is a \`Temporal\.PlainDate\`\. |
| [`isTemporalPlainDateTime`](./istemporalplaindatetime/) | Checks if a value is a \`Temporal\.PlainDateTime\`\. |
| [`isTemporalPlainTime`](./istemporalplaintime/) | Checks if a value is a \`Temporal\.PlainTime\`\. |
| [`isTemporalZonedDateTime`](./istemporalzoneddatetime/) | Checks if a value is a \`Temporal\.ZonedDateTime\`\. |
| [`isTimestamp`](./istimestamp/) | Checks if a value is a valid timestamp \(milliseconds or Unix seconds\)\. |
| [`isTruthy`](./istruthy/) | Checks if a value is truthy \(not \`false\`, \`null\`, \`undefined\`, \`0\`, \`""\`, or \`NaN\`\)\. |
| [`isUndefined`](./isundefined/) | Checks if a value is \`undefined\`\. |
| [`isValidRegex`](./isvalidregex/) | Checks if a string is a valid regex pattern\. |
| [`isWeakMap`](./isweakmap/) | Checks if a value is a WeakMap instance\. |
| [`isWeakSet`](./isweakset/) | Checks if a value is a WeakSet instance\. |

