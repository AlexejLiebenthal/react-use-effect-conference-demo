import { useSyncExternalStore } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";

const networkStore = {
  getSnapshot: () => {
    return navigator.onLine;
  },

  subscribe: (callback: () => void) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    window.addEventListener("online", callback, { signal });
    window.addEventListener("offline", callback, { signal });

    return () => {
      abortController.abort();
    };
  },
};

function useNetworkStatus() {
  return useSyncExternalStore(networkStore.subscribe, networkStore.getSnapshot);
}

export const SyncStoreSubscription = () => {
  const isOnline = useNetworkStatus();

  return (
    <RenderCountCard>
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Network Status Monitor</h3>

        <div className="card bg-base-200 flex items-center justify-center p-4">
          <div className="flex flex-col items-center gap-2">
            <div
              className={`badge p-4 text-lg ${isOnline ? "badge-success" : "badge-error"}`}
            >
              {isOnline ? "Online" : "Offline"}
            </div>
            <p>Toggle your network connection to see changes</p>
          </div>
        </div>
      </div>
    </RenderCountCard>
  );
};
