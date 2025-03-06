import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card bg-base-200 shadow-md">
      <div className="card-body">{children}</div>
    </div>
  );
};
