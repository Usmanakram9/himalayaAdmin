import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';

const router = (
  <BrowserRouter>
  
      
        <Routes>
         <Route path='/login' element={<Login />} />
          <Route path='/' element={<App />}>
            <Route index={true} path="/" element={<Home/>} />
            <Route path='/userprofile' element={<UpdateProfile />} />
            
          </Route>
        </Routes>
   </BrowserRouter>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>
);