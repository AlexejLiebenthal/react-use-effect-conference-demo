import { useEffect, useRef, useState } from "react";
import { exampleRegistry } from "./examples/registry";
import { CodeBlock } from "./ui/code-block";

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl space-y-12 p-4">
      <header className="text-center">
        <h1 className="text-4xl font-bold">To useEffect or not to useEffect</h1>
        <p className="text-lg opacity-75">
          Understanding useEffect anti-patterns and best practices
        </p>
      </header>

      <IntroductionCard />
      <TlDr />
      <Concepts />

      <footer className="space-y-4 text-center">
        <span className="text-sm opacity-60">
          A demonstration of React useEffect optimization patterns © Alexej
          Liebenthal {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}

const IntroductionCard = () => {
  return (
    <div className="card bg-base-200 shadow">
      <div className="card-body space-y-6">
        <h2 className="card-title text-2xl">Understanding useEffect</h2>

        <p>
          The <code>useEffect</code> hook lets you perform side effects in
          function components. Side effects might include data fetching,
          subscriptions, manual DOM manipulations, or anything that needs to
          happen "outside" the normal React rendering lifecycle.
        </p>

        <CodeBlock
          language="tsx"
          code={`useEffect(() => {
  // Side effect code here

  return () => {
    // Optional cleanup function
  };
}, [dependencies]); // Optional dependency array`}
        />

        <div className="space-y-4">
          <p className="font-medium">
            The dependency array has three distinct behaviors:
          </p>

          <ul className="list-disc space-y-4 pl-4">
            <li className="space-y-2">
              <div>
                <span className="font-bold">No dependency array</span>: The
                effect runs after every render
              </div>
              <CodeBlock
                language="tsx"
                code={`useEffect(() => {
  console.log('This runs after every render');
});`}
              />
            </li>

            <li className="space-y-2">
              <div>
                <span className="font-bold">Empty dependency array</span>: The
                effect runs only once after the initial render (mount)
              </div>
              <CodeBlock
                language="tsx"
                code={`useEffect(() => {
  console.log('This runs only on mount');
}, []);`}
              />
            </li>

            <li className="space-y-2">
              <div>
                <span className="font-bold">Dependency array with values</span>:
                The effect runs on mount and whenever any dependency changes
              </div>
              <CodeBlock
                language="tsx"
                code={`useEffect(() => {
  console.log(\`This runs when count (\${count}) changes\`);
}, [count]);`}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const TlDr = () => {
  return (
    <div className="card bg-base-200 shadow">
      <div className="card-body space-y-6">
        <h3 className="card-title text-lg font-bold">Key Takeaways</h3>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <span className="font-bold">Calculate, don't synchronize</span> -
            Whenever possible, compute values during render rather than using
            effects to derive and store them.
          </li>
          <li>
            <span className="font-bold">Handle events directly</span> - Event
            handlers are often a better place for side effects than using
            state+effect combinations.
          </li>
          <li>
            <span className="font-bold">Use the right tool</span> - Modern React
            provides specialized hooks like <code>useSyncExternalStore</code>{" "}
            for specific use cases.
          </li>
          <li>
            <span className="font-bold">
              Extract patterns into custom hooks
            </span>{" "}
            - Create reusable abstractions for common patterns to simplify
            component logic.
          </li>
          <li>
            <span className="font-bold">Think declaratively</span> - The more
            declarative your components are, the less you'll need effects.
          </li>
          <li>
            <span className="font-bold">Clean up properly</span> - When you do
            need effects, use AbortController and proper cleanup functions to
            prevent leaks and race conditions.
          </li>
        </ul>
      </div>
    </div>
  );
};

// At the end of the talk, we will be able to remove both useEffects from this component ;)
const usePrevious = <T,>(state: T): T | undefined => {
  const ref = useRef<T>(undefined);

  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
};

const useScrollIntoViewOnTabChange = (tabViewId: string) => {
  const [activeTab, setActiveTab] = useState(0);
  const prevTab = usePrevious(activeTab);

  useEffect(() => {
    if (prevTab !== undefined) {
      document.getElementById(tabViewId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [prevTab, tabViewId]);

  return [activeTab, setActiveTab] as const;
};

const Concepts = () => {
  const conceptId = "concepts";
  const conceptRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useScrollIntoViewOnTabChange(conceptId);

  return (
    <div ref={conceptRef} id={conceptId} className="space-y-8">
      <select
        className="select select-bordered bg-base-100 sticky top-0 z-10 w-full font-semibold shadow 2xl:hidden"
        value={activeTab}
        onChange={(e) => {
          setActiveTab(parseInt(e.target.value));
        }}
      >
        {exampleRegistry.map((concept, index) => (
          <option key={concept.id} value={index}>
            {concept.title}
          </option>
        ))}
      </select>

      <div
        role="tablist"
        className="tabs tabs-border tabs-bottom bg-base-100 sticky top-0 z-10 hidden justify-center shadow 2xl:flex"
      >
        {exampleRegistry.map((concept, index) => (
          <button
            key={concept.id}
            role="tab"
            className={`tab font-semibold ${activeTab === index ? "tab-active" : ""}`}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {concept.title}
          </button>
        ))}
      </div>

      <div className="bg-base-100 border-base-300 rounded-box border p-6">
        <h2 className="text-3xl font-bold">
          {exampleRegistry[activeTab].title}
        </h2>
        <p className="text-lg opacity-75">
          {exampleRegistry[activeTab].description}
        </p>

        <div className="mt-6 space-y-12">
          {exampleRegistry[activeTab].examples.map((example, index) => (
            <div key={example.id} className="snap-start">
              <div className="divider">
                <span className="badge badge-lg badge-primary">
                  Example {index + 1}
                </span>
              </div>

              <div>
                <example.component />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
