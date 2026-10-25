---
title: "String Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with string operations.

## Functions

| Function | Description |
|----------|-------------|
| [`camelCase`](./camelcase/) | Converts a string to camelCase\. |
| [`capitalize`](./capitalize/) | Capitalizes the first letter of a string\. |
| [`createGlobMatcher`](./createglobmatcher/) | createMatcher with every string read as a glob \(\`\*\`, \`?\`\): no string is ever taken for a regular expression, so it neve… |
| [`createMatcher`](./creatematcher/) | Turns user\-supplied filters \(a setting, a CLI flag, a list of rules\) into one predicate\. |
| [`createRegexMatcher`](./createregexmatcher/) | createMatcher with every string read as the source of a regular expression, without slashes or flags \(\`'^\(Home\|Login\)$'… |
| [`createSafeMatcher`](./createsafematcher/) | Like createMatcher, but returns \`null\` instead of throwing when a string pattern is an invalid regular expression, to r… |
| [`dedent`](./dedent/) | Strips the common leading whitespace from every line of a multi\-line string, and trims a single leading/trailing blank… |
| [`escapeHtml`](./escapehtml/) | Escapes the HTML special characters \`&\`, \`<\`, \`>\`, \`"\`, and \`'\` in a string\. |
| [`escapeRegExp`](./escaperegexp/) | Escapes regular expression metacharacters \(\`\. |
| [`excerpt`](./excerpt/) | Derives a short, readable excerpt from a longer text — for a card/header/preview where a full paragraph doesn't fit\. |
| [`extractErrorMessage`](./extracterrormessage/) | Convert an error to a readable message\. |
| [`formatProgressBar`](./formatprogressbar/) | Formats a value as a text progress bar, repeating \`filledChar\`/\`emptyChar\` across \`width\` cells proportional to \`value… |
| [`fromBase64`](./frombase64/) | Decodes Base64 text\. |
| [`globToRegExp`](./globtoregexp/) | Compiles a glob pattern into a \`RegExp\` that matches the whole string\. |
| [`injectWordBreaks`](./injectwordbreaks/) | Adds word\-break opportunities to a string so it can wrap cleanly in narrow UI containers such as side panels or table c… |
| [`isBlank`](./isblank/) | Checks if a string is blank — empty or contains only whitespace characters\. |
| [`isEmpty`](./isempty/) | Checks if a string is empty \(\`""\`\), \`null\`, or \`undefined\`\. |
| [`isNonEmpty`](./isnonempty/) | Checks if a string is non\-empty \(has at least one character\)\. |
| [`isNotBlank`](./isnotblank/) | Checks if a string is not blank — non\-empty and contains at least one non\-whitespace character\. |
| [`kebabCase`](./kebabcase/) | Converts a string to kebab\-case\. |
| [`leadingSentence`](./leadingsentence/) | Extracts the leading sentence from a string\. |
| [`levenshteinDistance`](./levenshteindistance/) | Levenshtein edit distance between two strings — the minimum number of single\-character insertions, deletions, or substi… |
| [`levenshteinSimilarity`](./levenshteinsimilarity/) | Normalized Levenshtein similarity between two strings, in \`\[0, 1\]\` — \`1\` means identical, \`0\` means completely dissimil… |
| `padStart / padEnd` | <span class="badge badge--secondary">native JS</span> `String.prototype.padStart() / padEnd()` *(ES2017)* |
| [`pascalCase`](./pascalcase/) | Converts a string to PascalCase\. |
| [`removeDiacritics`](./removediacritics/) | Removes diacritical marks \(accents\) from a string, e\.g\. |
| `repeat` | <span class="badge badge--secondary">native JS</span> `String.prototype.repeat()` *(ES2015)* |
| [`slugify`](./slugify/) | Converts a string into a URL\-friendly slug\. |
| [`snakeCase`](./snakecase/) | Converts a string to snake\_case\. |
| `startsWith / endsWith` | <span class="badge badge--secondary">native JS</span> `String.prototype.startsWith() / endsWith()` *(ES2015)* |
| [`stripHtml`](./striphtml/) | Plain text of an HTML fragment: tags removed, \`<script>\`, \`<style>\` and comments dropped with their content, entities d… |
| [`template`](./template/) | Interpolates \`\{\{key\}\}\` placeholders in a template string with values from a data record\. |
| [`titleCase`](./titlecase/) | Converts a string to Title Case\. |
| [`toBase64`](./tobase64/) | Encodes a string \(as UTF\-8\) or raw bytes to Base64, without relying on \`btoa\` or \`Buffer\`, so it behaves the same in a… |
| [`trim`](./trim/) | Trims both leading and trailing characters from a string, at a configurable level of aggressiveness \(see TrimMode\)\. |
| `trim / trimStart / trimEnd` | <span class="badge badge--secondary">native JS</span> `String.prototype.trim() / trimStart() / trimEnd()` *(ES2019)* |
| [`trimEnd`](./trimend/) | Trims trailing characters from a string, at a configurable level of aggressiveness \(see TrimMode\)\. |
| [`trimStart`](./trimstart/) | Trims leading characters from a string, at a configurable level of aggressiveness \(see TrimMode\)\. |
| [`truncate`](./truncate/) | Truncates a string to \`maxLength\` characters, appending an ellipsis when cut\. |
| [`unescapeHtml`](./unescapehtml/) | Unescapes the HTML entities \`&amp;\`, \`&lt;\`, \`&gt;\`, \`&quot;\`, and \`&\#39;\` back to \`&\`, \`<\`, \`>\`, \`"\`, and \`'\`\. |
| [`unorderedPairKey`](./unorderedpairkey/) | Builds a canonical, order\-independent key for an unordered pair of strings — the same result for \`\(a, b\)\` and \`\(b, a\)\`\. |
| [`words`](./words/) | Splits a string into an array of words\. |

