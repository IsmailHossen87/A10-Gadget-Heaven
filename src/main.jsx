import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import routers from './Components/Routers/Routers'
import { CartProvider } from './Hooks/ContExt';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider >  <RouterProvider router={routers} /></CartProvider>
   
  </StrictMode>,
)
