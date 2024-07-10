import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/home")({
  component: HomePage,
});

function HomePage() {
  return <div className="p-2">Hello from Home!</div>;
}
