import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  type?: "text" | "number" | "date" | "textarea";
  rows?: number;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  rows = 3,
  children,
  ...props
}) => {
  const Element = type === "textarea" ? "textarea" : "input";

  return (
    <div>
      {label && <label className="input-label">{label}</label>}
      <Element
        className="input-field"
        type={Element === "input" ? type : undefined}
        rows={Element === "textarea" ? rows : undefined}
        {...props}
      />
    </div>
  );
};

export default Input;
