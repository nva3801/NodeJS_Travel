import React from "react";

const Label = ({ htmlFor = "", children, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-base font-medium cursor-pointer ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
