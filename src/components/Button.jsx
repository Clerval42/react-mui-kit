import React from "react";
import Button from "@mui/material/Button";
import clsx from "clsx";
import buttonTokens from "../tokens/button.json";

function getButtonStyles(variant, state, size) {
  const v = buttonTokens.button[variant] || buttonTokens.button.primary;
  const s = buttonTokens.button.sizes[size] || buttonTokens.button.sizes.medium;
  const st = v[state] || v.default;
  return {
    minWidth: s.minWidth.value,
    padding: `${s.paddingV.value} ${s.paddingH.value}`,
    fontSize: s.fontSize.value,
    backgroundColor: st.background.value,
    color: st.color.value,
    border: st.border.value,
    textTransform: "none",
    transition: "background 0.2s, color 0.2s",
    // ...add more as needed
  };
}

export default function UiButton({
  variant = "primary",
  size = "medium",
  disabled = false,
  className,
  startIcon,
  endIcon,
  children,
  ...props
}) {
  // Determine state for styling
  const [mouseDown, setMouseDown] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  let state = "default";
  if (disabled) state = "disabled";
  else if (mouseDown) state = "pressed";
  else if (hover) state = "mouseIn";

  const sx = getButtonStyles(variant, state, size);
  const iconGap = buttonTokens.button.sizes[size]?.iconGap?.value || '8px';
  const iconSize = buttonTokens.button.sizes[size]?.iconSize?.value || '16px';

  return (
    <Button
      variant="contained"
      color="inherit"
      disableElevation
      className={clsx(className)}
      sx={{
        ...sx,
        '& .MuiButton-startIcon': {
          marginRight: iconGap,
          marginLeft: 0,
          gap: 0,
        },
        '& .MuiButton-endIcon': {
          marginLeft: iconGap,
          marginRight: 0,
          gap: 0,
        },
        '& .MuiButton-startIcon > *, & .MuiButton-endIcon > *': {
          fontSize: iconSize,
          width: iconSize,
          height: iconSize,
        },
      }}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseLeave={() => { setMouseDown(false); setHover(false); }}
      onMouseEnter={() => setHover(true)}
      {...props}
    >
      {children}
    </Button>
  );
}
