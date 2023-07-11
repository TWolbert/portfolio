import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { inject } from '@vercel/analytics';
 

function App() {
  const [count, setCount] = useState(0)
  inject();
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
