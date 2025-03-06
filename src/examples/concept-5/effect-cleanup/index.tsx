import { Comparison } from "../../../ui/comparison";
import { ProperCleanup } from "./proper-cleanup";
import properCleanupCode from "./proper-cleanup.tsx?raw";
import { LeakyEffect } from "./leaky-effect";
import leakyEffectCode from "./leaky-effect.tsx?raw";

export const EffectCleanup = () => (
  <Comparison
    title="Proper Effect Cleanup vs Leaky Effects"
    goodPractice={{
      badge: "Proper Cleanup",
      description:
        "Effect with cleanup function automatically stops old timers before creating new ones",
      component: <ProperCleanup />,
      code: properCleanupCode,
    }}
    badPractice={{
      badge: "Leaky Effect",
      description:
        "Effect without cleanup creates new timers without stopping old ones",
      component: <LeakyEffect />,
      code: leakyEffectCode,
    }}
  />
);
