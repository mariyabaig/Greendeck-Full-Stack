import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import one from "../data/company_logo_name.svg";
import { useAlert } from 'react-alert'

const Login = ({setIsLoggedin}) => {
  const navigate = useNavigate();

  const alert = useAlert();

  const goToRegister = () => {
    navigate("/auth/signup");
  };

  // const [isLoggedin, setIsLoggedin] = useState(false);

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      setIsLoggedin(true);
      navigate("/organizations/quantive");
      alert.show("Successfully logged in.")
    } else {
      alert.show("Invalid credentials, try again");
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedin(false);
    navigate("/auth/login")
    alert.show("Successfully logged out")


  };


  return (
    <>
      
        <div
          className="flex justify-center items-center"
          style={{
            padding: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img className="my-3" src={one} style={{ width: "200px" }} />
        </div>
       
        <div className="p-8 lg:w-1/2 mx-auto">
          <div>
         
            <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
              <p className="text-center text-xl text-gray-500 font-light">
                Sign in with credentials
              </p>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                    required
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 ml-3 text-gray-400 p-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                <div className="relative mt-3">
                  <input
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                    required
                  />
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 ml-3 text-gray-400 p-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-8">
                  <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Sing In
                  </button>
                </div>
                <span className="flex justify-center mt-2">
                  Don't have an account?
                </span>
                <div className="flex items-center justify-center mt-2">
                  <button
                    onClick={goToRegister}
                    className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  >
                    Sign up
                  </button> 
                </div>
              </form>
            </div>
          </div>
        </div>
        <div />
        <div /> 
       

    </>
  );
};

export default Login;
