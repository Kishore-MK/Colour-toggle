import React from 'react'
import {useState } from 'react';
const Squarebox = ({colorval,hexval,isdark}) => {
    
        const [copied, setCopied] = useState(false);
      
        const handleCopy = () => {
            
          navigator.clipboard.writeText(hexval)
            .then(() => setCopied(true))
            .catch(err => console.error('Failed to copy:', err));

            alert("copied!");
        };
  return (
    <div className='squarebox'
    style={{
        backgroundColor:colorval,
        color: isdark ? "#000":"#FFF"
    }}>
        <p className='color'>{colorval?colorval:"Empty value"}</p>
        <p onDoubleClick={handleCopy}>
        {hexval?hexval:null}</p>
    </div>
  )
}

export default Squarebox