import React from 'react'

function Addtask() {
  return (
    <>
    <div className='input-container'>
        <input  className='input' type='text' placeholder='Add a task' /><br/><br/>
        <button className='add-btn'>ADD</button>
    </div>
    </>
  )
}

export default Addtask