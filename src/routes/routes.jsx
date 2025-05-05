import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import { BsApp } from "react-icons/bs";
import TrendingDetails from "../Sections/Trending/TrendingDetails";
import Loading from "../components/Loading/Loading";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            index: true,
            element: <Home/>,  
        },
        {
          path: '/details/:id',
          element: <TrendingDetails/>,
          loader: ()=> fetch('/trending.json'),
          hydrateFallbackElement: <Loading/>
        }
      ]
    },
  ]);