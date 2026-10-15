import React,{useState,useEffect} from 'react';
import {login,logout} from './features/authSlice';
import {Header,Footer} from './components/index';
import authService from './appwrite/auth';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false))
  },[]);

  return !loading ? (

      <div className="min-h-screen flex flex-wrap">
        <div className="w-full block">
            <Header />
            <Outlet />
            <Footer />
        </div>
      </div>
  ) :
  null;
}

export default App

// instead of the null until the server finds if the user is present or not what we do is like provide the spinner or anything like in the mordern ui so that user do not fill the blank he fill something is taking or happeing