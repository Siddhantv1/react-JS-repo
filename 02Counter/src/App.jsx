import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const addval=() => {
    console.log("value add");
  }
  
  const subval = () => {
    console.log("valei sub");
  }

  let counter = 6

  return (
    <>
     <h1>Siddhant Ojha</h1>
     <h2>Counter value: {counter}</h2>

     <button 
     onClick={addval()}>
     add value</button>
     <br/>
     <button onClick={subval()}>subtract value</button>
    </>
  )
}

export default App
