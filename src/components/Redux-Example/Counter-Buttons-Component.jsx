import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, fixcounterActions } from "../../store";

const CounterButtonComponent = () => {
  const useDispatchHandle = useDispatch();
  const txtval =useRef('')
  const handleClick = (action) => {
   // const actionObj = {
   //   type: action,
   // };
   // useDispatchHandle(actionObj);
   if(action=="INCREMENT"){
    useDispatchHandle(counterActions.increment());
    useDispatchHandle(fixcounterActions.increment());
   }else if(action=="DECREMENT"){
    useDispatchHandle( counterActions.decrement());
    useDispatchHandle( fixcounterActions.decrement());
   } 
   
  };
  const hadleOnchage=()=>{
   // const actionObj = {
  // payload:{txtVal:txtval.current.value}
  //   };
   // useDispatchHandle(actionObj);
   useDispatchHandle(counterActions.onChange({num:txtval.current.value}));
  }
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClick("INCREMENT")}
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClick("DECREMENT")}
        >
          MINUS
        </button>
      </div>
      <div className="mt-2">
      <label htmlFor="title" className="form-label">
           <b>Change Test</b>
        </label>
      <input type="input" ref={txtval} className="form-control" id="setval" onChange={()=>hadleOnchage()}/>
      </div>
    </>
  );
};
export default CounterButtonComponent;
