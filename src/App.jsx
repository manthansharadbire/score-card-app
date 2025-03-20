import React from 'react';
import { useState,useEffect } from 'react';


function App() {

  const [scorebarcelona , setScoreBarcelona] = useState(0);
  const [scorearsenal , setScoreArsenal] = useState(0);

  return (<>
  <div className='border
  border-gray-700 
   m-4 
   shadow-lg 
   rounded-xl
   bg-slate-700
   text-white '>
   <h1 className='text-center 
   text-2xl 
   m-3 
   font-sans'>
  Football Scorecard
  </h1>
  </div>

    <div className='flex justify-evenly'>
    <div className='w-1/3 bg-slate-700 text-center shadow-lg rounded-xl text-white'>
    <h1 className='text-center text-2xl m-2 border-b pb-1'>Barcelona</h1>
    <span className='text-9xl'>{scorebarcelona}</span>
    <div className='text-center'>
  <span className='text-7xl mx-7 text-red-600 cursor-pointer' 
  onClick={()=>{
    setScoreBarcelona(scorebarcelona - 1)
  }}>-</span>
  <span className='text-7xl mx-7 text-green-500 cursor-pointer' 
  onClick={()=>{
    setScoreBarcelona(scorebarcelona + 1)
  }}>+</span>
    </div>
    </div>
    
    <div className='w-1/3 bg-slate-700 text-center shadow-lg rounded-xl text-white'>
    <h1 className='text-center text-2xl m-2 border-b pb-1'>Arsenal</h1>
    <span className='text-9xl text-center'>{scorearsenal}</span>
    <div className='m-3 text-center'>
  <span className='text-7xl mx-7 text-red-600 cursor-pointer'
  onClick={()=>{
    setScoreArsenal(scorearsenal - 1)
  }}>-</span>
  <span className='text-7xl mx-7 text-green-500 cursor-pointer'
  onClick={()=>{
    setScoreArsenal(scorearsenal + 1)
  }}>+</span>
    </div>

    </div>
    <Toaster/>
    </div>
    </>
  )
}

export default App;
