import { ReactNode, useState } from "react";
import { ResetContext } from "../context/reset-context";

const randomId = () => Math.random().toString(36).slice(2, 9);

export const ResetableComponent = ({ children }: { children: ReactNode }) => {
  const [remountKey, setRemountKey] = useState(randomId());

  const WrappedComponent = () => <>{children}</>;

  const handleRemount = () => {
    setRemountKey(randomId());
  };

  return (
    <ResetContext value={{ remountKey, handleRemount }}>
      <WrappedComponent key={remountKey} />
    </ResetContext>
  );
};
