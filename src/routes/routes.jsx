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
      { path: "/about", element: <About /> },
      { path: "/career", element: <Career /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/news/:category/:id",
        element: (
          <PrivateRoutes>
            <NewsDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/news.json"),
      },
    ],
  },
]);

export default routes;

/**
 * loader: async () => {
          const [categoriesResponse, newsResponse] = await Promise.all([
            fetch("/categories.json"),
            fetch("/news.json"),
          ]);

          if (!categoriesResponse.ok || !newsResponse.ok)
            return { categories: [], allNews: [] };

          const categories = await categoriesResponse.json();
          const allNews = await newsResponse.json();
          return { categories, allNews };
        },
 * 
 */
