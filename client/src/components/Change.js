import React from 'react'
import insights from "../insight_data.json"
const Change = () => {
    
  return (
    <>
    {insights.map((insights)=>{
        return(
            <table key={insights.id} className="table table-borderless ">
      <thead>
    <tr>
      <th scope="col">Change</th>
      <th scope="col">{insights.stats.previousValue}K to {insights.stats.currentValue}K</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      
      <td>{insights.stats.dateCreated} to {insights.stats.dateUpdated}</td>
      <td>{insights.stats.absoluteChange}</td>
      </tr>
    </tbody>
  
</table>)
    })}
        
       
      
    </>
  )
}

export default Change
