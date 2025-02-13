/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from 'react'
import todo_icon from '../assets/todo.png'
import ToDoItems from './ToDoItems'

const ToDo = () => {

  const [list, setList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const inputTextRef = useRef();

  const add = () => {
    const inputText = inputTextRef.current.value.trim();

    if(inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    }
    setList((prev) => [...prev, newTodo]);
    inputTextRef.current.value = "";
  }

  const deleteItem = (id) => {
    setList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list])
  

  const toggleItem = (id) => {
    setList((prevTodos) => {
      return prevTodos.map((todo) => {
        if(todo.id === id) {
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }

  return (
    <div className='bg-white place-self-center w-10/12 max-w-md flex flex-col p-4 sm:p-6 max-h-[400px] sm:max-h-[450px] lg:max-h-[480px] rounded-xl shadow-lg shadow-gray-400/50'>
        {/* Header */}
      <div className='flex items-center gap-2 mt-4'>
        <img src={todo_icon} alt="" className='w-6 sm:w-8 lg:w-10 sm:mt-1 lg:mt-2' />
        <h1 className='text-black text-xl sm:text-2xl lg:text-3xl font-semibold'>To-Do List</h1>
      </div>

      {/* Input area */}
      <div className='flex items-center my-6 bg-gray-200 rounded-full'>
        <input ref={inputTextRef} type="text" placeholder='Add your task' className='bg-transparent border-0 outline-none flex-1 w-[130px] h-10 md:h-14 pl-3 md:pl-6 pr-2 text-black placeholder:text-slate-600' />
        <button className='border-none rounded-full bg-button w-20 md:w-32 h-10 md:h-14 text-white md:text-xl font-semibold cursor-pointer' onClick={add}>ADD +</button>
      </div>

      {/* List area */}
      <div className='todo-container overflow-y-scroll pr-3'>
        {list.map((item, index) => {
          return <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteItem={deleteItem} toggleItem={toggleItem} />
        })}
      </div>
    </div>
  )
}

export default ToDo
