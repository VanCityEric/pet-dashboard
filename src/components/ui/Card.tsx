import React from "react";
import "./Card.css";

interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <div className="card">{children}</div>;
};

export default Card;
