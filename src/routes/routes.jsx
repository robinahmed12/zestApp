import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import { BsApp } from "react-icons/bs";
import TrendingDetails from "../Sections/Trending/TrendingDetails";
import Loading from "../components/Loading/Loading";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoutes from "../private/PrivateRoutes";


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
          element: <PrivateRoutes><TrendingDetails/></PrivateRoutes>,
          loader: ()=> fetch('/trending.json'),
          hydrateFallbackElement: <Loading/>
        },

        {
          path:'/login',
          element: <Login/>
        },
        {
          path: '/login/register',
          element: <Register/>
        }
      ]
    },
  ]);