// llmNode.js

import { Handle, Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  return (
    <div className="w-[220px] rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow py-2">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
        className="!bg-indigo-500 !w-3 !h-3"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
        className="!bg-indigo-500 !w-3 !h-3"
      />
      <div  className="px-3 py-2 border-b border-slate-100 text-sm font-semibold text-slate-700">
        <span>LLM</span>
      </div>
      <div>
        <span className="text-slate-500 italic pl-2">This is a LLM.</span>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-response`} className="!bg-indigo-500 !w-3 !h-3" />
    </div>
  );
};
