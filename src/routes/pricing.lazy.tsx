import Pricing from "@/pages/pricing-page";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/pricing")({
  component: () => <Pricing />,
});
