import {createStore} from "redux"

const INITIAL_STATE={
    count:5
}
const counterReducer =(state = INITIAL_STATE, action) => {
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
  };
const couterStore = createStore(counterReducer)

export default couterStore;