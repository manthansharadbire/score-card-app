import React from 'react';
import { useState,useEffect } from 'react';
import toast , {Toaster} from 'react-hot-toast'
import ScoreCard from './components/scorecard';


function App() {

  const [scorebarcelona , setScoreBarcelona] = useState(0);
  const [scorearsenal , setScoreArsenal] = useState(0);

  useEffect(()=>{
    if (scorebarcelona<5 && scorearsenal<5){
      return;
    }

  if(scorebarcelona === 5){
    toast.success("Barcelona Wins");
  }

if (scorearsenal === 5){
  toast.success("Arsenal Wins");
}

  }, [scorebarcelona, scorearsenal]);


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
  <ScoreCard teamName = "Barcelona" teamScore = {scorebarcelona} decreaseScore = {()=>{
    setScoreBarcelona(scorebarcelona - 1 ) 
  }} 
  increaseScore = {()=>{
    setScoreBarcelona(scorebarcelona + 1 ) }}/>

<ScoreCard teamName = "Arsenal" teamScore = {scorearsenal} decreaseScore = {()=>{
    setScoreArsenal(scorearsenal - 1 )
  }} 
  increaseScore = {()=>{
    setScoreArsenal(scorearsenal + 1 ) }}/>
  
    <Toaster/>
    </div>
    </>
  )
}

export default App;
