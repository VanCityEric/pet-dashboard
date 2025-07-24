import React, { useState } from "react";
import "./ActivityForm.css";
import Input from "../ui/Input";
import Button from "../ui/Button";

interface ActivityFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string;
  children?: React.ReactNode;
}

const ActivityForm: React.FC<ActivityFormProps> = ({
  title,
  children,
  ...props
}) => {
  const [activityName, setActivityName] = useState<string>("");
  const [duration, setDuration] = useState<number>();
  const [notes, setNotes] = useState<string>("");
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const handleSubmit = (e: React.FormEvent) => {};
  return (
    <div className="activity-form">
      <h2 className="form-title">{title}</h2>
      <form onSubmit={handleSubmit} className="activity-form">
        <Input label="Activity name: " type="text" />
        <Input label="Duration: " type="number" />
        <Input label="Notes: " type="textarea" />
        <Input label="Date: " type="date" />
        <Button type="submit">Log Activity</Button>
      </form>
    </div>
  );
};

export default ActivityForm;
