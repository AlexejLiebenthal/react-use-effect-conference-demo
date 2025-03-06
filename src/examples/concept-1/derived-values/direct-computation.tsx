import { useState } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";
import { Input } from "../../../ui/input";

export const DirectComputation = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  const fullName = `${firstName} ${lastName}`;

  return (
    <RenderCountCard>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="First Name"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <Input
          label="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="card bg-base-100 shadow">
        <div className="card-body text-center">
          <span className="font-medium">Hello, {fullName}!</span>
        </div>
      </div>
    </RenderCountCard>
  );
};
