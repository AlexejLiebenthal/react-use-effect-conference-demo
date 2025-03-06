import { useState, useEffect } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";
import { toast } from "./shared";
import { Input } from "../../../ui/input";

export const EffectEventHandling = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      toast(`Submitted: ${formData.name} (${formData.email})`);
      setIsSubmitting(false);
    }
  }, [isSubmitting, formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Trigger the effect
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

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          Submit Form
        </button>
      </form>
    </RenderCountCard>
  );
};
