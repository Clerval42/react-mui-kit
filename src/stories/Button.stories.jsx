import Button from '../components/Button.jsx';
import { Add } from '@mui/icons-material';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button',
    disabled: false,
    fullWidth: false,
  },
};

export const PrimaryHover = {
  args: {
    ...Primary.args,
    children: 'Primary Hover (simulate by mouse over)',
  },
};

export const PrimaryPressed = {
  args: {
    ...Primary.args,
    children: 'Primary Pressed (simulate by mouse down)',
  },
};

export const PrimaryDisabled = {
  args: {
    ...Primary.args,
    disabled: true,
    children: 'Primary Disabled',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Secondary Button',
    disabled: false,
    fullWidth: false,
  },
};

export const SecondaryHover = {
  args: {
    ...Secondary.args,
    children: 'Secondary Hover (simulate by mouse over)',
  },
};

export const SecondaryPressed = {
  args: {
    ...Secondary.args,
    children: 'Secondary Pressed (simulate by mouse down)',
  },
};

export const SecondaryDisabled = {
  args: {
    ...Secondary.args,
    disabled: true,
    children: 'Secondary Disabled',
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
    disabled: false,
    fullWidth: false,
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
    disabled: false,
    fullWidth: false,
  },
};
export const WithStartIcon = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Add',
    startIcon: <Add />,
  },
};

export const WithEndIcon = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Next',
    endIcon: <Add />,
  },
};