import { useState, useEffect } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";

export const EffectState = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(true);
  const [countSquared, setCountSquared] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsEven(count % 2 === 0);
  }, [count]);

  useEffect(() => {
    setCountSquared(count * count);
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      setMessage("Let's start counting!");
    } else if (isEven) {
      setMessage(`${count} is an even number, its square is ${countSquared}`);
    } else {
      setMessage(`${count} is an odd number, its square is ${countSquared}`);
    }
  }, [count, isEven, countSquared]);

  return (
    <RenderCountCard>
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Oddly-Fancy-Counter</h3>

        <div className="flex justify-center gap-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              setCount((c) => c - 1);
            }}
          >
            Decrement
          </button>

          <div className="flex items-center justify-center">
            <span className="text-xl font-bold">{count}</span>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              setCount((c) => c + 1);
            }}
          >
            Increment
          </button>
        </div>

        <div className="card bg-base-100 p-4 shadow">
          <p className="text-center">{message}</p>
          <div className="divider my-1"></div>
          <div className="flex justify-between">
            <span>Is Even:</span>
            <span>{isEven ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between">
            <span>Square:</span>
            <span>{countSquared}</span>
          </div>
        </div>
      </div>
    </RenderCountCard>
  );
};
