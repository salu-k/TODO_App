import React from 'react'
import "./Todo.css"
import Addtask from './Addtask'
import Listtask from './Listtask'
function Todo() {
  return (
    <>
        <div className='todo-container'>
            <div className='head'> TODO APP</div>
            <div className='addtask'>
                <div>
                    <Addtask/>
                </div>
            </div>
            <div className='tasks'>
                <div>
                    <Listtask/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo