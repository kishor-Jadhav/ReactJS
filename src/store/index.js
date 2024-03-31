 
import{configureStore, createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE={
    count:5
}
/*const counterReducer =(state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state,count: state.count - 1 };
      case 'ON_CHANGE':
        return {...state, count: action.payload.txtVal };
      default:
        return state;
    }
  };*/
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
const couterStore = configureStore({reducer:{
  counter:counterCreateSlice.reducer,
  fixcounter:fixCounterCreateSlice.reducer
}})

export const counterActions = counterCreateSlice.actions;
export const fixcounterActions = fixCounterCreateSlice.actions;

export default couterStore;