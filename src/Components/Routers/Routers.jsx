import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Dashboard from "../DashBoard/Dashboard";
import Statics from "../Statics/Statics";
import CategoryCard from "../CategoryCard/CategoryCard";
import CardDetails from "../CardDetails/CardDetails";
import Error from "../Error/Error";
import Contract from "../Login/Login";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
      {
          path:'/',
          loader:()=> fetch('/categoryData.json'),
          element:<Home></Home>,
          children:[
            {
              path:'/',
              loader:()=> fetch('/mainData.json'),
              element:<CategoryCard></CategoryCard>
            },
            {
              path:'/category/:category',
              loader:()=> fetch('/mainData.json'),
              element:<CategoryCard></CategoryCard>
            }
          ]
      },
      {
        path:'/cardDetails/:details',
        loader:()=> fetch('/mainData.json'),
        element:<CardDetails></CardDetails>
      },
      {
          path:'/dashboard',
          loader:()=> fetch('/mainData.json'),
          element:<Dashboard></Dashboard>
      },
      {
          path:'/statics',
          loader:()=> fetch('/mainData.json'),
          element:<Statics></Statics>
      },
      {
          path:'/login',
          element:<Contract></Contract>
      },
    ]
  },
]);
export default routers;