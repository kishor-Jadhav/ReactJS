import { useDispatch, useSelector } from "react-redux";
import ContainerCounterComponent from "./Container-Counter-Component";
import CounterButtonComponent from "./Counter-Buttons-Component";
import CounterHeaderComponent from "./Counter-Header-Component";
import DisplayCounterComponent from "./Display-Counter-Component";


const ReduxDemoComponent=()=>{

   
return(
    <>
    <ContainerCounterComponent>
    <CounterHeaderComponent></CounterHeaderComponent>
    <DisplayCounterComponent></DisplayCounterComponent>
    <CounterButtonComponent></CounterButtonComponent>
    </ContainerCounterComponent>
 
    </>
)
}
export default ReduxDemoComponent;