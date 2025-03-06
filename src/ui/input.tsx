import { ComponentProps } from "react";

export const Input = ({
  label,
  ...props
}: { label: string } & ComponentProps<"input">) => {
  return (
    <label className="floating-label label">
      <span>{label}</span>
      <input className="input input-lg w-full" placeholder={label} {...props} />
    </label>
  );
};
