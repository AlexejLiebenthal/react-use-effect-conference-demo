import { Comparison } from "../../../ui/comparison";
import { SyncStoreSubscription } from "./sync-store-subscription";
import syncStoreSubscriptionCode from "./sync-store-subscription.tsx?raw";
import { EffectSubscription } from "./effect-subscription";
import effectSubscriptionCode from "./effect-subscription.tsx?raw";

export const EventSubscription = () => (
  <Comparison
    title="useSyncExternalStore vs useEffect for Browser Events"
    goodPractice={{
      badge: "useSyncExternalStore",
      description:
        "Purpose-built API for external subscriptions with tearing protection",
      component: <SyncStoreSubscription />,
      code: syncStoreSubscriptionCode,
    }}
    badPractice={{
      badge: "useEffect Subscription",
      description:
        "Traditional way to handle subscriptions that works but requires careful implementation",
      component: <EffectSubscription />,
      code: effectSubscriptionCode,
    }}
  />
);
