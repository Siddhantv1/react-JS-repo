import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numallow, setnumallow] = useState(false);  //checkbox for nums
  const [charac, setcharac] = useState(false);  //checkbox for special characs
  const [Password, setPassword] = useState("")  //starting string


    //using a 'useRef' hook to make a reference hook {argument value ko pahuchane ka kaam}
    const passwordRefer = useRef(null)



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

    for(let i=1; i<= length; i++){
      let char = Math.floor(Math.random() *str.length + 1) // get index of random character from str

      //insert it into the password passwd
      passwd += str.charAt(char)
    }

    //setting the password
    setPassword(passwd)


  }, [length, numallow, charac, setPassword])

//make another function for copying the password to your clipboard
// plus optimised code by direct use of useCallback
  const copythepassword = useCallback(() => {
    window.navigator.clipboard.writeText(Password)
    }, [Password])


  // use a useEffect so that our passwordGenerator() function can run successfully
  useEffect(() => {
    passwordGenerator()
  }, [length, numallow, charac, passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-7 my-8 bg-black'>
    
    {/* heading */}
    <h1 className='text-white text-center my-3'> Password Generator </h1>


    {/* the input password box + the copy button*/}
    <div className=
    'flex shadow rounded-lg overflow-hidden text-black mb-4'>

      <input type="text"
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRefer}
      />
      {/* the copy button */}
      <button 
      onClick={copythepassword}
      // styling for copy buttom
      className='outline-none bg-blue-800 hover:bg-red-800  text-white px-3 py-0.5 shrink-0 transition-colors duration-200'>
      Copy
      </button>
    </div>

    
    {/* the length ranging bar */}
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x1'>
        <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
        />

        <label>length: {length} </label>
      </div>


    {/* the numbers div box */}
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numallow}
          id="numberInput"
          onChange={() => {
              setnumallow((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      {/* the characters div */}
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charac}
              id="characterInput"
              onChange={() => {
                  setcharac((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>


  </div>

   </>
  )
}

export default App
