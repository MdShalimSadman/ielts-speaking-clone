"use client";

import React from "react";

type ArrowLeftIconProps = {
  height?: number | string;
  width?: number | string;
  className?: string;
};

const ArrowRightIcon: React.FC<ArrowLeftIconProps> = ({
  height = 30,
  width = 30,
  className = "",
}) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      color="white"
      className={className}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
    </svg>
  );
};

export default ArrowRightIcon;
