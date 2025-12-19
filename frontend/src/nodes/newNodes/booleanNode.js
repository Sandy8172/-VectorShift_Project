import { Position } from "reactflow";
import { BaseNode } from "../../components/BaseNode";

export const BooleanNode = ({ id }) => (
  <BaseNode
    title="Boolean"
    handles={[
      { type: 'source', position: Position.Right, id: `${id}-value` },
    ]}
  >
    <select className="
        w-full rounded-md
        border border-slate-300
        px-2 py-1.5
        text-sm
        focus:border-indigo-500
        focus:ring-1 focus:ring-indigo-500
      ">
      <option>true</option>
      <option>false</option>
    </select>
  </BaseNode>
);
