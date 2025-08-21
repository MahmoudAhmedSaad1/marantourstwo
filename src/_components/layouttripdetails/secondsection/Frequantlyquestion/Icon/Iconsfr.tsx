import React from "react";

export default function PlateForkKnife ({ size = 24, color = "#C19A6B" })  {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill={color}
    >
      <circle cx="32" cy="32" r="14" />

      <path d="M10 8v20c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V8h-2v8h-2V8h-2zm0 22v26c0 1.1.9 2 2 2s2-.9 2-2V30h-4z" />

      <path d="M50 8c-1.1 0-2 .9-2 2v20h4V10c0-1.1-.9-2-2-2zm-2 22v26c0 1.1.9 2 2 2s2-.9 2-2V30h-4z" />
    </svg>
  );
};
