import Navbar from "@/components/shared/navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col min-h-dvh">
        <Navbar />
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
