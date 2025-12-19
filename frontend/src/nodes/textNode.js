import { useEffect, useMemo, useRef, useState } from "react";
import { Handle, Position } from "reactflow";

const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;

  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }

  return Array.from(vars);
};

export const TextNode = ({ id, data }) => {

  const [text, setText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  // Extract variables
  const variables = useMemo(() => extractVariables(text), [text]);

  // Auto-resize textarea
  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  }, [text]);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  // Dynamic width based on longest line
  const longestLine = Math.max(
    ...text.split("\n").map((l) => l.length),
    10
  );
  const dynamicWidth = Math.min(400, Math.max(220, longestLine * 8));

  return (
    <div
      className="rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
      style={{ width: dynamicWidth }}
    >
      {/* Variable Handles */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${30 + index * 20}px`,
          }}
          className="!bg-indigo-500 !w-3 !h-3"
        />
      ))}

      {/* Header */}
      <div className="px-3 py-2 border-b border-slate-100 text-sm font-semibold text-slate-700">
        Text
      </div>

      {/* Content */}
      <div className="p-3">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          rows={1}
          className="
            w-full resize-none overflow-hidden
            rounded-md border border-slate-300
            px-2 py-1.5 text-sm
            focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
          "
          placeholder="Type text with {{variables}}"
        />
      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="!bg-indigo-500 !w-3 !h-3"
      />
    </div>
  );
};
