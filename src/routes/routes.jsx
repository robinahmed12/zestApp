import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import TrendingDetails from "../Sections/Trending/TrendingDetails";
import Loading from "../components/Loading/Loading";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoutes from "../private/PrivateRoutes";
import Error from "../components/Error/Error";
import App from "../pages/App/App";
import EducationDetails from "../Sections/Education/EducationDetails";
import HealthDetails from "../Sections/Health/HealthDetails";
import ProductiveDetails from "../Sections/Productivity/Productivedetails";
import Profile from "../pages/Profile/Profile";
import Developers from "../pages/Developers/Developers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          await new Promise((res) => setTimeout(res, 200)); 
          return null;
        },
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <TrendingDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/trending.json"),
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "/detail/:id",
        element: (
          <PrivateRoutes>
            <EducationDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/education.json"),
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "/description/:id",
        element: (
          <PrivateRoutes>
            <HealthDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/health.json"),
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "/detail1/:id",
        element: (
          <PrivateRoutes>
            <ProductiveDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/productivity.json"),
        hydrateFallbackElement: <Loading />,
      },

      {
        path: "/login",
        element: <Login />,
        loader: async () => {
          await new Promise((res) => setTimeout(res, 200));
          return null;
        },
      },
      {
        path: "/login/register",
        element: <Register />,
        loader: async () => {
          await new Promise((res) => setTimeout(res, 200));
          return null;
        },
      },
      {
        path: "/apps",
        element: <App />,
        hydrateFallbackElement: <Loading />,
        loader: async () => {
          await new Promise((res) => setTimeout(res, 200));
          return null;
        },
      },

      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
        loader: async () => {
          await new Promise((res) => setTimeout(res, 200)); 
          return null;
        },
      },
      {
        path: "/developer",
        element: (
          <PrivateRoutes>
            <Developers />
          </PrivateRoutes>
        ),
        loader: () => fetch("/developer.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);
