import { useState, useRef, useEffect } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";

export const EffectMeasurement = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const measure = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setDimensions({
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      });
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <RenderCountCard>
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Element Size Tracker</h3>

        <div ref={ref} className="card bg-base-100 shadow">
          <div className="card-body">
            <p>
              This element's size is tracked as it changes - resize your browser
              or toggle extra content to see it in action.
            </p>
            <details className="collapse-arrow collapse m-0 p-0">
              <summary className="collapse-title px-0 font-semibold">
                Extra Content
              </summary>
              <div className="collapse-content text-sm">
                <p>This is additional content that changes the element size.</p>
              </div>
            </details>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-light">Dimensions:</span> {dimensions.width} ×{" "}
            {dimensions.height}px
          </div>
        </div>
      </div>
    </RenderCountCard>
  );
};
