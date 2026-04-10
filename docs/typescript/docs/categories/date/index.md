---
sidebar_label: "Date"
sidebar_position: 0
title: "Date Helpers"
---

# Date Helpers

Utility functions for working with date operations.

## Functions

| Function | Description |
|----------|-------------|
| [`compare`](compare) | Comparison of two dates. |
| [`DateCompareOptions`](DateCompareOptions) | Options for date comparison |
| [`dateToISOString`](dateToISOString) | Formats a date to ISO string or returns null |
| [`daysDifference`](daysDifference) | Gets the difference in days between two dates |
| [`isSameDay`](isSameDay) | Checks if two dates are the same day |
| [`isTimestampInSeconds`](isTimestampInSeconds) | Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style) |
| [`normalizeTimestamp`](normalizeTimestamp) | Converts a timestamp to JavaScript milliseconds format |
| [`safeDate`](safeDate) | Safely creates a Date object from various input types |
| [`toISO8601`](toISO8601) | Converts a date to ISO 8601 format Format: YYYY-MM-DDTHH:mm:ss.sssZ |
| [`toRFC2822`](toRFC2822) | Converts a date to RFC 2822 format Format: Day, DD Mon YYYY HH:mm:ss +0000 Used in email headers (Date field) and HTTP headers |
| [`toRFC3339`](toRFC3339) | Converts a date to RFC 3339 format Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm RFC 3339 is a profile of ISO 8601, but without milliseconds by default |

