import { Comparison } from "../../../ui/comparison";
import { DirectComputation } from "./direct-computation";
import directComputationCode from "./direct-computation.tsx?raw";
import { EffectComputation } from "./effect-computation";
import effectComputationCode from "./effect-computation.tsx?raw";

export const DerivedValues = () => (
  <Comparison
    title="Direct Computation vs useEffect for Computing Derived Values"
    goodPractice={{
      badge: "Direct Computation",
      description: "Computing fullname directly in render without state",
      component: <DirectComputation />,
      code: directComputationCode,
    }}
    badPractice={{
      badge: "useEffect Computation",
      description:
        "Using useEffect to set derived fullname state causes unnecessary renders",
      component: <EffectComputation />,
      code: effectComputationCode,
    }}
  />
);
