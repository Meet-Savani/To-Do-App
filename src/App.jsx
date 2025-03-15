/* eslint-disable no-unused-vars */
import React from 'react'
import ToDo from './Components/ToDo'
import notes from './assets/notes.avif'

const App = () => {
  const style = {
    backgroundImage: `url(${notes})`,
    backgroundSize: 'cover',  
    backgroundPosition: 'center', 
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center',  
    alignItems: 'center',
    color: 'white', 
  };

  return (
    <div style={style} className='bg-notes grid py-6 min-h-screen'> 
      <ToDo />
    </div>
  )
}

export default App
