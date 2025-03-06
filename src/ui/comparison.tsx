import { ReactNode } from "react";
import { ResetableComponent } from "./resetable-component";
import { CodeBlock } from "./code-block";

export const Comparison = ({
  title,
  goodPractice,
  badPractice,
}: {
  title: string;
  goodPractice: {
    badge: string;
    description: string;
    component: ReactNode;
    code: string;
  };
  badPractice: {
    badge: string;
    description: string;
    component: ReactNode;
    code: string;
  };
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-center text-2xl font-bold">{title}</h3>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">Bad Practice</h3>
            <div className="badge badge-outline badge-error">
              {badPractice.badge}
            </div>
          </div>
          <p className="text-sm opacity-70">{badPractice.description}</p>
        </div>
        <div className="lg:col-start-1 lg:row-start-2">
          <ResetableComponent>{badPractice.component}</ResetableComponent>
        </div>
        <div className="lg:col-start-1 lg:row-start-3">
          <CodeBlock code={badPractice.code} language="tsx" />
        </div>

        <div className="lg:col-start-2 lg:row-start-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">Good Practice</h3>
            <div className="badge badge-outline badge-success">
              {goodPractice.badge}
            </div>
          </div>
          <p className="text-sm opacity-70">{goodPractice.description}</p>
        </div>
        <div className="lg:col-start-2 lg:row-start-2">
          <ResetableComponent>{goodPractice.component}</ResetableComponent>
        </div>
        <div className="lg:col-start-2 lg:row-start-3">
          <CodeBlock code={goodPractice.code} language="tsx" />
        </div>
      </div>
    </div>
  );
};
