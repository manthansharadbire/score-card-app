import React from 'react';

function ScoreCard({ teamName, teamScore, decreaseScore, increaseScore }) {
  return (
    
      <div className='w-1/3 bg-slate-700 text-center shadow-lg rounded-xl text-white'>
        <h1 className='text-center text-2xl m-2 border-b pb-1'>{teamName}</h1>
        <span className='text-9xl'>{teamScore}</span>
        <div className='text-center'>
          <span
            className='text-7xl mx-7 text-red-600 cursor-pointer'
            onClick={decreaseScore} >
            -
          </span>
          <span
            className='text-7xl mx-7 text-green-500 cursor-pointer'
            onClick={increaseScore} 
          >
            +
          </span>
        </div>
      </div>
  );
}

export default ScoreCard;
