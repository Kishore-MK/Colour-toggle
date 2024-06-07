import React from 'react';
import colorNames from 'colornames';

const Inputbox = ({colorval,setcolorval,sethexval,isdark,setisdark}) => {
  return (
    <form className='Colorform' onSubmit={(e)=> e.preventDefault()}>
      <input type="text" placeholder='Add color name'
      required value={colorval}
      onChange={(e)=>{setcolorval(e.target.value);
        sethexval(colorNames(e.target.value));
      }}/>
      <button type='button'
      onClick={()=>setisdark(!isdark)}
      style={{background:colorval
      , color: isdark ? "#000":"#FFF"}}>Toggle text color</button>
    </form>
  )
}

export default Inputbox;