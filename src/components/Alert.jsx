import React from "react";
import MuiAlert from "@mui/material/Alert";
import clsx from "clsx";

const variantMap = {
  filled: "filled",
  outlined: "outlined",
  standard: "standard",
};

export default function Alertmc({ severity = "info", variant = "standard", className, ...props }) {
  return (
    <MuiAlert
      severity={severity}
      variant={variantMap[variant] || "standard"}
      className={clsx("rounded shadow-md", className)}
      {...props}
    />
  );
}
