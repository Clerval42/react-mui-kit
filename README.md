# @clerval42/ui-kit

[![npm version](https://img.shields.io/npm/v/@clerval42/ui-kit?style=flat-square)](https://www.npmjs.com/package/@clerval42/ui-kit)
[![GitHub](https://img.shields.io/badge/github-repo-blue?logo=github&style=flat-square)](https://github.com/clerval42/tailwind-mui-library)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

A customizable React component library built on top of **Material-UI (MUI)** and styled with **Tailwind CSS**. Design tokens (JSON) control colors, spacing, borders, and icons — change once, apply everywhere.

- ✅ Ready-to-use, themeable UI components
- 🎯 Consistent design via tokens
- 🤝 Full compatibility with MUI + Tailwind
- 🧩 Easy to add variants/sizes

## Quick Start

```bash
npm install @clerval42/ui-kit
```

> **Note:** You must have  Tailwind CSS set up in your project to use this library. If you haven't already, follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) before proceeding.

## Usage

> **Note:** You must import the button as `UiButton` (not `Button`):

```jsx
import { UiButton } from "@clerval42/ui-kit";

export default function App() {
  return <UiButton variant="primary">Submit</UiButton>;
}
```

## Features

* Design tokens (JSON) → CSS variables at runtime
* MUI `ButtonBase` + Tailwind styling
* `startIcon` / `endIcon`, sizes: `small | medium | large`
* Variants: `primary | secondary | outlined | ghost`
* Dark/light themes via token switch

## Tokens

Button styles (colors, borders, spacing, icon size/gap, etc.) are controlled by JSON design tokens for consistency and easy theming. Edit `src/tokens/button.json` to customize button appearance.

## Peer Dependencies

* react >= 18
* @mui/material >= 5
* @emotion/react, @emotion/styled

## Versioning

* SemVer. See Releases: [https://github.com/clerval42/tailwind-mui-library/releases](https://github.com/clerval42/tailwind-mui-library/releases)

## License

MIT
