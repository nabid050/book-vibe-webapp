import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
      
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
      },
      {
         path: '/pages-to-read',
         element: <PagesToRead></PagesToRead>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
 
])