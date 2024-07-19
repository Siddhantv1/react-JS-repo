import { useState } from 'react';
import './App.css'

function App() {

  

  //changes are propagated from CODE or DOM to UI, using usestate hook
  //the method, a convention, to set the useState is a constant/variating array, which holds 2 values
  // first value is the counter, and second :  setCounter is a function responible to change the counter variable
  let [counter, setCounter] = useState(6)

  const addval=() => {

    counter = counter +1;
    setCounter(counter);

    console.log("value added", counter);
  }
  
  const subval = () => {
    counter = counter -1;
    setCounter(counter)
    console.log("value subbed", Math.random());
  }



  return (
    <>
     <h1>Siddhant Ojha</h1>
     <h2>Counter value: {counter}</h2>

     <button 
     onClick={addval}>
     add value</button>
     <br/>
     <button onClick={subval}>subtract value</button>
    </>
  )
}

export default App
