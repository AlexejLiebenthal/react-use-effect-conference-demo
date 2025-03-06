import { useState, useEffect, useRef } from "react";
import { RenderCountCard } from "../../../ui/render-count-card";
import { Input } from "../../../ui/input";
import { Toggle } from "../../../ui/toggle";

export const ImperativeDOM = () => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

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

        {showInput && <Input label="Focused Input" ref={inputRef} />}
      </div>
    </RenderCountCard>
  );
};
