import { useState, useEffect } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";

export const ProperCleanup = () => {
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState<"slow" | "fast">("slow");

  useEffect(() => {
    const interval = speed === "slow" ? 3000 : 1000;

    const timerId = window.setInterval(() => {
      setCount((c) => c + 1);
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [speed]);

  const handleToggleSpeed = () => {
    setSpeed(speed === "slow" ? "fast" : "slow");
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <RenderCountCard>
      <div className="space-y-4">
        <h3 className="text-lg font-bold">
          Interval Counter with Proper Cleanup
        </h3>

        <div className="card bg-base-200 p-4">
          <div className="text-center text-4xl font-bold">{count}</div>
          <div className="mt-2 text-center">
            Currently:{" "}
            <span className="font-bold">
              {speed === "slow" ? "Slow (3s)" : "Fast (1s)"}
            </span>
          </div>
          <div className="text-success mt-2 text-center">
            <span className="badge badge-success">Only one timer active</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="btn btn-primary" onClick={handleToggleSpeed}>
            Toggle Speed: {speed === "slow" ? "Fast" : "Slow"}
          </button>

          <button className="btn" onClick={handleReset}>
            Reset Count
          </button>
        </div>
      </div>
    </RenderCountCard>
  );
};
