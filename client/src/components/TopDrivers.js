import React from "react";
import insight from "../insight_data.json";

const TopDrivers = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden my-3">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-md font-medium text-slate-700 px-6 py-4 text-left"
                    >
                      Top Driver
                    </th>
                    <th
                      scope="col"
                      className="text-md font-medium text-slate-700 px-6 py-4 text-left"
                    >
                      Change
                    </th>
                    <th
                      scope="col"
                      className="text-md font-medium text-slate-700 px-6 py-4 text-left"
                    >
                      Absolute Change
                    </th>
                    <th
                      scope="col"
                      className="text-md font-medium text-slate-700 px-6 py-4 text-left"
                    >
                      Effective Change
                    </th>
                  </tr>
                </thead>
                {insight.map((insight) => {
                  return (
                    <tbody key={insight.id}>
                      <tr>
                        <td className="whitespace-nowrap text-md font-medium">
                          <span className="rounded-full border text-gray-700 flex justify-center font-medium border-gray-900 py-2 px-2 bg-gray-50">{insight.stats.topDrivers[0].map(child=>child[0])}</span>
                        </td>
                        <td className="text-md text-slate-700 font-light px-6 py-4 whitespace-nowrap " >
                        {insight.stats.topDrivers[0].map(child=>child.change)}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                        <span className="border-2 rounded-full px-2 py-1 (insight.stats.topDrivers[0].map(child=>child.absoluteChange) >0 ?( bg-green-200 border-green-400 text-green-900) : bg-red-200 border-red-400 )"> {insight.stats.topDrivers[0].map(child=>child.absoluteChange)}</span>
                       
                       
                        </td>
                        <td className="text-md  font-light px-6 py-4 whitespace-nowrap">
                        <span className="border-2 rounded-full px-2 py-1 (insight.stats.topDrivers[0].map(child=>child.effectiveChange)>0 ? bg-green-200 border-green-400 text-green-900 : bg-red-200 border-red-400 text-red-400)">
                        {insight.stats.topDrivers[0].map(child=>child.effectiveChange)}
                        </span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" whitespace-nowrap text-md font-medium">
                        <span className="rounded-full border text-gray-700 flex justify-center font-medium border-gray-900 py-2 px-2 bg-gray-50">{insight.stats.topDrivers[1].map(child=>child[0])}</span>
                        </td>
                        <td className="text-md text-slate-700 font-light px-6 py-4 whitespace-nowrap " >
                        {insight.stats.topDrivers[1].map(child=>child.change)}
                        </td>
                        <td className="text-md font-light px-6 py-4 whitespace-nowrap">
                        <span className="border-2 rounded-full px-2 py-1 (insight.stats.topDrivers[1].map(child=>child.absoluteChange)>0 ? bg-green-200 border-green-400 text-green-900 : bg-red-200 border-red-400 )"> {insight.stats.topDrivers[1].map(child=>child.absoluteChange)}</span>
                       
                        </td>
                        <td className="text-md text-slate-700 font-light px-6 py-4 whitespace-nowrap">
                        <span className="border-2 rounded-full px-2 py-1 (insight.stats.topDrivers[0].map(child=>child.effectiveChange)>0 ? bg-green-200 border-green-400 text-green-900 : bg-red-200 border-red-400 text-red-400)">
                        {insight.stats.topDrivers[1].map(child=>child.effectiveChange)}
                        </span>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopDrivers;
