import { useState } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";
import { toast } from "./shared";
import { Input } from "../../../ui/input";

export const DirectEventHandling = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast(`Submitted: ${formData.name} (${formData.email})`);
  };

  return (
    <RenderCountCard>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Name"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Form
        </button>
      </form>
    </RenderCountCard>
  );
};
