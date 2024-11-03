import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Dashboard from "../DashBoard/Dashboard";
import Statics from "../Statics/Statics";
import CategoryCards from "../CategoryCards/CategoryCards";
const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            children:[
              {
                path:'/',
                loader:()=> fetch('../coffees.json'),
                element:<CategoryCards></CategoryCards>
              },
            ]
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'/statics',
            element:<Statics></Statics>
        }
      ]
    },
  ]);
  export default routers;