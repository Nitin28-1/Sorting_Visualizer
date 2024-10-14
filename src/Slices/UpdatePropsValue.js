import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    algorithm: 'bubble',
    colors: `#7852A9`,
    speed: 100,
    range: '30',
    play: false,
    values: [],
    timeouts: []
    
};


const UpdatePropsValue=createSlice({

    name:"updatePropValue",
    initialState:initialState,
    reducers:{
         updateValue(state,value)
        { 
           
            switch (value.payload.type) {
                case 'UPDATE_RANGE': {
                  let arr = [];
                  for (let i = 0; i < value.payload.range; i++) {
                    arr.push([Math.floor(Math.random() * 100) + 1, i]);
                  }
                  return {
                    ...state,
                    range: value.payload.range,
                    values: arr
                  };
                }
            
                case 'UPDATE_VALUES': {
                  return {
                    ...state,
                    values: value.payload._values
                  };
                }
            
                case 'UPDATE_SPEED': {
                  return {
                    ...state,
                    speed: value.payload.speed
                  };
                }
            
                case 'UPDATE_COLOR': {
            
                  return {
                    ...state,
                    colors: value.payload.color
                  };
                }
            
                case 'UPDATE_ALGORITHM': {
                  console.log("times");
                  return {
                    ...state,
                    algorithm: value.payload.algorithm
                  };
                }
            
                case 'UPDATE_TIMEOUTS': {
                  return {
                    ...state,
                    timeouts: value.payload._timeouts
                  };
                }
            
                case 'CHANGE_VALUES': {
                  let arr = [], range = state.range;
                  for (let i = 0; i < range; i++) {
                    arr.push([Math.floor(Math.random() * 100) + 1, i]);
                  }
                  return {
                    ...state,
                    values: arr
                  };
                }
            
                case 'PLAY_PAUSE': {
                  return {
                    ...state,
                    play: value.payload._play
                  };
                }
            
                default:
                  return state;  // Always return the current state for unrecognized actions
              }

        }
    }
})


export const {updateValue} = UpdatePropsValue.actions;
export default UpdatePropsValue.reducer;