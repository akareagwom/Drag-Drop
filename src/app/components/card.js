"use client"
import React, { useState } from 'react';
import Draggable from 'react-draggable';


const Cards = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openText, setOpenText] = useState(false);
    const [modaLText,setModalText]= useState('');
    const [cards, setCards] = useState([]);

    const openModal =()=>{
        setIsOpen(true);
        // setModalText('');
    }
    const closeModal =()=>{
        setIsOpen(false);
    }

    const handleAddText = () => {
        if (modaLText.trim()) {
          setCards([...cards, modaLText]);
          setModalText('');
          closeModal();
        }
      };
  return (
    <div>
        <button onClick={openModal}>add new card</button>
        {isOpen && 
        <div className=' flex p-2 flex-col w-[400px] rounded h-[30vh] text-black bg-red-400'>
          
            <textarea 
            value={modaLText}
            onChange={(e) => setModalText(e.target.value)}
            />
          <button className='bg-white mt-12 w-[100px] ml-[70%] text-black rounded p-2' onClick={closeModal}>close</button>
            <button onClick={handleAddText} style={{ marginRight: '10px' }}>
              Add
            </button>
        </div>
        }
        <div>
            <Draggable>
                <div>
                {cards.map((card, index) => (
                <div key={index}>
                    {card.slice(0, 10)} more...
                    <button onClick={() => openModal(modaLText)}>Show More</button>
                    
                </div>
                ))}
                </div>
            </Draggable>
        </div>
    </div>
      );
};

export default Cards;