import { useRef } from "react";
import { useDispatch } from "react-redux";

const CounterButtonComponent = () => {
  const useDispatchHandle = useDispatch();
  const txtval =useRef('')
  const handleClick = (action) => {
    const actionObj = {
      type: action,
    };
    useDispatchHandle(actionObj);
  };
  const hadleOnchage=()=>{
    const actionObj = {
        type: 'ON_CHANGE',
        payload:{txtVal:txtval.current.value}
      };
    useDispatchHandle(actionObj);
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
