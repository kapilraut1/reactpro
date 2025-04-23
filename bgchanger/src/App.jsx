import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
const[color, setcolor]=useState('purple');

  return (
    <>
<div className="w-full h-screen duration-200" style={{backgroundColor :color}}>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
<div className="flex flex-wrap justify-around w-full max-w-2xl bg-amber-50 m-1.5 p-2 rounded-full">
<button className='outline-none p-4 py-1 rounded-full text-white shadow-lg bg-red-400' onClick={()=>setcolor('red')}>Red color</button>
<button className='outline-none p-4 py-1 rounded-full text-white shadow-lg bg-green-300' onClick={()=>setcolor('green')}>Green color</button>
<button className='outline-none p-4 py-1 rounded-full text-white shadow-lg bg-yellow-500'onClick={()=>setcolor('yellow')}>Yellow color</button>
</div>
</div>
</div>
    </>
  )
}

export default App
