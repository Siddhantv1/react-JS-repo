import './App.css'

function App() {

  let counter = 6;
  const addval=() => {
    counter = counter +1;
  }
  
  const subval = () => {
    console.log("valei sub", Math.random());
  }



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
