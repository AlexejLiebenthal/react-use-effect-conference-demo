// src/examples/level-3/avoid-chained-effects/index.tsx
import { Comparison } from "../../../ui/comparison";
import { SingleStateUpdate } from "./single-state-update";
import singleStateUpdateCode from "./single-state-update.tsx?raw";
import { ChainedEffects } from "./chained-effects";
import chainedEffectsCode from "./chained-effects.tsx?raw";

export const AvoidChainedEffects = () => (
  <Comparison
    title="Single State Update vs Chained Effects"
    goodPractice={{
      badge: "Single State Update",
      description:
        "Calculating all derived values in one operation prevents unnecessary renders",
      component: <SingleStateUpdate />,
      code: singleStateUpdateCode,
    }}
    badPractice={{
      badge: "Chained Effects",
      description:
        "Cascading effects create a render waterfall, where each effect triggers another render",
      component: <ChainedEffects />,
      code: chainedEffectsCode,
    }}
  />
);
