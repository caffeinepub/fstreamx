import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";
import { LanguageProvider } from "./lib/i18n";

const HomePage = lazy(() => import("./pages/Home"));
const MoviesPage = lazy(() => import("./pages/Movies"));
const AnimePage = lazy(() => import("./pages/Anime"));
const DramasPage = lazy(() => import("./pages/Dramas"));
const MusicPage = lazy(() => import("./pages/Music"));
const SearchPage = lazy(() => import("./pages/Search"));
const ContentDetailPage = lazy(() => import("./pages/ContentDetail"));
const AdminPage = lazy(() => import("./pages/Admin"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <LanguageProvider>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Layout>
    </LanguageProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const moviesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/movies",
  component: MoviesPage,
});
const animeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/anime",
  component: AnimePage,
});
const dramasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dramas",
  component: DramasPage,
});
const musicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/music",
  component: MusicPage,
});
const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchPage,
});
const contentDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/content/$id",
  component: ContentDetailPage,
});
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  moviesRoute,
  animeRoute,
  dramasRoute,
  musicRoute,
  searchRoute,
  contentDetailRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
