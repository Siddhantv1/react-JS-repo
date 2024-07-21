import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200"
    
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center botton-12 inset-x-0 px-2">
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>


      {/* red color */}
        <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "red"}}
        >RED

        </button>

        {/* green color */}
        <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "green"}}
        >green
          
        </button>

        {/* blue color */}
        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "blue"}}
        >Blue
          
        </button>

        {/* lavender color */}
        <button onClick={() => setColor("lavender")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "lavender", color: "black"}}
        >Lavender
          
        </button>        

        {/* yellow color */}
        <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "yellow", color: "black"}}
        >yellow
          
        </button>

        {/* magenta color */}
        <button onClick={() => setColor("magenta")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "magenta"}}
        >magenta
          
        </button>

        {/* black color */}
        <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor: "black"}}
        >black
          
        </button>

      </div>
      </div>
    </div>
    </>
  )
}

export default App
