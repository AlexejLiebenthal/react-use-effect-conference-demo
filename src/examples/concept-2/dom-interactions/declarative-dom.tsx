import { useState } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";
import { Input } from "../../../ui/input";
import { Toggle } from "../../../ui/toggle";

export const DeclarativeDOM = () => {
  const [showInput, setShowInput] = useState(false);

  return (
    <RenderCountCard>
      <div className="space-y-4">
        <Toggle
          label="Show input field"
          checked={showInput}
          onChange={() => {
            setShowInput((prev) => !prev);
          }}
        />

        {showInput && <Input label="Focused Input" autoFocus />}
      </div>
    </RenderCountCard>
  );
};
