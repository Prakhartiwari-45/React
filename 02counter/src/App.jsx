import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)

  // let counter=15

  const addValue= ()=>{
    
    // counter=counter+1
    setCounter(prevCounter =>prevCounter+1)
    setCounter(prevCounter =>prevCounter+1)
    setCounter(prevCounter =>prevCounter+1)
    setCounter(prevCounter =>prevCounter+1)
    
    // console.log("Value Added",counter);
    
  }

  const removeValue= ()=>{
    
    counter=counter-1
    setCounter(counter)
    console.log("Value Removed",counter);
    
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value:{counter}</h2>

      <button onClick={addValue}>Add VAlue {counter}</button><br />
      <button onClick={removeValue}>Remove VAlue {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
