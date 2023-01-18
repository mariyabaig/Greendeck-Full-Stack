import React from 'react'
import insights from "../data/insight_data.json"
import { TfiArrowUp } from "react-icons/tfi";
import { DateTime } from "luxon";

const Change = () => {
 

  
  return (
    <>
    {insights.map((insights)=>{
        return(
            <table key={insights.id} className="table table-borderless">
            
      <thead>
    <tr className='text-md text-gray-500'>
      <th scope="col">Change</th>
      <th scope="col" className='font-medium'>{insights.stats.previousValue}K to {insights.stats.currentValue}K</th>
    </tr>
    </thead>
    <tbody>
    <tr className='text-slate-500 font-medium'>
      
     <td> {DateTime.fromISO(insights.stats.dateCreated).toFormat('dd LLL yyyy')} to {DateTime.fromISO(insights.stats.dateUpdated).toFormat('dd LLL yyyy')}</td>
      
      <td><span className='change border-green-500 py-2 px-2 my-2 border-2 bg-green-100 text-green-500 rounded-full'>{insights.stats.absoluteChange}</span></td>
      </tr>
    </tbody>
  
</table>)
    })}
        
       
      
    </>
  )
}

export default Change
