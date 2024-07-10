import Landing from "@/pages/lading-page";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Landing />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
