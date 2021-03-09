import React, { useState } from 'react';

function Input(props) {
  // Item (from input) to be added to the list of items
  const [item, setItem] = useState('');

  return (
    <div className='form'>
      <input onChange={(e) => setItem(e.target.value)} type='text' value={item} />
      <button
        onMouseOver={() => props.setButtonColor('#ee99a0')}
        onMouseOut={() => props.setButtonColor('')}
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
