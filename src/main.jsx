import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Recipes from './Components/Recipes/Recipes';
import Statistics from './Components/Statistics/Statistics';
import Homies from './Components/Homies/Homies';
import Details from './Components/Details/Details';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='),
        element: <Homies></Homies>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Homies/EachRecipe/:mealId",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: <Details></Details>,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
