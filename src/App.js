import React from 'react'
import Inputbox from './components/inputtext';
import Squarebox from './components/square';
import { useState } from 'react';
import './App.css';
const App = () => {

  const [colorval,setcolorval]=useState('')
  const [hexval,sethexval]=useState('')
  const [isdark,setisdark]=useState(true)

  return (
    <div className='App'>
      <Squarebox 
        colorval={colorval}
        hexval={hexval}
        isdark={isdark}
      />
      <Inputbox
      colorval={colorval}
      setcolorval={setcolorval}
      sethexval={sethexval}
      isdark={isdark}
      setisdark={setisdark}
      />
      
    </div>
    
  )
}

export default App;
