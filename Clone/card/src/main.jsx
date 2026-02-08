import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home1 from './Home1'
import NotFound1 from './NotFound1'
import Login1 from './Login1'
import Counter from './Counter'
import Post from './Post'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home1/>,
    errorElement:<NotFound1/>
   
  },
  {
    path:'/login',
    element: <Login1/>
  },
  {
    path:'/counter',
    element:<Counter/>
  },
  {
    path:'/post/:id',
    element:<Post/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
