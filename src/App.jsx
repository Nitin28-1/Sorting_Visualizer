import React, { useState, useEffect } from 'react';
import './App.css'; // You can copy your CSS here
import Home from './Components/Home';


const App = () => {

  return ( <>
    
    <div className='w-full  flex flex-col items-center justify-center bg-purple-200 gap-4 pb-10'>
         <h1 className='text-[30px] sm:text-[50px] font-semibold font-serif'>Sorting Visualizer</h1>
          <Home></Home>
         
    </div>

  </>
  )

}


export default App;
