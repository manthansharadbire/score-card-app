import React from 'react';

function App() {
  return (<>
    <div>
    <h1 className='text-center text-2xl m-3'>La-Liga Scorecard</h1>
    </div>

    <div className='flex justify-around'>
    <div className='w-1/3 bg-blue-500'>
    <h1>Barcelona</h1>
    <span className='text-9xl'>0</span>
    <div>
  <span className='text-7xl'>-</span>
  <span className='text-7xl'>+</span>
    </div>
    </div>
    
    <div className='w-1/3 bg-blue-500'>
    <h1>Barcelona</h1>
    <span className='text-9xl'>0</span>
    <div className='justify-around'>
  <span className='text-7xl'>-</span>
  <span className='text-7xl'>+</span>
    </div>

    </div>
    </div>
    </>
  )
}

export default App;
