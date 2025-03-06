import { createContext, useContext } from "react";

export const ResetContext = createContext({
  remountKey: "",
  handleRemount: () => {},
});

export const useResetContext = () => {
  return useContext(ResetContext);
};
