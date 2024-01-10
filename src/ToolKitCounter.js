import React from 'react'
import { actions } from './store/ToolKitIndex';
import {useDispatch, useSelector} from 'react-redux';

const ToolKitCounter=()=>{
  const dispatcher = useDispatch();
  const counter = useSelector((state)=> {return state.count});
  return(
    <div>ToolKitCounter
      <button onClick={()=>{dispatcher(actions.Increase())}}>Addition</button>
      <button onClick={()=>{dispatcher(actions.Decrease())}}>Subraction</button>
      <button onClick={()=>{dispatcher(actions.Multiply(6))}}>Multiply by</button>

<h1>{counter}</h1>
    </div>
  )
}
export default ToolKitCounter;