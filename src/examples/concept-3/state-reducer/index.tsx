import { Comparison } from "../../../ui/comparison";
import { ReducerState } from "./reducer-state";
import reducerStateCode from "./reducer-state.tsx?raw";
import { EffectState } from "./effect-state";
import effectStateCode from "./effect-state.tsx?raw";

export const StateReducer = () => (
  <Comparison
    title="useReducer vs Multiple Effects for Complex State"
    goodPractice={{
      badge: "useReducer Pattern",
      description:
        "Managing related state transitions in a single reducer avoids cascading renders",
      component: <ReducerState />,
      code: reducerStateCode,
    }}
    badPractice={{
      badge: "Multiple Effects",
      description:
        "Using multiple effects for interdependent state creates unnecessary render cycles",
      component: <EffectState />,
      code: effectStateCode,
    }}
  />
);
