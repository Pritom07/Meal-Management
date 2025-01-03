import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
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
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='),
        element: <Recipes></Recipes>,
      },
      {
        path: "/statistics",
        loader: () => fetch('popularity.json'),
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
    <ToastContainer position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      bodyClassName="toastBody"></ToastContainer>
    <RouterProvider router={router} />
  </StrictMode>,
)
