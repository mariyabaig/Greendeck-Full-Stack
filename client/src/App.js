import "./App.css";
import Login from "./views/Login";
import Register from "./views/Register";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route
            exact
            path="/"
            element={ 
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
            
          /> 
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>  
      
    </>
  );
}

export default App;
