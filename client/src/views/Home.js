import React from "react";
import Header from "../components/Header";
import Heading from "../components/Heading";
import TopDrivers from "../components/TopDrivers";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row h-screen">
        <div className=" w-3/4">
          <Heading />
          <TopDrivers />
        </div>
        <div className="w-1/4 ">
          <Charts />
        </div>
      </div>
    </>
  );
};

export default Home;
