import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './auth/Login'
import Register from './auth/Register'
import ContextProvider from './provider/ContextProvider'
import Home from './component/Home'
import AddForm from './component/AddForm'
import Update from './component/Update'
import Details from './component/Details'
import PrivateRoute from './component/PrivateRoute'
import Error from './component/Error'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://coffee-express-server-dc3tulwl8-sahariars-projects.vercel.app/coffee')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://coffee-express-server-dc3tulwl8-sahariars-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path:'/addform',
        element:<PrivateRoute><AddForm></AddForm></PrivateRoute>
      },
      {
        path:'/coffee/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`https://coffee-express-server-dc3tulwl8-sahariars-projects.vercel.app/coffee/${params.id}`)
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
   </ContextProvider>
  </React.StrictMode>,
)
