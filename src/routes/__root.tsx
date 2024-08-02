import Navbar from "@/components/shared/navbar";
import { AuthContext } from "@/hooks/auth";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

type RouterContext = {
  auth: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
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
