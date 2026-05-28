import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@picocss/pico/css/pico.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import CenteredLayout from "./layouts/CenteredLayout";
import Intro from "./pages/Intro";
import { ROUTES } from "./constants";
import { getData } from "./helpers";
import BarLayout from "./layouts/BarLayout";
import Overview from "./pages/Overview";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    element: <CenteredLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Intro />,
      },
      {
        element: <BarLayout />,
        children: [
          {
            path: ROUTES.SHOP,
            element: <Overview />,
            loader: async () => await getData("/src/data/items.json"),
          },
          {
            path: `${ROUTES.DETAIL}/:id`,
            element: <Detail />,
            loader: async ({ params }) => {
              const { id } = params;
              console.log("Loading detail for item ID:", id);
              if (!id) {
                throw new Error("Item ID is required");
              }

              return await getData(`/src/data/items.json`, id);
            },
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
