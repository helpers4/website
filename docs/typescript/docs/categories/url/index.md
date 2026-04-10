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
| [`cleanPath`](cleanPath) | Clean an URL by removing duplicate slashes. The protocol part of the URL is not modified. |
| [`extractPureURI`](extractPureURI) | Extracts the pure URI from a URL by removing query parameters and fragments. |
| [`onlyPath`](onlyPath) | Extract only the path from an URI with optional query and fragments.  For example, all these parameters will return `/path`:  - `/path`  - `/path?query=thing`  - `/path#fragment`  - `/path?query=thing#fragment` |
| [`relativeURLToAbsolute`](relativeURLToAbsolute) | Converts a relative URL to an absolute URL using the current document base URI. |
| [`withLeadingSlash`](withLeadingSlash) | Adds a leading slash `/` to the given URL if it is not already present.  This function is useful for ensuring that URLs are properly formatted with a leading slash, which is often required in web development for consistency and to avoid issues with relative paths. |
| [`withoutLeadingSlash`](withoutLeadingSlash) | Removes the leading slash `/` from the given URL if it is present.  This function is useful for ensuring that URLs are properly formatted without a leading slash, which is often required in web development for consistency and to avoid issues with relative paths. |
| [`withoutTrailingSlash`](withoutTrailingSlash) | Removes the trailing slash `/` from the given URL if it is present.  This function is useful for ensuring that URLs are properly formatted without a trailing slash, which is often required in web development for consistency and to avoid issues with relative paths. |
| [`withTrailingSlash`](withTrailingSlash) | Adds a trailing slash `/` to the given URL if it is not already present.  This function is useful for ensuring that URLs are properly formatted with a trailing slash, which is often required in web development for consistency and to avoid issues with relative paths. |

