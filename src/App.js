import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navabar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import SignUp from './Components/Sign_Up/SignUp';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="SignUp" element={<SignUp/>}/>
        <Route exact path="Login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
