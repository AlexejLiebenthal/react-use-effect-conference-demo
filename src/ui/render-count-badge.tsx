import { useRef } from "react";

const useRenderCount = () => {
  const count = useRef(0);
  count.current++;
  return count.current;
};

export const RenderCountBadge = () => {
  const count = useRenderCount();
  return (
    <div className="badge bg-base-300 font-mono text-xs">Renders: {count}</div>
  );
};
