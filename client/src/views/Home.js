import React from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import TopDrivers from "../components/TopDrivers";
import Charts from "../components/Chart";
import Change from "../components/Change";
import one from "../data/company_logo_name.svg";



const Home = () => {

  return (
    <>
      <div className="flex justify-center items-center px-5">
        <img className="my-3" src={one} style={{ width: "200px" }} />
      </div>
      <Header />
      <div className="flex flex-row h-screen">
        <div className="mx-5 w-3/5">
          <Heading />
          <div className="my-4 float-left text-md">
            <TopDrivers />
          </div>
        </div>
        <div className="w-2/5 ">
          <Charts />
          <div className="my-16">
            <Change />
          </div>
        </div>
     
      </div>
      
    </>
  );
};

export default Home;
