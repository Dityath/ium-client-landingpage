import React from "react";

const Button = ({ children, className, small }) => {
  return (
    <button
      className={`bg-qolbiLight rounded-lg ${
        small ? "px-3 py-2 leading-none" : "px-4 py-2"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
