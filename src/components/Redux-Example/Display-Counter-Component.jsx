import { shallowEqual, useSelector } from "react-redux";

const DisplayCounterComponent=()=>{
    const {count} = useSelector((state) => state.counter)
    const fixcountObj = useSelector((state) => state.fixcounter)
    const fixcount = fixcountObj.count;
    return(
        <>
        <h5>Current Counter - {count}</h5>
        <h5>Current FixCounter - {fixcount}</h5>
        </>
    
    )
    }
    export default DisplayCounterComponent;