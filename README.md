# React UI Library with MUI & Tailwind

This library provides a set of customizable React UI components built with Material-UI (MUI) and styled using Tailwind CSS. It is designed for rapid development, flexibility, and easy theming.

## Features
- Built with [MUI](https://mui.com/) for accessibility and robust UI primitives
- Styled and extended with [Tailwind CSS](https://tailwindcss.com/)
- Easy-to-use variants and props for customization
- All components are fully compatible with MUI and can be used alongside classic MUI components

## Installation

```
npm install @mui/material @emotion/react @emotion/styled clsx
# and Tailwind CSS if not already installed
```

## Usage
Import the components you need from your library:

```jsx
import { Buttonmc, Alertmc, Cardmc, Inputmc, Modalmc, Badgemc, Avatarmc } from './components';
```

## Components & Variants

### Buttonmc
A button with MUI logic and Tailwind styling.
```jsx
<Buttonmc variant="primary">Primary</Buttonmc>
<Buttonmc variant="secondary">Secondary</Buttonmc>
<Buttonmc variant="outline">Outline</Buttonmc>
```

### Alertmc
MUI Alert with variant and severity support.
```jsx
<Alertmc severity="success" variant="filled">Success!</Alertmc>
<Alertmc severity="error" variant="outlined">Error!</Alertmc>
```

### Cardmc
Flexible card with shadow, outlined, or flat variants.
```jsx
<Cardmc variant="shadow">Shadow Card</Cardmc>
<Cardmc variant="outlined">Outlined Card</Cardmc>
<Cardmc variant="flat">Flat Card</Cardmc>
```

### Inputmc
MUI TextField with variant and size props.
```jsx
<Inputmc variant="outlined" size="medium" label="Name" />
<Inputmc variant="filled" size="small" label="Email" />
```

### Modalmc
Responsive modal with size options.
```jsx
<Modalmc open={open} onClose={handleClose} size="lg">
  <div>Modal Content</div>
</Modalmc>
```

### Badgemc
Badge for icons, avatars, or any element. Supports color and dot/standard variants.
```jsx
<Badgemc badgeContent={4} color="primary">
  <MailIcon />
</Badgemc>
<Badgemc variant="dot" color="error">
  <Avatarmc />
</Badgemc>
```

### Avatarmc
Avatar with size options.
```jsx
<Avatarmc size="sm" src="/avatar.png" />
<Avatarmc size="lg">AB</Avatarmc>
```

## Customization
- All components accept a `className` prop for further Tailwind or custom styling.
- You can use any MUI prop supported by the underlying component.
- Variants and sizes are extensible—edit the component files to add more!

## Classic MUI Usage
You can still use classic MUI components directly if you want full control or need features not exposed by this library.

---

**Happy coding!**
