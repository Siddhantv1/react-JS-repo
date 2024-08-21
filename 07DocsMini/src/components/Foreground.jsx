import { useRef, useState } from 'react';
import Card from "./Card";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Foreground() {
  const ref = useRef(null);

  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [cardsData, setCardsData] = useState([
    {
      desc: "This is the experiment, Walrider is coming, I want my money",
      filesize: "0.9MB",
      close: false,
    },
    {
      desc: "Lost in the digital ether, a whisper of code awaits, a cosmic query hangs in the balance.",
      filesize: "42.42KB",
      close: false,
    },
    {
      desc: "A digital artifact, a whisper of creation, a universe of possibilities contained within.",
      filesize: "3.14159KB",
      close: true,
    }
  ]);

  const [showInput, setShowInput] = useState(false); // State to control visibility of input dialog
  const [newCardText, setNewCardText] = useState(''); // State to hold the text for the new card

  const addCard = () => {
    if (!showInput) {
      setShowInput(true); // Show input dialog when + is clicked
    } else {
      const newCard = {
        desc: newCardText,
        filesize: "Unknown",
        close: false,
      };
      setCardsData([...cardsData, newCard]);
      setShowInput(false); // Hide input dialog after adding card
      setNewCardText(''); // Reset text input
    }
  };

  const deleteCard = (indexToDelete) => {
    const updatedCardsData = cardsData.filter((_, index) => index !== indexToDelete);
    setCardsData(updatedCardsData);
  };

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/10 flex gap-5 flex-wrap p-5'>
      {cardsData.map((item, index) => (
        <Card key={index} data={item} reference={ref} setSelectedCardIndex={setSelectedCardIndex} index={index} />
      ))}
      {/* Input Dialog */}
      {showInput && (
        <input
          type="text"
          value={newCardText}
          onChange={(e) => setNewCardText(e.target.value)}
          placeholder="Enter card description..."
          className="absolute bottom-40 right-20 p-2 border rounded-lg"
          autoFocus
        />
      )}
      {/* Add Button */}
      <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
        <button onClick={addCard} className="text-3xl rounded-full w-16 h-16 bg-blue-500 text-white flex items-center justify-center">
          +
        </button>

        {/* Remove Card Button */}
        <button onClick={() => selectedCardIndex !== null && deleteCard(selectedCardIndex)} className={`text-xl rounded-full w-16 h-16 ${selectedCardIndex === null ? 'bg-gray-600' : 'bg-red-800'} text-white flex items-center justify-center cursor-pointer`}>
          <RiDeleteBin5Fill />
        </button>
      </div>
    </div>
  );
}

export default Foreground;