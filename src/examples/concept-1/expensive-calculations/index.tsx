import { Comparison } from "../../../ui/comparison";
import { MemoComputation } from "./memo-computation";
import memoComputationCode from "./memo-computation.tsx?raw";
import { EffectComputation } from "./effect-computation";
import effectComputationCode from "./effect-computation.tsx?raw";

export const ExpensiveCalculations = () => (
  <Comparison
    title="useMemo vs useEffect for Expensive Calculations"
    goodPractice={{
      badge: "useMemo",
      description:
        "Using useMemo to memoize expensive calculations without extra state",
      component: <MemoComputation />,
      code: memoComputationCode,
    }}
    badPractice={{
      badge: "useEffect Computation",
      description:
        "Using useEffect with state for calculated values causes unnecessary renders",
      component: <EffectComputation />,
      code: effectComputationCode,
    }}
  />
);
