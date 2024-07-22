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
    <h1 className='text-4xl text-center text-white'> Password Generator  </h1>

   </>
  )
}

export default App
