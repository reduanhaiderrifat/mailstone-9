import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ProducDetails from "../components/ProducDetails";
import PrivetRout from "../components/PrivetRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/product",
        element: (
          <PrivetRout>
            <ProducDetails></ProducDetails>
          </PrivetRout>
        ),
      },
    ],
  },
]);
export default router;
