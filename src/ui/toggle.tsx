import { ComponentProps } from "react";

export const Toggle = ({
  label,
  ...props
}: { label: string } & ComponentProps<"input">) => {
  return (
    <div>
      <label className="label">
        <input type="checkbox" className="toggle toggle-primary" {...props} />
        {label}
      </label>
    </div>
  );
};
