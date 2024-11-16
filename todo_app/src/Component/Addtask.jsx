import React, { useState } from 'react'

function Addtask({addTask}) {
  const[task,setTask]=useState('')
  const handleChange=(e)=>{
    setTask(e.target.value)
  }
  const handleClick=()=>{
    if(task){
      addTask(task);
      setTask('')
    }
  }
  return (
    <>
    <div className='input-container'>
        <input  className='input' type='text' placeholder='Add a task' value={task} onChange={handleChange} /><br/><br/>
        <button className='add-btn' onClick={handleClick}>ADD</button>
    </div>
    </>
  )
}

export default Addtask