import About from "@/pages/about-page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => <About />,
});
