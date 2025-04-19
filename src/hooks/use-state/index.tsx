import { useState } from "react"

export const StateExample = () => {

   const [count, setCount] = useState(0);

   const increseCount = () => {
      setCount((initial) => initial + 1 )
   }

   return (
      <div>
         <p>Count : {count}</p>
         <button onClick={increseCount}>Increase</button>
      </div>
   )
}

// this is usestate 
// prev == initial state = count