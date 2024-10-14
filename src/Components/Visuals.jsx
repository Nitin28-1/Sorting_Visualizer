import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateValue } from '../Slices/UpdatePropsValue';
import BubbleSort from './Algorithm/BubbleSort';
import InsertionSort from './Algorithm/InsertionSort';
import MergeSort from './Algorithm/MergeSort';
import QuickSort from './Algorithm/QuickSort';
import SelectionSort from './Algorithm/SelectionSort';
import "./Visuals.css"

const Visuals = () => {
 
    const myState=useSelector(state => state.updatePropValue);
    const dispatch = useDispatch();
    const color= myState.colors;
    const range= myState.range;

    const changeValues=()=>{

  
      let new_arr=[...myState.values];
      for(let i=0;i<new_arr.length;i++)
        document.getElementById(i).style.transform=`translateX(${i*11}px)`;
      
   
      dispatch(updateValue({type:'CHANGE_VALUES'}))

    }


    const handleStartStop=(run)=>{
     
       if(!myState.Play){
         
        document.getElementById('change-btn').disabled=true;
        document.getElementById('change-btn').style.backgroundColor='grey';
        document.getElementById('play-btn').disabled=true;
        document.getElementById('play-btn').style.backgroundColor='grey';

       }
       else
       {
        return ;
       }
       
      
       dispatch(updateValue({type: 'PLAY_PAUSE',_play:run}));

    }

    useEffect(()=>{
        
      if(!myState.play)
      {
        document.getElementById('play-btn').disabled=false;
        document.getElementById('play-btn').style.backgroundColor='rgb(0,149,199)';
        document.getElementById('change-btn').disabled=false;
        document.getElementById('change-btn').style.backgroundColor='rgb(0,149,199)'
      }

    },[myState.play]);

    let Speed = myState.speed;

    if(myState.algorithm === 'selection')
    {
      Speed *= 3;
    }
    else if(myState.algorithm === 'merge')
    {
      Speed *= 5;
    }
    else if(myState.algorithm === 'quick')
    {
      Speed *= 6;
    }

 
    return (
    <div className="visuals">
        <div className="visualizer">
         
         {
           <div className='visual__items' style={{width:`${myState.values.length*11 }px`}}>
            {
               myState.values.map((item)=>{


                return <div key={item[1]} id={item[1]} style={{transition:`${Speed/1000}s linear all`, transform:`translateX(${item[1]*11}px)`}} className="visual__item " > 

                          <h4 className='num_values' >{item[0]}</h4>

                          <div className="visual " style={{height:`${item[0]*3}px`, backgroundColor:color,width : (range < 35 ? '10px' : '10px')}} ></div>
                   </div>
               })
            }
           </div>
         }
        </div>

        <div className="visual__btns">
           <button id='change-btn'  onClick={changeValues}>Random Value</button>
           <button id='play-btn' onClick={() => handleStartStop(true)}>Run</button>
        </div>


        <BubbleSort></BubbleSort>
        <InsertionSort></InsertionSort>
        <MergeSort></MergeSort>
        <QuickSort></QuickSort>
         <SelectionSort></SelectionSort>   

    </div>
  )
}

export default Visuals