---
title: "isObservable"
sidebar:
  label: "isObservable"
---

Checks if a value is an RxJS Observable or any compatible observable.

Uses duck-typing: returns `true` for any object with both `.subscribe()` and
`.pipe()` methods, covering `Observable`, `Subject`, `BehaviorSubject`,
`ReplaySubject`, and any RxJS-compatible observable implementation.

> Available since v2.0.3

## Import

```ts
import { isObservable } from '@helpers4/observable';
```

## Signature


```ts
isObservable(value: unknown): value is Observable<unknown>
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `unknown` | The value to check |

## Returns

`value is Observable<unknown>` — `true` if value is observable-like

## Examples

### Detect an RxJS Observable or Subject

Returns true for Observable, Subject, BehaviorSubject, and any duck-typed observable.

```ts
import { Observable, Subject } from 'rxjs';
isObservable(new Observable())  // => true
isObservable(new Subject())     // => true
isObservable(Promise.resolve()) // => false
isObservable({})                // => false
```

### Accept either an Observable or a plain value

Use as a guard to normalize inputs that may be Observables or raw values.

```ts
import { Observable, of } from 'rxjs';
function toObservable<T>(value: T | Observable<T>): Observable<T> {
  return isObservable(value) ? value : of(value);
}
```

## Source

[View source on GitHub](https://github.com/helpers4/typescript/blob/main/helpers/observable/isObservable.ts)
