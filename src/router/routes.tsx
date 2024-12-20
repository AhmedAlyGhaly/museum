import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout";
import { About, Events, Home, Opening, Resources, Visit } from "../pages";
import { Energy } from "../pages/Energy";
import { Water } from "../pages/Water";
import { Wind } from "../pages/Wind";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/opening",
        element: <Opening />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/water",
        element: <Water />,
      },
      {
        path: "/wind",
        element: <Wind />,
      },
      {
        path: "/energy",
        element: <Energy />,
      },
      {
        path: "/visit",
        element: <Visit />,
      },
    ],
  },
]);

