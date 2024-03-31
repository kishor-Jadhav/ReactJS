import { createSlice } from "@reduxjs/toolkit";

const counterCreateSlice=createSlice({
    name:'counter',
    initialState:INITIAL_STATE,
    reducers:{
      increment:(state,action)=>{
        state.count=state.count+1;
      },
      decrement:(state,action)=>{
        state.count=state.count-1;
      },
      onChange:(state,action)=>{
        state.count= action.payload.num;
      }
    }
  })
  export const counterActions = counterCreateSlice.actions;
  export default counterCreateSlice;