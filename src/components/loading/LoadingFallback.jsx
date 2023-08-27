import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-20">
    <CircularProgress />
  </div>
);

export default LoadingFallback;
