import "./App.css";
import Login from "./views/Login";
import Register from "./views/Register";
import { useState } from "react";
import { BrowserRouter, Route, Routes , Redirect } from "react-router-dom";
import Home from "./views/Home";
import RouteNotFound from "./views/RouteNotFound";
import RouteError from "./views/RouteError";


function App() {
const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <>
     <BrowserRouter>
        <Routes> 
        <Route path="*" element={<RouteNotFound/>} />
          <Route
            exact
            path="/organizations/quantive"
            
            element= {isLoggedin ? <Home setIsLoggedin={setIsLoggedin}/> : <Login setIsLoggedin={setIsLoggedin}/> }
           
            errorElement={<RouteError />}
            />
            
         
           <Route exact path="/" Redirect to = "/auth/login" element={<Login setIsLoggedin={setIsLoggedin}/>} ></Route> 
          <Route exact path="/auth/login" element={<Login setIsLoggedin={setIsLoggedin}/>} />
          <Route exact path="/auth/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>   
    </>
  );
}

export default App;
