"use client"
import React, { useState } from 'react';


const Cards = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modaLText,setModalText]= useState('')

    const openModal =()=>{
        setIsOpen(true);
        setModalText('This is a modal');
    }
  return (
    <div>
        <button onClick={openModal}>add new card</button>
        {isOpen && 
        <div className=' w-[400px] rounded h-[30vh] text-white bg-red-400'>
          {modaLText}
        </div>
        }
    </div>
      );
};

export default Cards;