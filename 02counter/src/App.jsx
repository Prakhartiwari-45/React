import { useState } from "react";

import "./App.css";

function App() {
  // React state variable:
  // counter = current value, setCounter = function to update it
  let [counter, setCounter] = useState(0);

  // This was a normal variable example (not reactive), so it's commented out.
  // let counter=15

  // Increases counter by 4 total (1 + 1 + 1 + 1)
  const addValue = () => {
    // counter=counter+1
    // Functional updates ensure each call gets the latest previous value.
    setCounter((prevCounter) => {
      const newVal=Math.min(20,prevCounter + 1);
      console.log("Value Added", newVal);
      return newVal;
    });
    
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
