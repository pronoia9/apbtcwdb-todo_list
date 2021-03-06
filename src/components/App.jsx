import React, { useState } from 'react';
import Heading from './Heading';
import Form from './Form';
import Item from './Item';
import btnColors from '../btnColors.js';

function App() {
  // To apply a background color to the add button
  const [buttonColor, setButtonColor] = useState('');

  // Item (from input) to be added to the list of items
  const [item, setItem] = useState('');

  // List of items
  const [list, setList] = useState([]);

  function updateList(i) {
    if (i !== '') {
      // update button color
      setButtonColor(btnColors.inputValid);
      setTimeout(() => setButtonColor(''), 150);

      // add the saved item to the list
      setList((prev) => [
        ...prev,
        {
          id: Math.random().toString().slice(2),
          listItem: i,
          checked: false,
        },
      ]);

      // reset the item
      setItem('');
    } else {
      // if nothing was entered, show a different button color
      setButtonColor(btnColors.inputInvalid);
      setTimeout(() => setButtonColor(btnColors.neutral), 150);
    }
  }

  function strikeItem(itm) {
    // map the list and change the checked property of the item that was clicked
    setList(list.map((i) => (i.id === itm.id ? { ...itm, checked: true } : i)));
    // wait and update the list again to delete the item
    setTimeout(() => setList(list.filter((obj) => obj.id !== itm.id)), 500);
  }

  return (
    <div className='container'>
      <Heading />
      <Form
        updateList={updateList}
        setButtonColor={setButtonColor}
        buttonColor={buttonColor}
        item={item}
        setItem
        ={setItem}/>
      <div>
        <ul>
          {list.map((li) => (
            <Item
              key={li.id}
              id={li.id}
              listItem={li.listItem}
              checked={li.checked}
              strikeItem={strikeItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
