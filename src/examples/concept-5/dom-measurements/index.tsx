import { Comparison } from "../../../ui/comparison";
import { CallbackRefMeasurement } from "./callback-ref-measurement";
import callbackRefCode from "./callback-ref-measurement.tsx?raw";
import { EffectMeasurement } from "./effect-measurement";
import effectMeasurementCode from "./effect-measurement.tsx?raw";

export const DomMeasurements = () => (
  <Comparison
    title="DOM Measurements: Callback Refs vs useEffect"
    goodPractice={{
      badge: "Callback Ref Pattern",
      description: "More elegant and efficient approach for DOM measurements",
      component: <CallbackRefMeasurement />,
      code: callbackRefCode,
    }}
    badPractice={{
      badge: "useEffect Pattern",
      description:
        "Works but may cause a flash of content because measurements happen after render",
      component: <EffectMeasurement />,
      code: effectMeasurementCode,
    }}
  />
);
