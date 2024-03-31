import { createSlice } from "@reduxjs/toolkit";

const fixCounterCreateSlice=createSlice({
    name:'fixcounter',
    initialState:INITIAL_STATE,
    reducers:{
      increment:(state,action)=>{
        state.count=state.count+15;
      },
      decrement:(state,action)=>{
        state.count=state.count-15;
      },
     
    }
  })
  export const fixcounterActions = fixCounterCreateSlice.actions;
  export default fixCounterCreateSlice;