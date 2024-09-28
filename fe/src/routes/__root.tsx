import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen overflow-hidden">
      <Outlet />
      <ScrollRestoration />
    </div>
  ),
})
