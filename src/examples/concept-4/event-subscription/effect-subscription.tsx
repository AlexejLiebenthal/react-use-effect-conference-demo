import { useState, useEffect } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";

function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    window.addEventListener(
      "online",
      () => {
        setIsOnline(true);
      },
      { signal },
    );
    window.addEventListener(
      "offline",
      () => {
        setIsOnline(false);
      },
      { signal },
    );

    return () => {
      abortController.abort();
    };
  }, []);

  return isOnline;
}

export const EffectSubscription = () => {
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
