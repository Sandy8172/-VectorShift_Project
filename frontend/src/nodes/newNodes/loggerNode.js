import { Position } from "reactflow";
import { BaseNode } from "../../components/BaseNode";

export const LoggerNode = ({ id }) => (
  <BaseNode
    title="Logger"
    handles={[{ type: "target", position: Position.Left, id: `${id}-input` }]}
  >
    <span>Logs incoming data</span>
  </BaseNode>
);
