---
title: "Package Helpers"
sidebar:
  label: "≡ Overview"
  order: 0
---

Utility functions for working with package operations.

## Functions

| Function | Description |
|----------|-------------|
| [`AlpineDependency`](./alpinedependency/) | One package reference of an Alpine \(apk\) \`depends\` list\. |
| [`AlpineOperator`](./alpineoperator/) | The operators of an Alpine \(apk\) version constraint, as apk writes them: the five comparisons; |
| [`ArchDependency`](./archdependency/) | One package reference of an Arch Linux \`depends\` array\. |
| [`ComparisonOperator`](./comparisonoperator/) | The operators of an RPM or Arch Linux version constraint\. |
| [`DebianDependency`](./debiandependency/) | One package reference of a Debian relationship field: \`name\[:arch\] \[\(op version\)\] \[\[archs\]\] \[<profiles>\]\`\. |
| [`DebianDependencyOptions`](./debiandependencyoptions/) | Options of the Debian format of parseDependencies\. |
| [`DebianOperator`](./debianoperator/) | The operators of a Debian version constraint \(Debian Policy 7\.1\): \`<<\` \(strictly earlier\), \`<=\`, \`=\`, \`>=\` and \`>>\` \(st… |
| [`DependencyConstraint`](./dependencyconstraint/) | A version constraint such as the \`\(>= 2\.34\)\` of \`libc6 \(>= 2\.34\)\`, with the operator spelled as the format spells it\. |
| [`parseDeb822`](./parsedeb822/) | Parses a deb822 document, the format of Debian \`Packages\`, \`Sources\` and \`Release\` indexes, \`control\` and \`\.dsc\` and \`\.… |
| [`parseDependencies`](./parsedependencies/) | Parses the value of a package dependency field \(\`Depends\`, \`Requires\`, \`depends\`, \.\.\.\) into a structure: groups of alte… |
| [`Pep508Dependency`](./pep508dependency/) | One requirement of a PEP 508 dependency specification\. |
| [`Pep508Operator`](./pep508operator/) | The operators of a PEP 440 version specifier, as PEP 508 requirements use them\. |
| [`RpmDependency`](./rpmdependency/) | One package reference of an RPM \`Requires\` field\. |
| [`stringifyDependencies`](./stringifydependencies/) | Writes dependency groups back as a field value, the inverse of parseDependencies; |

