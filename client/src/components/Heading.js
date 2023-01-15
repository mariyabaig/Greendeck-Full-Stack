import React from 'react'
import insight from "../insight_data.json";

const Heading = () => {
  return (
    <>
    {
        insight.map((insight)=>{
            return (
                <div key={insight.id} className='container '>
                <div className='flex flex-row my-3 items-center'>
        <div className=" w-48 text-xl rounded-full border text-gray-700 flex justify-center font-medium border-gray-900 py-2 px-2 bg-gray-50">{insight.content.split(' ')[0]}</div>
<span className='my-3 mx-3 text-xl font-semibold'>{insight.content.split(' ').slice(1, insight.content.length).join(" ")} for</span>
</div>
<div className='flex flex-row my-2 items-center'>
<div className=" w-48 text-xl rounded-full border text-gray-700 flex justify-center font-medium border-gray-900 py-2 px-2 bg-gray-50">{insight.content.split(' ')[0]}</div>
        <span className='my-3 mx-3 text-xl font-semibold'>{insight.content.split(' ').slice(1, insight.content.length).join(" ")} for</span>
        </div>
        </div>
        
            )
        })
    }
        
    </>
  )
}

export default Heading