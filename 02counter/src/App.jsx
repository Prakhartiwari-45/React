import { useState } from "react";

import "./App.css";

function App() {
  // React state variable:
  // counter = current value, setCounter = function to update it
  
  let [counter, setCounter] = useState(0);

  // This was a normal variable example (not reactive), so it's commented out.
  // let counter=15

  // Increases counter by 1 with max limit of 20
  const addValue = () => {
    // counter=counter+1 (old way - direct mutation, not reactive)
    
    // Functional updates ensure each call gets the latest previous value
    // This safely increments counter by 1, capped at maximum value of 20
    setCounter((prevCounter) => {
      const newVal = Math.min(20, prevCounter + 1);
      console.log("Value Added", newVal);
      return newVal;
    });

    // React batches state updates: these calls won't trigger re-renders individually
    // Instead, React combines them and updates once after the function completes
    // However, each setCounter call below uses the OLD prevCounter value (closure)
    // So they all increment by 1 from the same base value - only 1 increment actually applies
    setCounter(prevCounter + 1); // These 4 don't work as expected
    setCounter(prevCounter + 1);
    setCounter(prevCounter + 1);
    setCounter(prevCounter + 1);

    // These are the correct way to increment multiple times
    // Functional form ensures each update gets the result of the previous update
    // So this will actually increment by 4 (1+1+1+1)
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    
  };

  // Decreases counter by 1
  const removeValue = () => {
    // Decrease counter by 1 but never let it go below 0
    setCounter((prevCounter) => {
      const newVal = Math.max(0, prevCounter - 1);
      console.log("Value Removed", newVal);
      return newVal;
    });
  };
  return (
    <>
      {/* Main heading */}
      <h1>Chai Aur React</h1>
      {/* Shows current counter value */}
      <h2>Counter Value:{counter}</h2>

      {/* Click to add value */}
      <button onClick={addValue}>Add VAlue {counter}</button>
      <br />
      {/* Click to remove value */}
      <button onClick={removeValue}>Remove VAlue {counter}</button>
      {/* Footer also reflects live counter state */}
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
