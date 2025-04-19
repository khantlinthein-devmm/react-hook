import {useRef, useEffect, useState } from 'react';

export const RefExample = () => {
  
   const [count, setCount] = useState(0);
   const initialCount = useRef(0);

   useEffect(() => {
      initialCount.current = count;
   },[count]);

   return (
      <div> 
         <p>Count : {count}</p>
         <p>Initial Count : {initialCount.current}</p>
         <button onClick={() => setCount((prev) => prev + 1) }> Increasement</button>
      </div>
   )
}