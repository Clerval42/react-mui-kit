# React UI Library with MUI & Tailwind

This library provides a set of customizable React UI components built with Material-UI (MUI) and styled using Tailwind CSS. It is designed for rapid development, flexibility, and easy theming.

## Features
- Built with [MUI](https://mui.com/) for accessibility and robust UI primitives
- Styled and extended with [Tailwind CSS](https://tailwindcss.com/)
- Easy-to-use variants and props for customization
- All components are fully compatible with MUI and can be used alongside classic MUI components
- **Design tokens** for consistent theming and scalable design

## Installation

```
npm install @mui/material @emotion/react @emotion/styled clsx @mui/icons-material
# and Tailwind CSS if not already installed
```

## Usage
Import the components you need from your library:

```jsx
import { Buttonmc, Alertmc, Cardmc, Inputmc, Modalmc, Badgemc, Avatarmc } from './components';
```

## Components & Variants

### UiButton
A button with MUI logic, Tailwind styling, and **design token** support. Supports icons, all design system variants, and sizes. Button styles (colors, borders, spacing, icon size/gap, etc.) are controlled by JSON design tokens for consistency and easy theming.

**How tokens work:**
- All button visual styles (color, border, background, font size, icon size/gap, etc.) are defined in a JSON file (see `src/tokens/button.json`).
- The UiButton component reads these tokens and applies them dynamically for each variant, state (default, hover, pressed, disabled), and size.
- To change the look of all buttons, just update the token values—no need to touch the component code.
- Tokens are not pushed to your repo if you add them to `.gitignore` (e.g. `src/tokens/`).

**Example token (button.json):**
```json
{
  "button": {
    "primary": {
      "default": { "background": { "value": "#123456" }, "color": { "value": "#FFFFFF" }, "border": { "value": "2px solid transparent" } },
      "hover":   { "background": { "value": "transparent" }, "color": { "value": "#123456" }, "border": { "value": "2px solid #123456" } }
      // ...other states
    },
    "sizes": {
      "large": { "fontSize": { "value": "18px" }, "iconGap": { "value": "10px" } }
      // ...other sizes
    }
  }
}
```

**How to use UiButton:**
```jsx
import { Add, ArrowForward } from '@mui/icons-material';

<UiButton variant="primary" startIcon={<Add />}>Add</UiButton>
<UiButton variant="secondary" endIcon={<ArrowForward />}>Next</UiButton>
<UiButton variant="primary" size="large">Large Primary</UiButton>
<UiButton variant="secondary" disabled>Disabled Secondary</UiButton>
```

**How to customize tokens:**
- Edit `src/tokens/button.json` to change colors, borders, icon size/gap, etc.
- The component will automatically use the new values.

## Customization
- All components accept a `className` prop for further Tailwind or custom styling.
- You can use any MUI prop supported by the underlying component.
- Variants and sizes are extensible—edit the component files or design tokens to add more!
- **Buttonmc**: Icon size and gap are controlled by design tokens for perfect alignment.

## Classic MUI Usage
You can still use classic MUI components directly if you want full control or need features not exposed by this library.

---

**Happy coding!**
