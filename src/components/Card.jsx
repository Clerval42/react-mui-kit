import React from "react";
import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import clsx from "clsx";

const variantClasses = {
  shadow: "shadow-lg border-0",
  outlined: "border border-gray-300 shadow-none",
  flat: "shadow-none border-0",
};

export default function Cardmc({ variant = "shadow", className, children, ...props }) {
  return (
    <MuiCard className={clsx("rounded-lg p-4", variantClasses[variant], className)} {...props}>
      <MuiCardContent>{children}</MuiCardContent>
    </MuiCard>
  );
}
