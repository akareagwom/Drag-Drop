"use client"
import React, { useState } from 'react';
import Draggable from 'react-draggable';


const Cards = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modaLText,setModalText]= useState('');
    const [cards, setCards] = useState([]);

    const openModal =()=>{
        setIsOpen(true);
        setModalText('This is a modal');
    }
    const closeModal =()=>{
        setIsOpen(false);
    }
  return (
    <div>
        <button onClick={openModal}>add new card</button>
        {isOpen && 
        <div className=' flex p-2 flex-col w-[400px] rounded h-[30vh] text-white bg-red-400'>
          {modaLText}
          <button className='bg-white mt-12 w-[100px] ml-[70%] text-black rounded p-2' onClick={closeModal}>close</button>
        </div>
        }
        <div>
            <Draggable>
                <div>
                     you can drag me
                </div>
            </Draggable>
        </div>
    </div>
      );
};

export default Cards;