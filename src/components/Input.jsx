import React from "react";
import MuiTextField from "@mui/material/TextField";
import clsx from "clsx";

export default function Inputmc({ variant = "outlined", size = "medium", className, ...props }) {
  return (
    <MuiTextField variant={variant} size={size} className={clsx("rounded", className)} {...props} />
  );
}
