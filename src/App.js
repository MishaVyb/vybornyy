

import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import Root from './routes/Root'
import ErrorPage from './routes/ErrorPage'

// import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import './App.scss'


function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: (<Root />),
        errorElement: <ErrorPage />,
        children: routes
      }
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
