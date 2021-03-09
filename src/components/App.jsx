import React, { useState } from 'react';
import Heading from './Heading';
import Input from './Input';
import Item from './Item';

function App() {
  // To apply a background color to the add button
  const [buttonColor, setButtonColor] = useState('');
  // Item (from input) to be added to the list of items
  const [item, setItem] = useState('');
  // List of items
  const [list, setList] = useState([]);

  function updateList() {
    if (item !== '') {
      // update button color
      setButtonColor('peachpuff');
      setTimeout(() => setButtonColor(''), 150);
      // push the saved item to the list
      setList((prev) => [
        ...prev,
        {
          id: Math.random().toString().slice(2),
          listItem: item,
          checked: false,
        },
      ]);
      // then reset the item value
      setItem('');
    } else {
      // if nothing was entered as input, show a different color
      setButtonColor('lightcoral');
      setTimeout(() => setButtonColor(''), 150);
    }
  }

  // on click on a list item will strikethrough it, and then delete it
  function strike(itm) {
    // map the list and change the checked property of the item that was clicked
    setList(list.map((i) => (i.id === itm.id ? { ...itm, checked: true } : i)));
    // wait 0.5s and update the list again to delete the item
    setTimeout(() => setList(list.filter((obj) => obj.id !== itm.id)), 500);
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>

      <div className='form'>
        <input onChange={(e) => setItem(e.target.value)} type='text' value={item} />
        <button
          onMouseOver={() => setButtonColor('palegoldenrod')}
          onMouseOut={() => setButtonColor('')}
          onClick={updateList}
        >
          <span style={{ backgroundColor: buttonColor }}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((li) => (
            <li
              key={li.id}
              style={{ textDecoration: li.checked && 'line-through' }}
              onClick={() => strike(li)}
            >
              {li.listItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
