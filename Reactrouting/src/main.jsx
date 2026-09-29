import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Home,Contact,AboutUs,Login,GetStarted,User,Github} from "./pages"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./layout/layout";
import { GithubLoader } from './pages/Github'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>
      },

      {
        path : "contact",
        element : <Contact/>
      },

      {
        path : "AboutUs",
        element : <AboutUs/>
      },

      {
        path : "user/:id",
        element : <User/>
      },

      {
        loader : GithubLoader,
        path : "Github",
        element : <Github/>
      }
    ]
  },

  {
    path : "/login",
    element : <Login/>
  },

  {
    path : "/getstarted",
    element : <GetStarted/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
