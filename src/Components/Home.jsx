import React from 'react'
import Sidebar from './Sidebar'
import Visuals from './Visuals'
import './Home.css'

const Home = () => {
  return (
    <div className='h-[80%] flex flex-col  items-center w-[80%] bg-purple-400 pb-10 rounded-2xl'>

        <Visuals></Visuals>
        <Sidebar></Sidebar>
        
    </div>
  )
}

export default Home