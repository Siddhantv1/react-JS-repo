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

  const [showInput, setShowInput] = useState(false);
  const [newCardText, setNewCardText] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const addCard = () => {
    if (!showInput && !showConfirmation) {
      setShowInput(true);
    } else if (showInput && !showConfirmation) {
      setShowInput(false);
      setShowConfirmation(true);
    }
  };

  const confirmCardCreation = () => {
    const newCard = {
      desc: newCardText,
      filesize: "Unknown",
      close: false,
    };
    setCardsData([...cardsData, newCard]);
    resetState();
  };

  const cancelCardCreation = () => {
    resetState();
  };

  const resetState = () => {
    setShowInput(false);
    setShowConfirmation(false);
    setNewCardText('');
  };

  const deleteCard = (indexToDelete) => {
    if (selectedCardIndex === indexToDelete) {
      const updatedCardsData = cardsData.filter((_, index) => index !== indexToDelete);
      setCardsData(updatedCardsData);
      setSelectedCardIndex(null);
    }
  };

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/10 flex gap-5 flex-wrap p-5'>
      {cardsData.map((item, index) => (
        <Card 
          key={index} 
          data={item} 
          reference={ref} 
          setSelectedCardIndex={setSelectedCardIndex} 
          index={index} 
          isSelected={selectedCardIndex === index}
        />
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

      {/* Confirmation Buttons */}
      {showConfirmation && (
        <div className="absolute bottom-40 right-20 flex gap-2">
          <button onClick={confirmCardCreation} className="text-xl rounded-full w-16 h-16 bg-green-500 text-white flex items-center justify-center cursor-pointer">
            ✔
          </button>
          <button onClick={cancelCardCreation} className="text-xl rounded-full w-16 h-16 bg-red-600 text-white flex items-center justify-center cursor-pointer">
            ✖
          </button>
        </div>
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
