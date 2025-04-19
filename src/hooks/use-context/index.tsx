import { useState, createContext, useContext } from "react";

const GlobalStateContext = createContext(null);

export const ContextExample = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <GlobalStateContext.Provider value={{isToggle, setIsToggle}}>
      <div>
        <header>
          <h1>Parent Component</h1>
        </header>

        <ChildToggle />
        <ChildDisplay />
      </div>
    </GlobalStateContext.Provider>
  );
};

const ChildToggle = () => {
   const {setIsToggle} = useContext(GlobalStateContext);
  return (
    <div>
      <button onClick={() => setIsToggle((initial) => !initial)}>Toggle State</button>
    </div>
  );
};

const ChildDisplay = () => {
   const {isToggle} = useContext(GlobalStateContext);
  return (
    <div>
      <p>Current State : {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};
