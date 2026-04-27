---
sidebar_label: "Url"
sidebar_position: 0
title: "Url Helpers"
---

# Url Helpers

Utility functions for working with url operations.

## Functions

| Function | Description |
|----------|-------------|
| [`cleanPath`](cleanPath) | Clean an URL by removing duplicate slashes. |
| [`extractPureURI`](extractPureURI) | Extracts the pure URI from a URL by removing query parameters and fragments. |
| [`onlyPath`](onlyPath) | Extract only the path from an URI with optional query and fragments. |
| [`parsePackageRepository`](parsePackageRepository) | Parse the `repository` field from `package.json` into a structured object. |
| [`relativeURLToAbsolute`](relativeURLToAbsolute) | Converts a relative URL to an absolute URL using the current document base URI. |
| [`withLeadingSlash`](withLeadingSlash) | Adds a leading slash `/` to the given URL if it is not already present. |
| [`withoutLeadingSlash`](withoutLeadingSlash) | Removes the leading slash `/` from the given URL if it is present. |
| [`withoutTrailingSlash`](withoutTrailingSlash) | Removes the trailing slash `/` from the given URL if it is present. |
| [`withTrailingSlash`](withTrailingSlash) | Adds a trailing slash `/` to the given URL if it is not already present. |

