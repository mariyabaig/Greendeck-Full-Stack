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
             
<span className="flex flex-row justify-center items-center float-right border-2 rounded-full px-3 py-2 mx-3 bg-green-100 text-green-500 border-green-500 }">
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
