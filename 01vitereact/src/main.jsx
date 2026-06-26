import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const reactElement ={
//     type:'a',
//     props :{
//         'href':'https://google.com',
//         'target' :'_blank'
//     },
//     Children :'Click me to visit Google'
// }

function Myapp(){
  return(
    <h1>Hello</h1>
  )
}

const anotherElement =(
  <a href="https://google.com" target='_blank'>Click me to Visit Google</a>
)

const anotherUser='Chai Aur code'

const reactElement=React.createElement(
  'a',
  {
    'href':'https://google.com',
    'target':'_blank'
  },
  'Click me to visit Google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
  // Myapp()
  // anotherElement
  reactElement
)
