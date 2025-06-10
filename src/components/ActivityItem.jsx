import React from 'react'

export const ActivityItem = (props) => {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const handleDelete = (id) => {
        var temparr = activityArr.filter((item)=>{
            if(item.id === id){
                return false
            }
            else{
                return true
            }
        })
        
        setActivityArr(temparr)
    }

  return (
    <div className="flex justify-between">
        <p key={props.item.id}>{props.index+1}.{props.item.activity}</p>
        <button className='text-red-700 cursor-pointer' onClick={()=>handleDelete(props.item.id)}>Delete</button>
    </div>
    )
}
