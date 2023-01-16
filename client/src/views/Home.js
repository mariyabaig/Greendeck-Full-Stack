import React from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import TopDrivers from "../components/TopDrivers";
import Charts from "../components/Chart";
import Change from "../components/Change";
const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row h-screen">
        <div className="mx-5 w-3/5">
        <Heading />
        <div className="my-4 float-left text-md">
        <TopDrivers />
        </div>
          
         
        </div>
        <div className="w-2/5 ">
          {/* <Charts /> */}
          <Change/>
        </div>
      </div>
    </>
  );
};

export default Home;
