import { scan } from "react-scan";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import { StrictMode } from "react";

scan({ enabled: true });

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />,
  </StrictMode>,
);
