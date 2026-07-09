---
title: "Date Helpers"
sidebar:
  label: "Date"
  order: 0
---

Utility functions for working with date operations.

## Functions

| Function | Description |
|----------|-------------|
| `add / subtract (date arithmetic)` | <span class="badge badge--secondary">native JS</span> `Temporal.PlainDate.prototype.add(duration) / .subtract(duration)` *(Temporal (Stage 3))* |
| [`addDays`](./adddays/) | Adds days to a date. |
| [`addMonths`](./addmonths/) | Adds months to a date. |
| [`addYears`](./addyears/) | Adds years to a date. |
| [`clampDate`](./clampdate/) | Clamps a date to a [min, max] range. |
| [`compare`](./compare/) | Comparison of two dates. |
| `compare (ordering)` | <span class="badge badge--secondary">native JS</span> `Temporal.PlainDate.compare(a, b) / Temporal.Instant.compare(a, b)` *(Temporal (Stage 3))* |
| [`daysInMonth`](./daysinmonth/) | Returns the number of days in the given month of the given year. |
| [`difference`](./difference/) | Calculates the difference between two dates in the specified unit. |
| [`eachDay`](./eachday/) | Returns an array of `Date` objects for each day from `start` to `end` (inclusive). |
| [`eachMonth`](./eachmonth/) | Returns an array of `Date` objects for the first day of each month from `start` to `end` (inclusive). |
| [`endOf`](./endof/) | Returns a new `Date` set to the **end** of the given unit. |
| [`ensureDate`](./ensuredate/) | Safely converts a date-like value to a valid `Date` object, or returns `null`. |
| [`formatDuration`](./formatduration/) | Formats a duration in milliseconds as a compact human-readable string. |
| [`formatInTimezone`](./formatintimezone/) | Formats a date in a specific IANA timezone using `Intl.DateTimeFormat`. |
| `from (parse temporal string)` | <span class="badge badge--secondary">native JS</span> `Temporal.Instant.from(str) / Temporal.PlainDate.from(str) / etc.` *(Temporal (Stage 3))* |
| [`fromMillis`](./frommillis/) | Creates a `Date` from a timestamp in **milliseconds**. |
| [`fromSeconds`](./fromseconds/) | Creates a `Date` from a timestamp in **seconds**. |
| [`getTimezoneOffset`](./gettimezoneoffset/) | Returns the UTC offset **in minutes** for the given IANA timezone at a specific point in time. |
| [`isBusinessDay`](./isbusinessday/) | Checks whether a date falls on a business day (i.e. |
| [`isLeapYear`](./isleapyear/) | Returns `true` if the given year is a leap year. |
| [`isSameDay`](./issameday/) | Checks if two dates are the same day. |
| [`isSameMonth`](./issamemonth/) | Checks if two dates are in the same month (and year). |
| [`isSameYear`](./issameyear/) | Checks if two dates are in the same year. |
| [`isTimestampInSeconds`](./istimestampinseconds/) | Checks if a timestamp is likely in seconds (Java/Unix style) vs milliseconds (JavaScript style) |
| [`isValid`](./isvalid/) | Checks if a value is a valid Date instance (not `Invalid Date`). |
| [`isValidDateString`](./isvaliddatestring/) | Checks whether a string can be parsed into a valid `Date`. |
| [`isWeekend`](./isweekend/) | Checks whether a date falls on a weekend day. |
| [`isWithinRange`](./iswithinrange/) | Checks whether a date falls within a range (inclusive on both ends). |
| [`listTimezones`](./listtimezones/) | Returns the list of IANA timezone identifiers supported by the runtime. |
| [`normalizeTimestamp`](./normalizetimestamp/) | Converts a timestamp to JavaScript milliseconds format |
| `now (date/time/instant)` | <span class="badge badge--secondary">native JS</span> `Temporal.Now.instant() / .zonedDateTimeISO() / .plainDateISO() / .plainTimeISO()` *(Temporal (Stage 3))* |
| [`overlaps`](./overlaps/) | Checks whether two date ranges overlap. |
| [`startOf`](./startof/) | Returns a new `Date` set to the **start** of the given unit. |
| [`timeAgo`](./timeago/) | Formats a date as a human-readable relative time string. |
| [`toISO8601`](./toiso8601/) | Converts a date to ISO 8601 format Format: YYYY-MM-DDTHH:mm:ss.sssZ |
| [`toMillis`](./tomillis/) | Converts a date to a timestamp in **milliseconds** (epoch millis). |
| `toPlainDate / toPlainDateTime / toPlainTime` | <span class="badge badge--secondary">native JS</span> `Temporal.ZonedDateTime.prototype.toPlainDate() / toPlainDateTime() / toPlainTime()` *(Temporal (Stage 3))* |
| [`toRFC2822`](./torfc2822/) | Converts a date to RFC 2822 format Format: Day, DD Mon YYYY HH:mm:ss +0000 Used in email headers (Date field) and HTT… |
| [`toRFC3339`](./torfc3339/) | Converts a date to RFC 3339 format Format: YYYY-MM-DDTHH:mm:ssZ or YYYY-MM-DDTHH:mm:ss+HH:mm RFC 3339 is a profile of… |
| [`toSeconds`](./toseconds/) | Converts a date to a timestamp in **seconds** (epoch seconds). |
| `toTemporalInstant` | <span class="badge badge--secondary">native JS</span> `Date.prototype.toTemporalInstant()` *(Temporal (Stage 3))* |
| `toZonedDateTime` | <span class="badge badge--secondary">native JS</span> `Temporal.Instant.prototype.toZonedDateTimeISO(tz)` *(Temporal (Stage 3))* |
| `until / since (difference)` | <span class="badge badge--secondary">native JS</span> `Temporal.PlainDate.prototype.until(other) / .since(other)` *(Temporal (Stage 3))* |
| [`WeekDays`](./weekdays/) | Named day-of-week constants following the JavaScript `Date.getDay()` convention. |

