import "./App.css";
import Login from "./views/Login";
import Register from "./views/Register";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route
            exact
            path="/"
            element={ 
             <Home/>
            }
            
          /> 
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>  
      
    </>
  );
}

export default App;
