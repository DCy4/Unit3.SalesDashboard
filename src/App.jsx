import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Heading from './components/Heading'
import { Drawer } from '@mui/material'
import TemporaryDrawer from './components/Drawer'
import ClippedDrawer from './components/Drawer'




function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Test</h1>
    <ClippedDrawer/>
    <Sidebar/>
   </div>
  )
}

export default App
