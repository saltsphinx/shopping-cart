import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
  {
    path: "/:page",
    element: <App />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
