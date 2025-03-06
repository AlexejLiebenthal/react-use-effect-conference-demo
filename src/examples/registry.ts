import { DerivedValues } from "./concept-1/derived-values";
import { DataFiltering } from "./concept-1/data-filtering";
import { ExpensiveCalculations } from "./concept-1/expensive-calculations";
import { DomInteractions } from "./concept-2/dom-interactions";
import { DirectEventHandlers } from "./concept-2/direct-event-handlers";
import { AvoidChainedEffects } from "./concept-3/avoid-chained-effects";
import { StateReducer } from "./concept-3/state-reducer";
import { DataFetching } from "./concept-4/data-fetching";
import { EventSubscription } from "./concept-4/event-subscription";
import { EffectCleanup } from "./concept-5/effect-cleanup";
import { DomMeasurements } from "./concept-5/dom-measurements";
// import { DomMeasurements } from "./concept-5/dom-measurements";

export const exampleRegistry = [
  {
    id: "concept-1",
    title: "Concept 1: Direct Computation",
    description:
      "Calculate values directly during rendering instead of using effects",
    examples: [
      { id: "derived-values", component: DerivedValues },
      { id: "data-filtering", component: DataFiltering },
      { id: "expensive-calculations", component: ExpensiveCalculations },
    ],
  },
  {
    id: "concept-2",
    title: "Concept 2: Declarative Approaches",
    description:
      "Use declarative React patterns instead of imperative code with effects",
    examples: [
      { id: "dom-interactions", component: DomInteractions },
      { id: "direct-event-handlers", component: DirectEventHandlers },
    ],
  },
  {
    id: "concept-3",
    title: "Concept 3: State Management Optimizations",
    description:
      "Better approaches to handling interdependent state without effects",
    examples: [
      { id: "avoid-chained-effects", component: AvoidChainedEffects },
      { id: "state-reducer", component: StateReducer },
    ],
  },
  {
    id: "concept-4",
    title: "Concept 4: External Integrations",
    description: "Modern patterns for external system integration",
    examples: [
      { id: "data-fetching", component: DataFetching },
      { id: "event-subscription", component: EventSubscription },
    ],
  },
  {
    id: "concept-5",
    title: "Concept 5: Common Effect Problems",
    description: "Solutions for common effect pitfalls",
    examples: [
      { id: "effect-cleanup", component: EffectCleanup },
      { id: "dom-measurements", component: DomMeasurements },
    ],
  },
];
