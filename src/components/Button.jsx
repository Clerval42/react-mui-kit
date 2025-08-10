import React from "react";
import Button from "@mui/material/Button";
import clsx from "clsx";

const variantProps = {
  primary: {
    mui: { variant: "contained", color: "primary" },
    tw: "!bg-blue-600 !text-white hover:!bg-blue-700 active:!scale-95 transition-transform",
  },
  secondary: {
    mui: { variant: "contained", color: "secondary" },
    tw: "!bg-gray-200 !text-gray-900 hover:!bg-gray-300 active:!scale-95 transition-transform",
  },
  outline: {
    mui: { variant: "outlined", color: "primary" },
    tw: "!border-blue-600 !text-blue-600 !bg-transparent hover:!bg-blue-50 active:!scale-95 transition-transform",
  },
  danger: {
    mui: { variant: "contained", color: "error" },
    tw: "!bg-red-600 !text-white hover:!bg-red-700 active:!scale-95 transition-transform",
  },
};

export default function Buttonmc({ variant = "primary", className, ...props }) {
  const { mui, tw } = variantProps[variant] || variantProps.primary;
  return (
    <Button
      {...mui}
      disableElevation
      className={clsx(tw, className)}
      {...props}
    />
  );
}
