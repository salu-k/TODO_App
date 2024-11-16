import React from 'react'

function Listtask({tasks,deleteTask}) {
  let content;
  if(tasks.length>0){
    content=tasks.map((task=>(
      <div className='list-task' key={task.id}>
      {task.text}
      <button className='delete-btn' onClick={()=>deleteTask(task.id)}>Delete</button>
      </div>
    )))
  }
  else{
    content=<p>No tasks added</p>
  }
  return (
    <>
   {content}
    </>
  )
}

export default Listtask