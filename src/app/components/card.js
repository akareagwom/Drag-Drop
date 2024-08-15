"use client"
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';

const Cards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openText, setOpenText] = useState(false);
  const [modalText, setModalText] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openTextModal = (card) => {
    setOpenText(true);
    setSelectedCard(card);
  };

  const closeTextModal = () => {
    setOpenText(false);
  };

  const handleAddText = () => {
    if (modalText.trim()) {
      setCards([...cards, modalText]);
      setModalText('');
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal}>Add new card</button>
      {isOpen && (
        <div className="flex p-2 flex-col w-[400px] rounded h-[30vh] text-black bg-red-400">
          <textarea
            value={modalText}
            onChange={(e) => setModalText(e.target.value)}
          />
          <button
            className="bg-white mt-12 w-[100px] ml-[70%] text-black rounded p-2"
            onClick={closeModal}
          >
            Close
          </button>
          <button onClick={handleAddText} style={{ marginRight: '10px' }}>
            Add
          </button>
        </div>
      )}
      <div>
        <Draggable>
            <Resizable>
                

          <div>
            {cards.map((card, index) => (
              <div key={index}>
                {card.slice(0, 10)} more...
                <button onClick={() => openTextModal(card)}>Show More</button>
              </div>
            ))}
            {openText && (
                <div className='bg-[rgba(215,238,248,255)] rounded w-[500px]'>
                <p>{selectedCard}</p>
                <button onClick={closeTextModal}>Close</button>
                </div>
            )}
          </div>
            </Resizable>
        </Draggable>
      </div>
    </div>
  );
};

export default Cards;