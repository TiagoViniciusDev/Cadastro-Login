import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { FormProvider } from './context/context.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Singup from './components/Singup/Singup.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Login />},
  {path: "singup", element: <Singup />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <RouterProvider router={router}/>
    </FormProvider>
  </React.StrictMode>,
)
