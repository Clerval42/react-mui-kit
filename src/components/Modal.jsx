import React from "react";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import clsx from "clsx";

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

export default function Modalmc({ open, onClose, size = "md", className, children, ...props }) {
  return (
    <MuiModal open={open} onClose={onClose} {...props}>
      <Box className={clsx("bg-white rounded-lg shadow-lg p-6 m-8 mx-auto", sizeClasses[size], className)}>
        {children}
      </Box>
    </MuiModal>
  );
}
