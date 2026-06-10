import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"Prakhar",
    age:21
  }
  let newArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-yellow p-4 rounded-xl mb-4'>Tailwaind Test</h1>
      <Card username='Chai Aur Code' link='Hello Click This' />
      <Card username='Prakhar'/>
      
    </>
  )
}

export default App
