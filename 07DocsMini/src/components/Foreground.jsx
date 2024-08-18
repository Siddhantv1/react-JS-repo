import React, {useRef, useState } from 'react'
import Card from "./Card";

function Foreground() {

  const ref = useRef(null);


  // data material
  const [cardsData, setCardsData] = useState([
    {
    desc: " This is the experiment, Walrider is coming, I want my money",
    filesize: "0.9MB",
    close: false,
    },
    // object 2
    {
      desc: "Lost in the digital ether, a whisper of code awaits, a cosmic query hangs in the balance.",
      filesize: "42.42KB", // A nod to the ultimate answer
      close: false, // Forever open to exploration
    },
    // object 3
    {
      desc: "A digital artifact, a whisper of creation, a universe of possibilities contained within.",
      filesize: "3.14159KB", // A playful nod to Pi
      close: true, // A finite creation
    }
  ]);
  
  //add card function
  // Function to add a new card
  const addCard = () => {
    const newCard = {
      desc: "New Card Description",
      filesize: "Unknown",
      close: false,
    };
    setCardsData([...cardsData, newCard]);
  };


  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/10 flex gap-5 flex-wrap p-5'>
      {cardsData.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
      {/* Add Button */}
      <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
      <button onClick={addCard} className="text-3xl rounded-full w-16 h-16 bg-blue-500 text-white flex items-center justify-center">
        +
      </button>
    </div>
    </div>
  );
}

export default Foreground
