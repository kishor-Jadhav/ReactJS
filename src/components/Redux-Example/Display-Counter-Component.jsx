import { shallowEqual, useSelector } from "react-redux";

const DisplayCounterComponent=()=>{
    const counter = useSelector((state) => state.count)
    return(
        <>
        <h5>Current Counter - {counter}</h5>
        </>
    
    )
    }
    export default DisplayCounterComponent;