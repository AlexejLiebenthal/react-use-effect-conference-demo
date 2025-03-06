import { useState, useEffect } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";
import { User, fetchUser } from "./shared";

export const CustomHookFetching = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setUser(null);
    setIsLoading(true);
    setError(null);

    fetchUser(userId)
      .then((userData) => {
        if (isMounted) {
          setUser(userData);
          setIsLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [userId]);

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
        </div>

        {isLoading && (
          <div className="flex justify-center py-4">
            <span className="loading loading-spinner"></span>
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            <span>{error}</span>
          </div>
        )}

        {user && (
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
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
