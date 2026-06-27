import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import Github, { githubInfoUser } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


/*
const router =createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {path: '',
      element: <Home/>},
      {path: 'About',
      element: <About/>},
      {path: 'ContactUs',
      element: <ContactUs/>},
      
    ]
  }
])*/

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
      loader={()=>githubInfoUser()
      }
      path='Github'
      element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
