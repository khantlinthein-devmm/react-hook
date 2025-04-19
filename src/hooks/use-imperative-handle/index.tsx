import React, { useRef, useImperativeHandle, forwardRef} from 'react';
 

// Parent Component
export const ImperativeHandleExample = () => {
   const inputRef = useRef();
   return (
      <div>
         <CustomInput ref={inputRef}/>
         <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
         <button onClick={() =>inputRef.current.clearInput()}>Clear Input</button>
      </div>
   )
}

const CustomInput = forwardRef((props, ref) => {

   const inputRef = useRef();

   useImperativeHandle(ref, () => ({
      focusInput: () => {
         inputRef.current.focus(); // method to focus the input
      },
      clearInput : () => {
         inputRef.current.value = ""; // method to clear the input
      }
   }));

   return <input type="text" ref={inputRef} placeholder="Type something." />
})