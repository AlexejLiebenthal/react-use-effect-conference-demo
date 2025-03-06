import { Comparison } from "../../../ui/comparison";
import { DeclarativeDOM } from "./declarative-dom";
import declarativeDOMCode from "./declarative-dom.tsx?raw";
import { ImperativeDOM } from "./imperative-dom";
import imperativeDOMCode from "./imperative-dom.tsx?raw";

export const DomInteractions = () => (
  <Comparison
    title="Declarative vs Imperative DOM Interactions"
    goodPractice={{
      badge: "Declarative DOM",
      description:
        "Using built-in HTML attributes instead of imperative DOM manipulation",
      component: <DeclarativeDOM />,
      code: declarativeDOMCode,
    }}
    badPractice={{
      badge: "Imperative DOM with useEffect",
      description:
        "Using useEffect to manually manipulate the DOM is unnecessary",
      component: <ImperativeDOM />,
      code: imperativeDOMCode,
    }}
  />
);
