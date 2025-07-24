import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const buttonClassName = `btn btn-${variant}`;
  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
