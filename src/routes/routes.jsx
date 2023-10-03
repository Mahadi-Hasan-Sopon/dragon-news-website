import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Login from "../pages/Login/Login";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:categoryId/:id",
        element: (
          <PrivateRoutes>
            <NewsDetails />
          </PrivateRoutes>
        ),
      },
      { path: "/about", element: <About /> },
      { path: "/career", element: <Career /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default routes;
