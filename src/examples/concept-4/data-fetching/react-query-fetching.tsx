import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RenderCountCard } from "../../../ui/render-count-card";
import { fetchUser } from "./shared";

export const ReactQueryFetching = () => {
  const [userId, setUserId] = useState(1);

  const {
    data: user,
    isLoading,
    isError,
    isPaused,
    isRefetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    retry: 0,
  });

  return (
    <RenderCountCard>
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Fetch User</h3>

        <div className="flex items-center justify-between">
          <div className="join">
            {[1, 2, 3, 4, 5].map((id) => (
              <button
                key={id}
                className={`btn btn-primary join-item ${userId !== id && "btn-outline"}`}
                onClick={() => {
                  setUserId(id);
                }}
              >
                {id}
              </button>
            ))}
          </div>

          <button
            className="btn btn-sm"
            onClick={() => void refetch()}
            disabled={isLoading}
          >
            Refresh
          </button>
        </div>

        {isError && (
          <div className="alert alert-error">
            <span>{error.message}</span>
          </div>
        )}

        {isPaused && (
          <div className="alert alert-warning">
            <span>Query is paused</span>
          </div>
        )}

        {isLoading && (
          <div className="flex justify-center py-4">
            <span className="loading loading-spinner"></span>
          </div>
        )}

        {user && (
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">
                {user.name}
                {isRefetching && (
                  <span className="badge badge-info">Updating...</span>
                )}
              </h2>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </div>
        )}
      </div>
    </RenderCountCard>
  );
};
