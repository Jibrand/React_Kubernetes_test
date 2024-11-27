import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home/index' 
import About from './page/About/index' 
import Service from './page/service/index' 
import Pricing from "./page/pricing/index";
import Login from "./page/login/index";
import Register from "./page/register/index";
import Verifyid from "./page/verifyaccount/index";
import Profile from "./page/profile/index";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Service />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verifyaccount/:token/:id" element={<Verifyid />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;