import { Comparison } from "../../../ui/comparison";
import { DirectFiltering } from "./direct-filtering";
import directFilteringCode from "./direct-filtering.tsx?raw";
import { EffectFiltering } from "./effect-filtering";
import effectFilteringCode from "./effect-filtering.tsx?raw";

export const DataFiltering = () => (
  <Comparison
    title="Direct Filtering vs useEffect for Derived State"
    goodPractice={{
      badge: "Direct Computation",
      description:
        "Filtering products directly during render without unnecessary state",
      component: <DirectFiltering />,
      code: directFilteringCode,
    }}
    badPractice={{
      badge: "useEffect Computation",
      description:
        "Using useEffect to filter products creates unnecessary render cycles",
      component: <EffectFiltering />,
      code: effectFilteringCode,
    }}
  />
);
