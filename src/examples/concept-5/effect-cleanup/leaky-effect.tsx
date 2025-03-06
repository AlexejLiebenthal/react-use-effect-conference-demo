import { useState, useEffect, useCallback } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";

export const LeakyEffect = () => {
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState<"slow" | "fast">("slow");
  const [leakedTimers, setLeakedTimers] = useState<number[]>([]);

  const handleStart = useCallback(() => {
    const interval = speed === "slow" ? 3000 : 1000;
    const id = window.setInterval(() => {
      setCount((c) => c + 1);
    }, interval);

    setLeakedTimers((prev) => [...prev, id]);
  }, [speed]);

  useEffect(() => {
    handleStart();
  }, [handleStart]);

  const handleToggleSpeed = () => {
    setSpeed(speed === "slow" ? "fast" : "slow");
  };

  const handleReset = () => {
    leakedTimers.forEach((id) => {
      clearInterval(id);
    });
    setCount(0);
    setLeakedTimers([]);

    handleStart();
  };

  // Patch to clean up leaky effect on unmount.
  // This clears the timers on unmount to prevent memory leaks outside the example.
  useEffect(() => {
    leakedTimers.forEach((id) => {
      clearInterval(id);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RenderCountCard>
      <div className="space-y-4">
        <h3 className="text-lg font-bold">
          Interval Counter with Leaky Effects
        </h3>

        <div className="card bg-base-200 p-4">
          <div className="text-center text-4xl font-bold">{count}</div>
          <div className="mt-2 text-center">
            Currently:{" "}
            <span className="font-bold">
              {speed === "slow" ? "Slow (3s)" : "Fast (1s)"}
            </span>
          </div>
          {leakedTimers.length === 1 && (
            <div className="text-success mt-2 text-center">
              <span className="badge badge-success">Only one timer active</span>
            </div>
          )}
          {leakedTimers.length > 1 && (
            <div className="text-error mt-2 text-center">
              <span className="badge badge-error">
                {leakedTimers.length} active timers! Count will increase faster
                than expected.
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <button className="btn btn-primary" onClick={handleToggleSpeed}>
            Toggle Speed: {speed === "slow" ? "Fast" : "Slow"}
          </button>

          <button
            className="btn btn-error"
            onClick={handleReset}
            disabled={leakedTimers.length === 0}
          >
            Reset & Clean Up
          </button>
        </div>
      </div>
    </RenderCountCard>
  );
};
