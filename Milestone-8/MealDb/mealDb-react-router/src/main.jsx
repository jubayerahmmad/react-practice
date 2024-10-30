import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Recipe from "./Recipe";
import Categories from "./Categories";
import ShowAll from "./ShowAll";
import ShowDetails from "./ShowDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/recipe",
        element: <Recipe></Recipe>,
      },
      {
        path: "/categories",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Categories></Categories>,
      },
      {
        path: "/categories/:mealCategory",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.mealCategory}`
          ),
        element: <ShowAll></ShowAll>,
      },
      {
        path: "/categories/:mealCategory/:meal",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.meal}`
          ),
        element: <ShowDetails></ShowDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
