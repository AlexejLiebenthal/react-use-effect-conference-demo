import { useReducer } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";

interface CounterState {
  count: number;
  isEven: boolean;
  countSquared: number;
  message: string;
}

type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  let newCount: number;

  switch (action.type) {
    case "INCREMENT":
      newCount = state.count + 1;
      break;
    case "DECREMENT":
      newCount = state.count - 1;
      break;
    default:
      return state;
  }

  const isEven = newCount % 2 === 0;
  const countSquared = newCount * newCount;

  let message: string;
  if (newCount === 0) {
    message = "Let's start counting!";
  } else if (isEven) {
    message = `${newCount} is an even number, its square is ${countSquared}`;
  } else {
    message = `${newCount} is an odd number, its square is ${countSquared}`;
  }

  return {
    count: newCount,
    isEven,
    countSquared,
    message,
  };
};

export const ReducerState = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    isEven: true,
    countSquared: 0,
    message: "Let's start counting!",
  });

  return (
    <RenderCountCard>
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Oddly-Fancy-Counter</h3>

        <div className="flex justify-center gap-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
          >
            Decrement
          </button>

          <div className="flex items-center justify-center">
            <span className="text-xl font-bold">{state.count}</span>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
          >
            Increment
          </button>
        </div>

        <div className="card bg-base-100 p-4 shadow">
          <p className="text-center">{state.message}</p>
          <div className="divider my-1"></div>
          <div className="flex justify-between">
            <span>Is Even:</span>
            <span>{state.isEven ? "Yes" : "No"}</span>
          </div>
          <div className="flex justify-between">
            <span>Square:</span>
            <span>{state.countSquared}</span>
          </div>
        </div>
      </div>
    </RenderCountCard>
  );
};
