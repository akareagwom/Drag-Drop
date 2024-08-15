"use client"
import React, { useState } from 'react';


const Cards = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modaLText,ModalText]= useState('')

    const openModal =()=>{
        setIsOpen(true);
    }
  return (
    <div>
        <button onClick={openModal}>add new card</button>
        {isOpen && 
        <div className=' w-[400px] rounded h-[30vh] text-white bg-red-400'>
          hola senior
        </div>
        }
    </div>
      );
};

export default Cards;