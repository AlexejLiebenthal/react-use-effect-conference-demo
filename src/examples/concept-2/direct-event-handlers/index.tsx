import { Comparison } from "../../../ui/comparison";
import { DirectEventHandling } from "./direct-event-handling";
import directEventHandlingCode from "./direct-event-handling.tsx?raw";
import { EffectEventHandling } from "./effect-event-handling";
import effectEventHandlingCode from "./effect-event-handling.tsx?raw";

export const DirectEventHandlers = () => (
  <Comparison
    title="Direct vs Effect-based Event Handling"
    goodPractice={{
      badge: "Direct Event Handling",
      description:
        "Handling events directly in event handlers without state+effect chains",
      component: <DirectEventHandling />,
      code: directEventHandlingCode,
    }}
    badPractice={{
      badge: "Effect-based Event Handling",
      description:
        "Using state+effect chains for event handling causes unnecessary renders",
      component: <EffectEventHandling />,
      code: effectEventHandlingCode,
    }}
  />
);
