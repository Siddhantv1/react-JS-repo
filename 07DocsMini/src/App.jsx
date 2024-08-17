import Background from "./components/Background";

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
    <Background/>
    <div className='fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/10'> </div>
    </div>
  )
}

export default App
