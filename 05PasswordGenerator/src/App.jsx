import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setnumallow] = useState(false);  //checkbox for nums
  const [charac, setcharac] = useState(false);  //checkbox for special characs
  const [Password, setPassword] = useState("")  //starting string


  //password generator code {using useCallback function}
  const passwordGenerator = () => {}

  return (
    <>
    <h1 className='text-4xl text-center text-white'> Password Generator  </h1>

   </>
  )
}

export default App
