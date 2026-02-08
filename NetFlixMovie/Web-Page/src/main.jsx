import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Series from './Series.jsx'
import Home from './Home.jsx'
import Screen from './Screen.jsx'
import FrontPage from './FrontPage.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/Home',
      element:<Home/>
      
    },
   
    {
      path:'/screen/:id',
      element:<Home/>
      
    },
    {
      path:'/first',
      element:<FrontPage/>
      
    },
    
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>,
)
