import React, { useState } from 'react';
import btnColors from '../btnColors.js';

function Input(props) {
  // Item (from input) to be added to the list of items
  const [item, setItem] = useState('');

  return (
    <div className='form'>
      <input onChange={(e) => setItem(e.target.value)} type='text' value={item} />
      <button
        onMouseOver={() => props.setButtonColor(btnColors.onHover)}
        onMouseOut={() => props.setButtonColor(btnColors.neutral)}
        onClick={() => {
          props.updateList(item);
          setItem('');
        }}
      >
        <span style={{ backgroundColor: props.buttonColor }}>Add</span>
      </button>
    </div>
  );
}

export default Input;
