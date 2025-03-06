import { ReactNode } from "react";
import { Card } from "./card";
import { RenderCountBadge } from "./render-count-badge";
import { useResetContext } from "../context/reset-context";

export const RenderCountCard = ({ children }: { children: ReactNode }) => {
  "use no memo";

  const { handleRemount } = useResetContext();
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <RenderCountBadge />
        <button
          className="btn btn-sm btn-outline btn-error"
          onClick={handleRemount}
        >
          Reset
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </Card>
  );
};
