import React from 'react'
import insights from "../insight_data.json"
import { TfiArrowUp } from "react-icons/tfi";

const Change = () => {
    
  return (
    <>
    {insights.map((insights)=>{
        return(
            <table key={insights.id} className="table table-borderless">
      <thead>
    <tr className='text-xl'>
      <th scope="col ">Change</th>
      <th scope="col">{insights.stats.previousValue}K to {insights.stats.currentValue}K</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      
     <td>{insights.stats.dateCreated} to {insights.stats.dateUpdated}</td>
      
      <td><span className='change border-green-500 py-2 px-2 my-2 border-2 bg-green-100 text-green-500 rounded-full'>{insights.stats.absoluteChange}</span></td>
      </tr>
    </tbody>
  
</table>)
    })}
        
       
      
    </>
  )
}

export default Change
