import React, { useEffect, useState } from 'react'
import { Slider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateValue } from '../Slices/UpdatePropsValue';
import './Sidebar.css'

const Sidebar = () => {

     const myState = useSelector(state=> state.updatePropValue)
     const dispatch= useDispatch();

     const [max,setMax] = useState(30);

     const handleAlgo = (algo)=>{
         
        
        dispatch(updateValue({type:'UPDATE_ALGORITHM',
            algorithm: algo}))
     }

     const resetColor=()=>
     {
        dispatch(updateValue({
            type:'UPDATE_COLOR',
            color: document.getElementById('color').value
        }));
     }

     const handleRange=(_range)=>
     {
        let new_arr= [...myState.values];
        for(let i=0;i < new_arr.length;i++)
            document.getElementById(i).style.transform=`translateX(${i*11}px)`;

        resetColor();


        dispatch(updateValue({
            type:'UPDATE_RANGE',
            range:_range
        }))
        
        dispatch(updateValue({
            type:'CHANGE_VALUES'
        }))
     }
     
     const handleColor=(_color)=>
     {
        dispatch(updateValue({type:'UPDATE_COLOR',color:_color}))
     }

     const handleSpeed=(_speed)=>
     {
        dispatch(updateValue({type:'UPDATE_SPEED',speed:_speed}))
     }

     useEffect(()=>{
        
        console.log("Phle Mere Pass AYay hai");
        handleRange(20);
     },[]);

     useEffect(()=>{

        dispatch(updateValue({type:'UPDATE_COLOR',color:document.getElementById('color').value
        }));
       
     },[]);


     const handleWidth=()=>{
        
        if(window.innerWidth > 1300)
            setMax(70);
        else if(window.innerWidth > 1200)
            setMax(60);
        else if(window.innerWidth > 1100)
            setMax(50);
        else if(window.innerWidth > 900)
            setMax(45);
        else if(window.innerWidth > 800)
            setMax(40);
        else if(window.innerWidth > 500)
            setMax(30);
        else
            setMax(10);

     }

     useEffect(()=>{
        handleWidth();
        window.addEventListener('resize',handleWidth);
        return ()=> window.removeEventListener('resize',handleWidth);
     },[]);


    
  return (
    <div className='sidebar'>
{/*        
       // Algorithm Options */}
       <div className="sidebar__option">
          <label htmlFor="algo">Algorithm: </label>
          <select name="" id="algo" onChange={(e)=> handleAlgo(e.target.value)} disabled={myState.play ? true :  false}>
           <option value="bubble">Bubble Sort</option>
           <option value="merge">Merge Sort</option>
           <option value="insertion">Insertion Sort</option>
           <option value="selection">Selection Sort</option>
           <option value="quick">Quick Sort</option>

          </select>

       </div>

            
       {/* // Range Slider */}
       <div className="sidebar__option">
          <label htmlFor="range">Range:</label>
          <Slider
           style={{width: '100px', height: '5px'} }
           size='small'
           defaultValue={30}
           id='slider'
           min={1}
           className='slider'
           disabled={myState.play ? true : false}
           max={max}
           onChange={(e)=>handleRange(e.target.value)}
           valueLabelDisplay='auto'
          />

       </div>
        
     
       {/* // Color Slider */}

       <div className="sidebar__option">
        <label htmlFor="color">Color: </label>
          <select name="" id="color" onChange={(e)=>handleColor(e.target.value)} disabled={myState.play ? true : false}>
            <option value="rgb(255, 255, 0, 1) "  style={{color: 'rgb(210, 201, 30)'}} 
            >Yellow</option>
            <option value="rgb(0, 255, 0)"
            style={{color: 'rgb(0, 255, 0)'}} >Green</option>
            <option value="rgb(255, 0, 0)"  style={{color: 'rgb(255, 0, 0)'}} >Red</option>
            <option value="rgb(0, 0, 0)"  style={{color: 'rgb(0, 0, 0)'}} >Black</option>
            <option value="rgb(255, 255, 255)"  style={{color: 'rgb(23, 23, 23)'}} >White</option>

          </select>

       </div>


       {/* Speed Of Sorting Algorithm */}
       <div className="sidebar__option">
        <label htmlFor="speed">Speed:</label>
        <select name="" id="speed" onChange={(e)=> handleSpeed(e.target.value)} disabled= {myState.play ? true :  false}>
        <option value="500">SLOW</option>
        <option value="200">MEDIUM</option>
        <option value="100">FAST</option>
        <option value="20">SUPER FAST</option>

        </select>
       </div>


    </div>
  )
}

export default Sidebar