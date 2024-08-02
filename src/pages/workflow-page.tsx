import { ReactFlow, Background, Controls } from "@xyflow/react";

export default function Workflow() {
  return (
    <div style={{ height: "100dvh" }}>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
