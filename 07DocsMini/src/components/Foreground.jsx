import { useRef, useState } from 'react';
import Card from "./Card";
import BottomNavBar from './BottomNavBar';
//import { RiDeleteBin5Fill } from "react-icons/ri";

function Foreground() {
  const ref = useRef(null);

  const [selectedCardIndices, setSelectedCardIndices] = useState([]);
  const [cardsData, setCardsData] = useState([
    {
      desc: "Lost in the digital ether, a whisper of code awaits, a cosmic query hangs in the balance.",
      tags: ["code", "query"],
      close: false,
    },
    {
      desc: "A digital artifact, a whisper of creation, a universe of possibilities contained within.",
      tags: ["artifact", "creation"],
      close: true,
    }
  ]);

  const [showInput, setShowInput] = useState(false);
  const [newCardText, setNewCardText] = useState('');
  const [newCardTags, setNewCardTags] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const addCard = () => {
    if (!showInput && !showConfirmation) {
      setShowInput(true);
    }
  };

  const confirmCardCreation = () => {
    if (newCardText.trim() !== '') {
      const newCard = {
        desc: newCardText,
        tags: newCardTags.split(',').map(tag => tag.trim()),
        close: false,
      };
      setCardsData([...cardsData, newCard]);
      resetState();
    }
  };

  const cancelCardCreation = () => {
    resetState();
  };

  const resetState = () => {
    setShowInput(false);
    setShowConfirmation(false);
    setNewCardText('');
  };

  const toggleCardSelection = (index, newDesc = null) => {
    if (selectedCardIndices.includes(index)) {
      setSelectedCardIndices(prev => prev.filter(i => i !== index));
    } else {
      setSelectedCardIndices(prev => [...prev, index]);
    }

    if (newDesc){
      setCardsData(prev => prev.map((item, idx) =>
      idx === index ? { ...item, desc:newDesc} : item
      ));
    }
  };

  const deleteSelectedCards = () => {
    if (selectedCardIndices.length > 0) {
      const updatedCardsData = cardsData.filter((_, index) => !selectedCardIndices.includes(index));
      setCardsData(updatedCardsData);
      setSelectedCardIndices([]);
    }
  };

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/10 flex gap-5 flex-wrap p-5'>
      {cardsData.map((item, index) => (
        <Card
          key={index}
          data={item}
          reference={ref}
          toggleCardSelection={toggleCardSelection}
          index={index}
          isSelected={selectedCardIndices.includes(index)}
        />
      ))}

      {/* Input Dialog */}
      {showInput && (
        <div className="absolute bottom-40 right-20">
          <textarea
            type="text"
            value={newCardText}
            onChange={(e) => setNewCardText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') confirmCardCreation();
            }}
            placeholder="Add Note..."
            className="p-2 border rounded-lg"
            autoFocus
          />
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            onChange={(e) => setNewCardTags(e.target.value)}
            className="mt-2 p-2 border rounded-lg"
            />
          <button
            onClick={cancelCardCreation}
            className="absolute top-[-10px] right-[-10px] w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center"
          >
            ✖
          </button>
        </div>
      )}

      <BottomNavBar
        onAddClick={addCard}
        onDeleteClick={deleteSelectedCards}
        onCancelClick={() => setSelectedCardIndices([])}
        showCancel={selectedCardIndices.length > 0}
      />
      
      {/* Add Button */}
      {/* <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
        <button
          onClick={addCard}
          className="text-3xl rounded-full w-16 h-16 bg-blue-500 text-white flex items-center justify-center"
        >
          +
        </button> */}
        
        {/* Delete Button */}
        {/* <button
          onClick={deleteSelectedCards}
          className={`text-xl rounded-full w-16 h-16 ${selectedCardIndices.length > 0 ? 'bg-red-800' : 'bg-gray-600'} text-white flex items-center justify-center cursor-pointer`}
        >
          <RiDeleteBin5Fill />
        </button>
      </div> */}

      {/* Cancel Button for Selected Cards */}
      {/* {selectedCardIndices.length > 0 && (
        <button
          onClick={() => setSelectedCardIndices([])}
          className="fixed bottom-20 left-20 bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Cancel
        </button>
      )} */}
    </div>
  );
}

export default Foreground;
