---
sidebar_label: Philosophy
sidebar_position: 1
title: Philosophy
description: The guiding principles behind helpers4 DevContainer Features — why we build the way we do.
---

# Philosophy

helpers4 DevContainer Features are built to solve a specific frustration: development environments that work on one machine and break on another. This page explains the principles that guide every feature we ship.

## Reproducibility above all

A DevContainer feature must produce the same result on a local Linux machine, on macOS with Docker Desktop, on a GitHub Codespace, and in CI. If it works only in one context, it's broken.

We test on multiple base images and architectures (x86_64, aarch64). Shell scripts use strict mode (`set -e`) and verify the installation before exiting.

## One feature, one responsibility

Each feature installs and configures exactly one tool or capability. `git-absorb` installs git-absorb. `shell-history-per-project` manages shell history. They don't overlap, and they don't make assumptions about each other unless an explicit dependency is declared.

This makes features composable: you pick what you need and combine them freely in your `devcontainer.json`.

## No magic, readable scripts

Every `install.sh` is plain Bash. No frameworks, no abstraction layers. Someone unfamiliar with the codebase should be able to read an install script and understand exactly what it does in under two minutes.

When something goes wrong in a DevContainer build, the last thing you want is opaque tooling. Our scripts print what they're doing, fail loudly, and clean up after themselves.

## Architecture support is not optional

x86_64 is not the only architecture that exists. Every feature detects the host architecture and downloads the correct binary. If a tool doesn't provide an arm64 build, we either build it from source or we note the limitation explicitly — we don't silently install the wrong binary and let it fail at runtime.

## Published openly, usable anywhere

Features are published to `ghcr.io/helpers4/devcontainer/` and follow the [Dev Container Feature](https://containers.dev/implementors/features/) specification. They work with VS Code, GitHub Codespaces, IntelliJ, and any other OCI-compatible DevContainer host.

All code is licensed under LGPL-3.0. You can use these features in commercial projects, fork them, or adapt them — as long as improvements to the features themselves stay open.
