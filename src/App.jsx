import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Ho from './Components/Ho'
import Navbar from './Components/Navbar'
import Gallary from './Components/Gallary/Gallary'

function App() {
  const [count, setCount] = useState(0)

  return (
    
       <BrowserRouter>
      <Navbar/>
         <Routes>
         <Route index element={<Ho/>}/>
         <Route path='/baby1' element={<Gallary/>}/>
        </Routes>

      </BrowserRouter>
  )
}

export default App
