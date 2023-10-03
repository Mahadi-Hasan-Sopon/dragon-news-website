import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Login from "../pages/Login/Login";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/about", element: <About /> },
      { path: "/career", element: <Career /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default routes;
