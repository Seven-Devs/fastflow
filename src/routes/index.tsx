import Landing from "@/pages/lading-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    console.log("beforeLoad");
  },
  component: Index,
});

function Index() {
  return <Landing />;
}
