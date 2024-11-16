import React from 'react'
import "./Todo.css"
import Addtask from './Addtask'
import Listtask from './Listtask'
import { useState } from 'react'
function Todo() {
    const[tasks,setTasks]=useState([])
    const addTask=(task)=>{
        setTasks([...tasks,{id:Date.now(),text:task}])
    }
    const deleteTask=(id)=>{
        setTasks(tasks.filter(task=>task.id!==id))
    }
  return (
    <>
        <div className='todo-container'>
            <div className='head'> TODO APP</div>
            <div className='addtask'>
                <div>
                    <Addtask addTask={addTask}/>
                </div>
            </div>
            <div className='tasks'>
                <div>
                    <Listtask tasks={tasks} deleteTask={deleteTask}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo