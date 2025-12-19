// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="w-[220px] rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="!bg-indigo-500 !w-3 !h-3"
      />
      <div className="px-3 py-2 border-b border-slate-100 text-sm font-semibold text-slate-700">
        <span>Output</span>
      </div>
      <div className="p-3 space-y-3">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Name:
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
              className="w-full rounded-md border border-slate-200 px-2 py-1 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </label>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Type:
            <select
              value={outputType}
              onChange={handleTypeChange}
              className="w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm
                       focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="Text">Text</option>
              <option value="File">Image</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};
