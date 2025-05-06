import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import { BsApp } from "react-icons/bs";
import TrendingDetails from "../Sections/Trending/TrendingDetails";
import Loading from "../components/Loading/Loading";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoutes from "../private/PrivateRoutes";
import Error from "../components/Error/Error";
import App from "../pages/App/App";
import EducationDetails from "../Sections/Education/EducationDetails";
import Health from "../Sections/Health/Health";
import HealthDetails from "../Sections/Health/HealthDetails";
import ProductiveDetails from "../Sections/Productivity/Productivedetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <Error/>,
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
          path: '/detail/:id',
          element: <PrivateRoutes><EducationDetails/></PrivateRoutes>,
          loader: ()=> fetch('/education.json'),
          hydrateFallbackElement: <Loading/>

        },

        {
          path: '/description/:id',
          element: <PrivateRoutes><HealthDetails/></PrivateRoutes>,
          loader: ()=> fetch('/health.json'),
          hydrateFallbackElement: <Loading/>
        },

        {
          path: '/detail1/:id',
          element: <PrivateRoutes><ProductiveDetails/></PrivateRoutes>,
          loader: ()=> fetch('/productivity.json'),
          hydrateFallbackElement: <Loading/>
        },


        {
          path:'/login',
          element: <Login/>
        },
        {
          path: '/login/register',
          element: <Register/>
        },
        {
          path: '/apps',
          element: <App/>
        }
      ]
    },
  ]);