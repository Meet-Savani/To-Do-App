/* eslint-disable no-unused-vars */
import React from 'react'
import delete_icon from '../assets/delete.png'
import not_tick from '../assets/not_tick.png'
import tick from '../assets/tick.png'

// eslint-disable-next-line react/prop-types
const ToDoItems = ({text, id, isComplete, deleteItem, toggleItem}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => {toggleItem(id)}} className='flex flex-1 items-center cursor-pointer gap-2'>
        <img src={isComplete ? tick : not_tick} alt="" className='w-4 md:w-6' />
        <p className={`text-slate-700 text-sm  md:text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
            {text}
        </p>
      </div>
    <img onClick={() => {deleteItem(id)}} src={delete_icon} alt="" className='w-3 md:w-4 cursor-pointer' />
    </div>
  )
}

export default ToDoItems
