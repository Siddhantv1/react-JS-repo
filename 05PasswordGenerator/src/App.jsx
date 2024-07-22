import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setnumallow] = useState(false);  //checkbox for nums
  const [charac, setcharac] = useState(false);  //checkbox for special characs
  const [Password, setPassword] = useState("")  //starting string


  //password generator code {using useCallback function}
  const passwordGenerator = useCallback(() => {
    let passwd = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    //define what happens if numbers are checkboxed
    if (numallow){
      str+= "0123456789"
    }

    //define what happens if special  characters are checkboxed
    if(charac){
      str+="!@#$%^&*()_+~`[]{}:;''<>,./?"
    }

    for(let i=1; i<=Array.length; i++){
      let char = Math.floor(Math.random() *str.length + 1) // get index of random character from str

      //insert it into the password passwd
      passwd = str.charAt(char)
    }

    //setting the password
    setPassword(passwd)

   


  }, [length, numallow, charac, setPassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-black'>
    <div className=
    'className=""flex shadow rounded-lg overflow-hidden mb-4'>

      <input type="text"
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      >

      </input>

    </div>
  </div>

   </>
  )
}

export default App
