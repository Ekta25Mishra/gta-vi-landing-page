import React, { useState } from 'react'

const Section = ({title, text}) => {
  const [isOpen, setIsOpen]=useState(false);
  return (
    <div className='pb-4'>
    <button
    aria-expanded={isOpen}
    className='flex  w-full text-left text-2xl forn-bold'
    onClick={()=>setIsOpen(!isOpen)}
    >
      {title}
      <span>
        {isOpen ? "-" : "+"}
      </span>
      
      </button> 

      <div 
      className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 opacity-100 mb-2" : "max-h-0 opaacity-0"}`}> 
       <p className=' mb-3 text-lg leading-relaxed'>
      {text}
    </p>
      </div>
   
    </div>
  )
}

export default Section