import { Position } from "reactflow";
import { BaseNode } from "../../components/BaseNode";

export const NumberNode = ({ id, data }) => (
  <BaseNode
    title="Number"
    handles={[{ type: "source", position: Position.Right, id: `${id}-value` }]}
  >
    <input
      type="number"
      defaultValue={data?.value || 0}
      className="
        w-full rounded-md
        border border-slate-300
        px-2 py-1.5
        text-sm
        focus:border-indigo-500
        focus:ring-1 focus:ring-indigo-500
      "
    />
  </BaseNode>
);
