import React from 'react';

function Item(props) {
  return (
    <li
      style={{ textDecoration: props.checked && 'line-through' }}
      onClick={() => props.strikeItem(props)}
    >
      {props.listItem}
    </li>
  );
}

export default Item;
