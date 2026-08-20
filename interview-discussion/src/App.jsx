import { useState } from 'react'
import './App.css'

function App() {
  console.log("App Rendered",Math.random());
  
  const [value, setValue] = useState(1)
  // const [multipliedValue, setMultipliedValue] = useState(1)

  // Derived value: recalculated on every render from 'value',
  // instead of being stored in its own state.
  // let multipliedValue = value * 5

  // const multiplybyfive = () => {
  //   // setMultipliedValue(value * 5)
  //   setValue(value + 1)
  // }

  const clickMe = () => {
  // setValue(1)
  // setValue(3)
  setValue({
    value: 0,
  })

}


// useEffect(() => {}, [value.value])



  return (
    <>
      // <h1>Main value: {value} </h1>
      {/* <h1>Multiplied value: {multipliedValue} </h1> */}
      {/* <button onClick={multiplybyfive}> 
        Click to multiply by 5
      </button> */}
      <h1>Main value: {value.value} </h1>
      <button onClick={clickMe}> 
        Click
      </button>
    </>
  )
}

export default App
