import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './components/layout/MainLayout';
import Homepage from './pages/Homepage/Homepage';
import Books from './pages/Books/Books';

const router = createBrowserRouter([
      
  {
    path:  '/',
    element: <MainLayout></MainLayout>,
    children:[
      {
         index: true,
         element: <Homepage></Homepage>
      },
      {
         path: '/books',
         element: <Books></Books>
      }
    ]
  }
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
