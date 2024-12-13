import { createBrowserRouter } from "react-router-dom";
import { About, Events, Home, Opening, Timeline, Visit } from "../pages";
import { MainLayout } from "../layout";

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
        path: "/timeline",
        element: <Timeline />,
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
        path: "/visit",
        element: <Visit/>,
      },
    ],
  },
]);

