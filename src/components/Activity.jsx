import React, { useState } from 'react'
import { ActivityItem } from './ActivityItem'
import { use } from 'react'

export const Activity = () => {
    const [inputValue, setInputValue] = useState(null)
    const [activityArr, setActivityArr] = useState([
        {
            id:1,
            activity:"Go for walk",
        },
        {
            id:2,
            activity:"Take Cold shower",
        }
    ])

    const handleAddActivity = ()=>{
        if(inputValue!=null){
            setActivityArr([...activityArr, {id:activityArr.length+1, activity:inputValue}])
        }else{
            alert("Enter the activity!")
        }
    }
  return (
    <div className='flex gap-4 items-center'>
        <div className="flex-1">
            <h1 className='font-semibold text-2xl mb-4'>Manage Activities</h1>
            <div className="flex">
                <input type="text" placeholder='enter activity here...' className='rounded border border-black p-1' onChange={(e)=>setInputValue(e.target.value)}/>
                <button className='bg-black text-white rounded px-2 -ml-1' onClick={handleAddActivity}>Add</button>
            </div>
        </div>
        <div className="flex-4 bg-purple-400 px-2 py-3 rounded-md">
            <h1 className='font-semibold text-2xl mb-2'>Today's Activity</h1>
            
            {activityArr.length!=0 ? <div>
                {activityArr.map((item, index)=>{
                    return <ActivityItem item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
                })}
            </div> :<p>You haven't added anything yet</p>}
        </div>
    </div>
  )
}
