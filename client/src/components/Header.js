import React from "react";
import insight from "../insight_data.json";
import { FiZap } from "react-icons/fi";
const Header = () => {
  return (
    <>
      {insight.map((insight) => {
        return (
          <>
         
            <div key={insight.source.id} className="flex flex-row justify-center items-start py-5 text-xl">
              {/* <nav key={insight.id} aria-label="breadcrumb">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><img src={insight.source.logo} style={{height:"20px", width:"20px"}} /></li>
    <li className="breadcrumb-item mx-3"><a href="/">{insight.source.name}</a></li>
    <li className="breadcrumb-item"><a href="/">{insight.source.slug}</a></li>
    <li className="breadcrumb-item active" aria-current="page">{insight.source.category}</li>
    
  </ol>
</nav> */}
              
                <nav className="rounded-md w-full">
                  <ol className="list-reset flex">
                    <li className="pl-9">
                      <img
                        src={insight.source.logo}
                        style={{ height: "20px", width: "20px" }}
                      />
                    </li>
                    <li className="pl-3">
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        {insight.header}
                      </a>
                    </li>
                  </ol>
                </nav>
             
<span className="flex flex-row justify-center items-center float-right border-2 rounded-full px-3 py-2 mx-3 {insight.score === Low ? bg-green-200 border-green-400 text-green-400 : (insight.score === Medium ? bg-yellow-100 border-yellow-400 text-yellow-400 : bg-red-200 border-red-400 text-red-400) }">
  <FiZap/>{insight.score <50 ? "Low" :  insight.score<71 ? "Medium" : "High"} 
</span>
              </div>
            
          </>
        );
      })}
    </>
  );
};

export default Header;
