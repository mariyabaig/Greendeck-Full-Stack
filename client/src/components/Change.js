import React ,{useState,useEffect}from "react";
import insight from "../data/insight_data.json";
import { TfiArrowUp } from "react-icons/tfi";
import { DateTime } from "luxon";

const Change = () => {

  // const [insight, setInsight] = useState([])

  // const fetchData = () => {
  //   fetch("http://localhost:5000/insightdata")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then( data => {
  //       setInsight(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <>
      {insight.map((insight) => {
        return (
          <table key={insight.id} className="table table-borderless">
            <thead>
              <tr className="text-md text-gray-500">
                <th scope="col">Change</th>
                <th scope="col" className="font-medium">
                  {insight.stats.previousValue}K to{" "}
                  {insight.stats.currentValue}K
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-slate-500 font-medium">
                <td>
                  {" "}
                  {DateTime.fromISO(insight.stats.dateCreated).toFormat(
                    "dd LLL yyyy"
                  )}{" "}
                  to{" "}
                  {DateTime.fromISO(insight.stats.dateUpdated).toFormat(
                    "dd LLL yyyy"
                  )}
                </td>

                <td>
                  <span className="change border-green-500 py-2 px-2 my-2 border-2 bg-green-100 text-green-500 rounded-full">
                    {insight.stats.absoluteChange}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </>
  );
};

export default Change;
