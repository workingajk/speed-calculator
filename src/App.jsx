import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
// import './App.css'
import Home from "./pages/Home";
import Cat from "./pages/Cat";
import { Routes,Route } from "react-router-dom";

function App() {

    return (
        <>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/cat" element={<Cat/>}/>
          
        </Routes>
        </>
    );
}

export default App;
