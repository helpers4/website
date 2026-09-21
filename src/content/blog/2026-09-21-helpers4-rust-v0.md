---
title: "helpers4 Rust v0 — A General-Purpose Library, Starting From Scratch"
date: 2026-09-21
author: Bérenger (baxyz)
tags: [rust, release, helpers4]
excerpt: "helpers4 now has a Rust crate. It starts at version 0 on purpose: the quality is already there, but the third-party security audits are not, and a library whose goal is to be trusted in critical applications has to earn its 1.0. Here is what exists, what does not yet, and why you should wait for v1 before using it where it really matters."
---

helpers4 has a Rust crate. It is on [crates.io](https://crates.io/crates/helpers4), it is documented [here](/rust/), and it is at **version 0**. This post explains what that means, what is already in it, and — the part I care about most — **what you should not use it for yet**.

---

## The gap

In JavaScript, nobody writes their own `chunk` or `groupBy` anymore: there is lodash, es-toolkit, radashi — broad, consistent toolboxes you reach for before writing a helper yourself. Rust has a superb standard library and excellent focused crates (`itertools`, `heck`, and many more), but as far as I can tell **no general-purpose helper library in that spirit**: one place, one style, one set of guarantees for the everyday utility code every project ends up rewriting.

That is the gap helpers4 is going to try to fill. The goal is simple to state: **bring to Rust what helpers4 brings to TypeScript** — small helpers that each do one thing, typed, exhaustively tested, and consistent from one module to the next.

---

## Why version 0, and not 1

The TypeScript library has [more than ten years of practice behind it](/blog/2026-05-23-helpers4-typescript-v2): helpers recoded across real projects, then a first public version, a v2, a v3, each one rearranging things after seeing how people actually used them. That is where its structure comes from.

The Rust crate starts from scratch. It has the same ideas and none of that history yet: how the helpers are grouped, which of them belong together, what the right shape of each API is in Rust — all of that still has to be learned by using it. A `1.0` is a promise that this settled, so it would be dishonest to make it now. Version 0 says it plainly: **the module layout may still change, and so may the Cargo features that map to it.**

---

## What is in it today

One crate, `helpers4`, with one module per category, each behind a Cargo feature of the same name. Today there are 8 modules and 39 public items:

| Module | What it covers |
| --- | --- |
| `string` | case conversion, slugs, truncation, dedent, HTML escaping |
| `array` | unique, difference, intersection, grouping, counting, cartesian product |
| `env` | reading and editing `.env` files as text |
| `hex` | encoding and decoding with typed errors |
| `net` | is this IP address public (an SSRF guard), is this a valid hostname |
| `cache` | maps and sets whose entries expire, with the clock passed in |
| `http` | extracting a bearer token |
| `time` | the system clock as unix time, without a silent `0` |

```rust
use helpers4::hex;
use helpers4::net::{is_public_ip, is_valid_hostname};
use helpers4::string::slugify;

assert_eq!(slugify("Hello, World!"), "hello-world");
assert_eq!(hex::encode(&[0xde, 0xad, 0xbe, 0xef]), "deadbeef");
assert!(!is_public_ip("169.254.169.254".parse().unwrap())); // the cloud metadata address
assert!(is_valid_hostname("example.com").is_ok());
```

```rust
use helpers4::cache::ExpiringMap;

// A replay check: has this token id been seen while it is still valid?
let mut seen: ExpiringMap<&str, (), u64> = ExpiringMap::new();
assert!(seen.insert_if_absent("jti-1", (), 1_060, 1_000));   // first use: accepted
assert!(!seen.insert_if_absent("jti-1", (), 1_060, 1_010));  // same id again: a replay
```

Note the last one: nothing reads the clock behind your back. The current time is an argument, so the code is trivial to test and there is no test that has to sleep.

---

## How it is built

A few rules that shape everything, and that the [philosophy page](/rust/reference/philosophy/) spells out:

- **One crate, one feature per module.** Take only the modules you use: `cargo add helpers4 --no-default-features --features string,hex`.
- **Zero third-party dependencies by default.** A module that needs one gets its own feature, and the dependency is optional.
- **The standard library is not competition.** If `std` already has it, this crate does not.
- **Explicit inputs.** The clock and the process environment are parameters, never ambient.
- **Typed errors instead of panics.** A helper that can fail returns a `Result` with an error you can match on. `unsafe` is forbidden, and `unwrap`, `expect` and `panic!` are denied outside tests.
- **The same name can exist in several modules**, and you always import through the module path.

---

## The quality that is already there

This is not a prototype. Every helper ships with:

- **100% coverage** of lines, functions and regions, enforced in CI;
- **unit tests, property-based tests and doc tests** — every example in the documentation is compiled and run;
- **mutation testing**: if a test can be deleted without anything noticing, it is not a good test;
- **benchmarks**, compared with the base branch on every pull request;
- **strict lints and a dependency and license audit** on every change;
- **a CI matrix** across Linux, macOS and Windows and across stable, beta and the minimum supported Rust version, plus a check that everything builds for WebAssembly;
- **releases published from CI** with short-lived credentials and a build provenance attestation.

The helpers that touch security get more. The address check of `net::is_public_ip`, for instance, was written from the IANA special-purpose registries rather than from memory, checked against them over more than a hundred million addresses, and reviewed twice — and those reviews found a real weakness in a related hostname check before it was released.

That is internal work: my own tests, my own audits, my own reviews. It is thorough. It is also not independent.

---

## What is not there yet

**Third-party security audits.** None has been done. Around them, the external safety nets that a library like this should have are still to be put in place: the [OpenSSF Scorecard](https://securityscorecards.dev/) analysis is being set up and has not published anything yet, and fuzzing, static analysis, the OpenSSF Best Practices badge and an independent audit are on the list, not in the repository.

I would rather say so than let a badge suggest otherwise.

---

## Please wait for v1 for anything critical

> **Do not use this crate in production for critical or sensitive applications while it is at version 0.**

I know how that sounds, because it is the opposite of the point. The whole purpose of helpers4 in Rust is to be a set of helpers you can rely on in exactly those applications — the ones where a wrong answer from an address check or a token handler has a real cost. But that promise has to be backed by more than my own review, and until the independent audits exist, it is not yet backed. **For critical and sensitive applications, wait for v1.**

What version 0 *is* good for: trying it on prototypes and internal tools, on services where a bug is a nuisance rather than an incident, and above all **telling me what is wrong with it** — an API that feels awkward, a helper that is missing, a module that should be split differently. That feedback is what will decide the layout that v1 freezes.

If you do use it, pin the exact version (`cargo add helpers4` does), and read the [changelog](/rust/reference/changelog/) before upgrading: while the crate is at `0.x`, modules and features may move.

---

## What comes next

More modules (random values and identifiers, validation, iterators, maps and sets, numbers, durations and dates, and more), richer documentation for every helper, and the safety nets above, in roughly that order of visibility but with the audits as the thing that decides when v1 happens — not a date.

- Try it: `cargo add helpers4` — [Getting started](/rust/getting-started/), [browse the modules](/rust/modules/)
- Report a problem or a missing helper: [github.com/helpers4/rust/issues](https://github.com/helpers4/rust/issues)
- Contribute: [Contributing](/rust/reference/contributing/)

Thank you for reading — and for waiting for v1 where it matters.
