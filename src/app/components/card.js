"use client"
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
import { Panel, PanelGroup } from "react-resizable-panels";



// import ResizeHandle from "./ResizeHandle";

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
    <div >
      <button className='bg-red-400 p-2 rounded' onClick={openModal}>Add new card</button>
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
                

          <div className='fixed inset-0 z-50 flex items-center justify-center opacity-30 '>
            {cards.map((card, index) => (
              <div className="relative w-[100%]  h-full" key={index}>
                 <p>{card.slice(0, 10)}</p>
                <button onClick={() => openTextModal(card)}>Show More</button>
              </div>
            ))}
            {openText && (
                <div  style={{
                    width: '200px',
                    height: '150px',
                    padding: '10px',
                    border: '1px solid #ddd',
                    resize: 'both',
                    overflow: 'auto',
                  }} className='bg-[rgba(215,238,248,255)] absolute rounded w-[500px]'>
                <p>{selectedCard}</p>
                <button className='bg-red-400 p-2 rounded' onClick={closeTextModal}>Close</button>
                </div>
            )}
          </div>
            </Resizable>
        </Draggable>
              {/* <ResizeHandle /> */}
      </div>
    </div>
  );
};

export default Cards;