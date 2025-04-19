import { useState,useReducer } from 'react';

const reducer = (state, action) => {
   switch (action.type) {
      case 'increase' :
         return {count : state.count + 1};
      case 'decrease' : 
         return {count : state.count - 1};
      default:
         console.log("No action type");
   }
}

export const ReducerExample = () => {

   const [state, dispatch] = useReducer(reducer, {count : 0});

   return (
      <div>
         <p>Count : {state.count}</p>
         <button onClick={()=>dispatch({type : "increase"})}>+</button>
         <button onClick={() => dispatch({type : "decrease"})}>-</button>
      </div>
   )
}