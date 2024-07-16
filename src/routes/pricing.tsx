import Pricing from "@/pages/pricing-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  component: () => <Pricing />,
});
