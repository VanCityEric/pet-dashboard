import React from "react";
import "./PetProfileCard.css";

interface PetProfileCardProps {
  name: string;
  breed: string;
  age: number;
  weight: number;
  children?: React.ReactNode;
}

const PetProfileCard: React.FC<PetProfileCardProps> = ({
  name,
  breed,
  age,
  weight,
  children,
}) => {
  return (
    <div className="pet-profile-card">
      <h2>{name}</h2>
      <p>
        <strong>Breed: </strong> {breed}
      </p>
      <p>
        <strong>Age: </strong>
        {age}
      </p>
      <p>
        <strong>Weight: </strong>
        {weight} lbs
      </p>
      {children}
    </div>
  );
};

export default PetProfileCard;
