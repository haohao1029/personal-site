import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider, NavLink, Link, BrowserRouter
} from 'react-router-dom'
import { AboutMe } from './pages/AboutMe'
import { Project } from './pages/Project'
import { Root } from './Root'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/about-me",
        element: <AboutMe />,
      }, {
        path: "/project",
        element: <Project />,
      }
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <RouterProvider router={router} />

  </React.StrictMode>,
)
