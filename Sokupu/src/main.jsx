import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Protected from './components/authLayout.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import AllPosts from './pages/AllPosts.jsx';
import EditPost from './pages/EditPost.jsx';
import Home from './pages/Home.jsx';
import Posts from './pages/Posts.jsx';
import AddPost from './pages/AddPost.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/login',
        element: (
          <Protected  authentication={false}>
            <Login />
          </Protected>
        )
      },

      {
        path: '/signup',
        element: (
          <Protected  authentication={false}>
            <Signup />
          </Protected>
        )
      },

      {
        path: '/posts',
        element: (
          <Protected authentication>
            {" "}
            <AllPosts />
          </Protected>
        )
      },

      {
        path: '/edit-post/:slug',
        element: (
          <Protected authentication>
            <EditPost />
          </Protected>
        )
      },

      {
        path: '/post/:slug',
        element: <Posts />
      },

      {
        path: '/create-post',
        element: <AddPost />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)