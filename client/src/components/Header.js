import React from "react";
import insight from "../insight_data.json";

const Header = () => {
  return (
    <>
      {insight.map((insight) => {
        return (
          <>
         
            <div key={insight.id} className="flex flex-col justify-center items-start py-5 text-xl">
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
             

              </div>
            
          </>
        );
      })}
    </>
  );
};

export default Header;
