import React from 'react';
import btnColors from '../btnColors.js';

function Input(props) {
  return (
    <div className='form'>
      <input onChange={(e) => props.setItem(e.target.value)} type='text' value={props.item} />
      <button
        onMouseOver={() => props.setButtonColor(btnColors.onHover)}
        onMouseOut={() => props.setButtonColor(btnColors.neutral)}
        onClick={() => props.updateList(props.item)}
      >
        <span style={{ backgroundColor: props.buttonColor }}>Add</span>
      </button>
    </div>
  );
}

export default Input;
