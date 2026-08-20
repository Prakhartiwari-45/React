import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [isLoggedIn,setIsLoggedIn] = useState(false)
  // const [isLoggedIn,setIsLoggedIn] = useState(null)
  // const [isLoggedIn,setIsLoggedIn] = useState(undefined)
  // const [isLoggedIn,setIsLoggedIn] = useState('')
  // const [isLoggedIn,setIsLoggedIn] = useState()
  // const [isLoggedIn,setIsLoggedIn] = useState([])
  // const [isLoggedIn,setIsLoggedIn] = useState(NaN)//give problem if !! not in code
  const [isLoggedIn,setIsLoggedIn] = useState(0)//short circuiting

  return (
  <div style={{padding:"2rem"}}>
    <h1>Welcome to Chai Code</h1>
    {/* Toggle the state between falsy and truthy values */}
    <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>
      Toggle Login
    </button>

    <div>
      <h3>&& operator</h3>
      {!!isLoggedIn && <p>Welcome to Chai Code Videos</p>}
    </div>

    <div>
      <h3>Ternary operator</h3>
      {isLoggedIn ? <p>Welcome to Chai Code Videos</p>:"Please Login"}
    </div>
  </div>
  )
}

export default App
