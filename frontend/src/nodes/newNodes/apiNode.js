import { Position } from "reactflow";
import { BaseNode } from "../../components/BaseNode";

export const ApiNode = ({ id }) => (
  <BaseNode
    title="API"
    handles={[
      { type: "target", position: Position.Left, id: `${id}-input` },
      { type: "source", position: Position.Right, id: `${id}-response` },
    ]}
  >
    <span>External API Call</span>
  </BaseNode>
);
