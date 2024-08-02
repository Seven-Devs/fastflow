import Workflow from "@/pages/workflow-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: () => <Workflow />,
});
