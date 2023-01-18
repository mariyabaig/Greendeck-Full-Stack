import { useEffect, useState } from "react";
import React from "react";
//import insight from "../data/insight_data.json";


const Heading = () => {


  const [insight, setInsight] = useState([])

  const fetchData = () => {
    fetch("http://localhost:5000/insightdata")
      .then(response => {
        return response.json()
      })
      .then( data => {
        setInsight(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {insight.map((insight) => {
        return (
          <div key={insight.score.id} className="container font-thin text-xl">
            <div className="flex flex-row my-2 items-center">
              <div className="rounded-full border text-gray-700 flex justify-center  border-gray-900 py-2 px-2 bg-gray-50">
                {insight.content.split(" ")[0]}
              </div>
              <span className="my-2 mx-3 font-medium  text-slate-700">
                {insight.content
                  .split(" ")
                  .slice(1, insight.content.length)
                  .join(" ")}{" "}
                for
              </span>
            </div>
            <div className="flex flex-row my-2 items-center">
              <div className=" w-48 rounded-full border text-gray-700 flex justify-center  border-gray-900 py-2 px-2 bg-gray-50">
               some_dimension
              </div>
              <span className="my-2 mx-3  font-medium  text-slate-700"> with anamoly score of {insight.score}.
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Heading;
