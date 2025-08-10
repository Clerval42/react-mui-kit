import React from "react";
import MuiBadge from "@mui/material/Badge";
import clsx from "clsx";

const colorMap = {
  primary: "primary",
  secondary: "secondary",
  error: "error",
  info: "info",
  success: "success",
  warning: "warning",
};

export default function Badgemc({ color = "primary", variant = "standard", className, children, ...props }) {
  return (
    <MuiBadge color={colorMap[color] || "primary"} variant={variant} className={clsx(className)} {...props}>
      {children}
    </MuiBadge>
  );
}
