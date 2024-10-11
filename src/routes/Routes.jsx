import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Tocken from "../components/Tocken";
import GamePage from "../components/GamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,//app
    children: [
        {
            path: "/",
            element: <Home/>
        },
      ]
    },
    {
      path:'/game/:id',
      element:<GamePage />,
      children:''
    }
]);
