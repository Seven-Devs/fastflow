import { useState, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  Node,
  OnNodesChange,
  OnEdgesChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import InitialNode from "@/components/initial-node";
import AddUserNode from "@/components/add-user-node";
import FinalNode from "@/components/final-node";

const initialEdges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    type: "step",
    sourceHandle: "init",
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    type: "step",
    sourceHandle: "b",
  },
];

const initialNodes: Node[] = [
  {
    id: "1",
    data: { text: "Init" },
    position: { x: 0, y: 0 },
    type: "initialNode",
  },
  {
    id: "2",
    data: { label: "Approver" },
    position: { x: 0, y: 350 },
    type: "addUserNode",
  },
  {
    id: "3",
    data: { label: "Finish" },
    position: { x: 0, y: 800 },
    type: "finalNode",
  },
];

const nodeTypes = {
  initialNode: InitialNode,
  addUserNode: AddUserNode,
  finalNode: FinalNode,
};

export default function Workflow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  return (
    <div style={{ height: "100dvh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 20, minZoom: 1, maxZoom: 1 }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
