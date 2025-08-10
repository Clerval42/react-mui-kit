import React from "react";
import MuiAvatar from "@mui/material/Avatar";
import clsx from "clsx";

const sizeClasses = {
  sm: "w-8 h-8 text-base",
  md: "w-12 h-12 text-lg",
  lg: "w-20 h-20 text-2xl",
};

export default function Avatarmc({ size = "md", className, ...props }) {
  return <MuiAvatar className={clsx("bg-blue-500", sizeClasses[size], className)} {...props} />;
}
